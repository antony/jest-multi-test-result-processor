'use strict'

const resolver = require('../resolver')
const CONFIG_KEY = 'jest-multi-test-result-processor'

module.exports = function () {
  const metadata = resolver.getParentPackageMetadata()
  const entries = metadata[CONFIG_KEY].processors
  return entries.reduce((curr, entry) => {
    return resolver.requireModule(entry).apply(this, arguments)
  }, null)
}
