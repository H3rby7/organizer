import { config as prodConfig } from './config.prod';
import { config as devConfig } from './config.dev';

export interface Config {
  isProd?: boolean;
  dbUrl?: string;
  enableFileLog?: boolean;
}

// check for isProd=true
const isProdArg = process.argv.find(e => e.slice(0, 6) === 'isProd');
const isProd = isProdArg && isProdArg.split('=')[1] === 'true' ? true : false;

// use preset configs prod/dev
const config = isProd ? prodConfig : devConfig;

// set individual values
process.argv.forEach(e => {
  const kvPair = e.split('=');
  if (config.hasOwnProperty(kvPair[0])) {
    config[kvPair[0]] = kvPair[1];
  }
});

console.log(`Using config: ${JSON.stringify(config)}`);

export default config;