import * as appRoot from 'app-root-path'
import * as logger from 'winston';
import { transports } from 'winston';

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
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

export const configure = () => {
  
  console.log(`Logging to file: ${options.file.filename}`);
  
  logger.configure({
    level: options.level,
    transports: [
      new transports.File(options.file),
      new transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });
}
