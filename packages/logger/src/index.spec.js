require('mocha');
const { assert } = require('chai');
const { ConsoleLogger, LogLevel } = require('./index');

// NOTE: this test file uses the private property `.level` for testing purposes.

describe('logger', () => {
  it('should have the default LogLevel', () => {
    const logger = new ConsoleLogger();
    assert.equal(logger.level, LogLevel.INFO);
  });

  it('should set LogLevel correctly', () => {
    const logger = new ConsoleLogger();
    assert.equal(logger.level, LogLevel.INFO);

    [LogLevel.DEBUG, LogLevel.ERROR, LogLevel.WARN, LogLevel.INFO].forEach((level) => {
      logger.setLevel(level);
      assert.equal(logger.level, level);
    });
  });
});
