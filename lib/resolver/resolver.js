'use strict'

const { join } = require('path')

function getParentPackageMetadata () {
  const path = join(process.cwd(), 'package.json')
  return requireModule(path)
}

function requireModule (path) {
  return require(path)
}

module.exports = {
  getParentPackageMetadata,
  requireModule
}