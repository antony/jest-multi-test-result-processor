'use strict'

const resolver = require('../resolver')
const jest = require('jest')
const { expect } = jest

describe('reducer', () => {
  const packageJson = {
    'jest-multi-test-result-processor': {
      processors: [
        'module-a',
        'module-b',
        'module-c'
      ]
    }
  }

  beforeEach(() => {
    resolver.getParentPackageMetadata = jest.fn()
    resolver.requireModule = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('loads all specified modules', () => {
    resolver
      .getParentPackageMetadata
      .mockReturnValue(packageJson)

      expect(resolver.requireModule.mock.calls.length).toEqual(3)
  })
})