; (async () => {
	'use strict';

	// Deps
	const fs = require('fs-extra');
	const imagemin = require('imagemin');
	const optiPng = require('imagemin-optipng');
	const replace = require('replace-in-file');
	const { join } = require('path');
	const { renderSync } = require('sass');
	const { sync: { zip } } = require('zip-local');

	// Constants
	const buildFolder = 'build';
	const firefoxSubfolder = join(buildFolder, 'firefox');
	const chromiumSubfolder = join(buildFolder, 'chromium');
	const localeFolder = '_locales';
	const filesToCopy = ['README.md', 'LICENSE.md', 'manifest.json', 'options.html', 'js/options.js', 'js/background.js', 'js/content.js', '_locales'];
	const scssFiles = ['css/main.scss', 'css/help.scss', 'css/compose.scss'];
	const packageJson = 'package.json';

	// Runtime
	let extensionName;
	let extensionVersion;


	// Shows a success message
	const continueBuild = async (msg) => {
		console.log('✓', msg);
	};

	// Stops the build and shows an error messages
	const cancelBuild = async (msg, error) => {
		console.error('✗', msg);
		console.error(error);

		process.exit(1);
	};

	// Get extension name and version from package.json
	const getExtensionDetails = async () => {
		try {
			const packageObj = await fs.readJson(packageJson);

			extensionName = packageObj.name;
			extensionVersion = packageObj.version.replace('.0', '');
		} catch (error) {
			cancelBuild('Error while getting the extension details from ' + packageJson, error);
		}

		continueBuild('Starting build of ' + extensionName + ' v' + extensionVersion);
	};

	// Generate zip filenames based on the extension name, version, and variant
	const getZipFileName = (extensionVariant) => {
		return extensionName + '-' + extensionVersion + '-' + extensionVariant + '.zip';
	};

	// Generate zip files
	const zipBuildFolders = async () => {
		try {
			zip(firefoxSubfolder).compress().save(join(buildFolder, getZipFileName('firefox')));
			zip(chromiumSubfolder).compress().save(join(buildFolder, getZipFileName('chromium')));

			continueBuild('Files zipped');
		} catch (error) {
			cancelBuild('Error while zipping files', error);
		}
	};

	// Customize manifest for different extension variants so that warnings aren't shown on install
	// (Chrome: Remove "browser_specific_settings" section. Firefox: Make background page persistent)
	const customizeManifest = async () => {
		try {
			const chromiumResult = await replace({
				files: join(chromiumSubfolder, 'manifest.json'),
				from: /\t{0,4}"browser_specific_settings": ?[\s\S]{0,128}\},\s/,
				to: '',
				countMatches: true
			});

			const firefoxResult = await replace({
				files: join(firefoxSubfolder, 'manifest.json'),
				from: /"persistent": ?false/,
				to: '"persistent": true',
				countMatches: true
			});

			if (!chromiumResult || chromiumResult.length != 1 || !chromiumResult[0].hasChanged) {
				throw new Error('Section "browser_specific_settings" could not be found in manifest.json');
			} else if (!firefoxResult || firefoxResult.length != 1 || !firefoxResult[0].hasChanged) {
				throw new Error('Option "persistent" could not be found in manifest.json');
			}

			continueBuild('Manifest modified');
		} catch (error) {
			cancelBuild('Error while modifying manifest', error);
		}
	};

	// Duplicate Firefox build folder to make other build variants
	const duplicateBuildFolder = async () => {
		try {
			await fs.copy(firefoxSubfolder, chromiumSubfolder);

			continueBuild('Duplicated build');
		} catch (error) {
			cancelBuild('Error while duplicating build', error);
		}
	};

	// Compress images
	const compressImages = async () => {
		try {
			const result = await imagemin(['img/*.png'], {
				destination: join(firefoxSubfolder, 'img'),
				plugins: [
					optiPng({
						optimizationLevel: 7
					})
				]
			});

			if (!result || result.length == 0) {
				throw new Error('No images were found');
			}

			continueBuild('Images compressed');
		} catch (error) {
			cancelBuild('Error while compressing images', error);
		}
	};

	// Compile SCSS to CSS
	const compileScss = async () => {
		let scssCompilationError = false;

		scssFiles.forEach(filename => {
			const css = renderSync({
				file: filename,
				outputStyle: 'compressed',
				sourceMap: false
			}).css;

			fs.outputFile(join(firefoxSubfolder, filename.replace('.scss', '.css')), css, error => {
				if (error) {
					scssCompilationError = error;
				}
			});
		});

		scssCompilationError ? cancelBuild('Error while compiling scss', scssCompilationError) : continueBuild('SCSS compiled');
	};

	// Copy files to build folder
	const copyFiles = async () => {
		const copyPromises = filesToCopy.map(filename => {
			return fs.copy(filename, join(firefoxSubfolder, filename));
		});

		try {
			await Promise.all(copyPromises);

			continueBuild('Files copied');
		} catch (error) {
			cancelBuild('Error while copying files', error);
		}
	};

	// Create a build folder if it doesn't exist already, otherwise empty it
	const cleanBuildFolder = async () => {
		try {
			await fs.emptyDir(buildFolder);
			await fs.emptyDir(firefoxSubfolder);
			await fs.emptyDir(chromiumSubfolder);

			continueBuild('Cleaned build folder');
		} catch (error) {
			cancelBuild('Error while cleaning build folder', error);
		}
	};

	// Generate complete store listing descriptions from localized messages
	const generateStoreListings = async () => {
		const localeCodes = (() => fs.readdirSync(localeFolder).filter(filename => fs.statSync(join(localeFolder, filename)).isDirectory()))();

		if (localeCodes !== null) {
			localeCodes.forEach(localeCode => {
				const messages = JSON.parse(fs.readFileSync(join(localeFolder, localeCode, 'messages.json')));
				const listingText = Object.keys(messages)
					.filter(key => key.substring(0, 5) === 'store')
					.map(key => messages[key].message)
					.join('\n\n');

				fs.writeFile(join(buildFolder, 'store-listing-' + localeCode + '.txt'), listingText, error => {
					if (error) {
						cancelBuild('Error while generating store listings for' + localeCode.toUpperCase(), error);
					} else {
						continueBuild('Store listing generated for ' + localeCode.toUpperCase());
					}
				});
			});
		}
	};

	await getExtensionDetails();
	await cleanBuildFolder();
	await copyFiles();
	await compileScss();
	await compressImages();
	await duplicateBuildFolder();
	await customizeManifest();
	await zipBuildFolders();
	await generateStoreListings();

	console.log();
	continueBuild('BUILD COMPLETE (' + new Date().toLocaleTimeString() + ')\n');
})();
