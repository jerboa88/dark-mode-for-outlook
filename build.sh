#!/bin/bash
# Copy files to build/, builds css file, and zips
rm -rf build && mkdir -p build && cp -r README.md LICENSE.md manifest.json 128.png 48.png 32.png 16.png _locales build/ && sass style.scss build/style.css --style=compressed --no-source-map && cd build/ && zip -r dark-mode-for-outlook.zip * && time="`date +%T`"; echo "✓ BUILD SUCCESSFUL ("$time")"
