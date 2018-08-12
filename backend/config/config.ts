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
process.argv.forEach(e => setTypedValue(config, e));

console.log(`Using config: ${JSON.stringify(config)}`);

export default config;

function setTypedValue(config: Config, e: string) {
  const kvPair = e.split('=');
  if (config.hasOwnProperty(kvPair[0])) {
    const valueType = typeof config[kvPair[0]];
    const typedValue = getAsTypedValue(valueType, kvPair[1]);
    if (typedValue !== undefined) {
      console.log(`overwriting ${kvPair[0]} with ${typedValue}`)
      config[kvPair[0]] = typedValue;
    }
  }
}

function getAsTypedValue(type: string, value: string): any {
  if (type === 'boolean') {
    return value === 'true' ? true : (value === 'false' ? false : undefined);
  }
  return value as string;
}