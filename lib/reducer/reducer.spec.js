'use strict'

const resolver = require('../resolver')
const reducer = require('.')

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

  const moduleEntrypoint = jest.fn()

  beforeEach(() => {
    resolver.getParentPackageMetadata = jest.fn()
    resolver.requireModule = jest.fn()

    resolver
      .getParentPackageMetadata
      .mockReturnValue(packageJson)

    resolver
      .requireModule
      .mockReturnValue(moduleEntrypoint)

    reducer()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('loads all specified modules', () => {
    expect(resolver.requireModule.mock.calls.length).toEqual(3)
  })

  it('calls entrypoints with args', () => {
    expect(moduleEntrypoint.mock.calls.length).toEqual(3)
  })
})