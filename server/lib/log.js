const winston = require('winston');

const createLogger = (name) => {
  const options = {
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: name },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  };
  const logger = winston.createLogger(options);

  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

  return logger;
};

module.exports = createLogger;
