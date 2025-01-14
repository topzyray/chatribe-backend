import dotenv from 'dotenv';
import bunyan from 'bunyan';
dotenv.config();

class Config {
  public SERVER_PORT: string | undefined;
  public DATABASE_URL_DEV: string | undefined;
  public DATABASE_URL_PROD: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string;
  public SECRET_KEY_TWO: string;
  public CLIENT_URL: string | undefined;
  public REDIS_HOST: string | undefined;

  constructor() {
    this.DATABASE_URL_DEV = process.env.DATABASE_URL_DEV || '';
    this.DATABASE_URL_PROD = process.env.DATABASE_URL_PROD || '';
    this.JWT_TOKEN = process.env.JWT_TOKEN || '';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.REDIS_HOST = process.env.REDIS_HOST || '';

    if (!this.SECRET_KEY_ONE || !this.SECRET_KEY_TWO) {
      throw new Error('SECRET_KEY_ONE and SECRET_KEY_TWO must be set.');
    }
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({ name, level: 'debug' });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
