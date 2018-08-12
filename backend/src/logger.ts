import * as appRoot from 'app-root-path'
import * as winston from 'winston';
import { transports } from 'winston';
import { Format } from 'logform';

const options = {
  level: 'debug',
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: getLoggerFormat(false),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: getLoggerFormat(true),
  },
};

console.log(`Logging to file: ${options.file.filename}`);

const logger = winston.createLogger({
  level: options.level,
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

export default logger;

function getLoggerFormat(withColor: boolean): Format {
  const format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
      const {
        timestamp, level, message, ...args
      } = info;
  
      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
  );
  return !withColor ? format : winston.format.combine(winston.format.colorize(), format);
}
