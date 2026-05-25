export type EnvironmentName = 'dev' | 'stg' | 'prod';

export interface Environment {
  production: boolean;
  name: EnvironmentName;
  appName: string;
  apiUrl: string;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}
