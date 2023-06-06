// Bump the version inside of package.json without requiring to publish to NPM

const fs = require('fs')
const execPromise = require('@auto-it/core').execPromise
const inc = require('semver').inc

module.exports = class PackageVersionPlugin {
  constructor(config) {
    this.config = config
    this.name = 'package-version'
  }

  /**
   * Setup the plugin
   * @param {import('@auto-it/core').default} auto
   */
  apply(auto) {
    // hook into auto
    auto.hooks.beforeCommitChangelog.tap(
      'PackageVersion',
      async ({ currentVersion, bump }) => {
        const version = inc(currentVersion, bump)
        const versionWithoutPrefix = version.replace(/^v/, '')
        // Load the package.json file
        const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
        // Duplicate the object
        const newPackageJson = { ...packageJson }
        // Update the version
        newPackageJson.version = versionWithoutPrefix
        fs.writeFileSync('./package.json', JSON.stringify(newPackageJson, null, 2))
        await execPromise("git", ["add", "package.json"])
      }
    )
  }
}