const os = require('os').platform();
let cmd = null;

if (os == 'win32') {
	// cmd = `echo Starting build on Windows`;
} else if (os == 'linux') {
	cmd = `(rm -rf build && mkdir -p build && (echo \"✓ CLEANED\" && exit 0) || (echo \"✗ ERROR WHILE CLEANING\" && exit 1)) &&
(cp -r README.md LICENSE.md manifest.json options.html options.js background.js _locales build/ && (SASSPATH=$(npm bin): $SASSPATH sass styles/main.scss build/main.css --style=compressed --no-source-map && SASSPATH=$(npm bin): $SASSPATH sass styles/help.scss build/help.css --style=compressed --no-source-map && (echo \"✓ CSS PACKED\" && exit 0) || (echo \"✗ ERROR WHILE PACKING CSS\" && exit 1)) &&
(imagemin *.png --plugin=optipng --out-dir=build && (echo \"✓ IMAGES COMPRESSED\" && exit 0) || (echo \"✗ ERROR WHILE COMPRESSING IMAGES\" && exit 1)) && (echo \"✓ FILES COPIED\" && exit 0) || (echo \"✗ ERROR WHILE COPYING FILES\" && exit 1)) &&
(cd build/ && zip -r dark-mode-for-outlook.zip * && (echo \"✓ FILES ZIPPED\" && exit 0) || (echo \"✗ ERROR WHILE ZIPPING FILES\" && exit 1)) &&
time=\"\`date +%T\`\" && (echo \"✓ BUILD COMPLETE (\"$time\")\" && exit 0) || (echo \"✗ ERROR WHILE BUILDING\" && exit 1)`
}

if (cmd) {
	require("child_process").spawn(cmd, {
		shell: true
	}).stdout.on('data', data => {
		process.stdout.write(data.toString());
	});
} else {
	console.error('Sorry, there is no build script for your OS (' + os + '). Please perform the build manually\n');
}
