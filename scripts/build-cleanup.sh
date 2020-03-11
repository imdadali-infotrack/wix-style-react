#!/usr/bin/env bash

EXCLUDE_FILES="
LICENSE
CHANGELOG.md
applitools.config.js
babel.config.js
tsconfig.declarations.json
pom.xml
.npmrc
.editorconfig
README.md
CHANGELOG-V3-V6.md
.gitignore
package.json
CONTRIBUTING.md
.prettierrc.js
depmonkey.ignore
ignore.d.ts
.nvmrc
perfer.config.js
protractor1.conf.js
protractor.conf.js
.ci_config
wallaby.js
protractor2.conf.js
"
VAR="-name "
for ELEMENT in $EXCLUDE_FILES; do
  VAR+="${ELEMENT} -or -name "
done
VAR+="."

# Delete files on root directory, except excluded.
echo Delete build files
find . -depth 1 -type f -not \( $VAR \) -delete

# Delete dist
rm -rf dist

# Delete auto docs
rm -rf autodocs-registry

# Delete new-icons
rm -rf new-icons

# Delete storybook static
echo Delete storybook build files
rm -rf storybook-static

# Delete empty folders
echo Delete empty folders
find . -type d -empty -delete

echo Done!
