## Jest Multi 'testResultProcessor'

Allows jest to compose the 'testResultProcessor' so that it can output to multiple test result processors / test reporters.

### Usage

Install the module, and any reporters/processors you want to use:

```bash
  npm install --save-dev jest-multi-test-result-processor
  npm install --save-dev jest-junit
  ...
```

Add a section in your `package.json` as follows:

```json
  "jest-multi-test-result-processor": {
    "processors": [
      "jest-junit",
      "html-jest-reporter"
    ]
  }
```

Jest will run through each of the processors in turn, and pass each of them the results of `jest test`