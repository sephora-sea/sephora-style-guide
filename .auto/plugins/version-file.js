const fs = require('fs')
const execPromise = require('@auto-it/core').execPromise
const inc = require('semver').inc

module.exports = class VersionFilePlugin {
  constructor(config) {
    this.config = config
    this.name = 'version-file'
  }

  /**
   * Setup the plugin
   * @param {import('@auto-it/core').default} auto
   */
  apply(auto) {
    // hook into auto
    auto.hooks.beforeCommitChangelog.tap(
      'VersionFile',
      async ({ currentVersion, bump }) => {
        const version = inc(currentVersion, bump)
        const versionWithoutPrefix = version.replace(/^v/, '')
        fs.writeFileSync('./VERSION', versionWithoutPrefix)
        await execPromise("git", ["add", "VERSION"])
      }
    )
  }
}
