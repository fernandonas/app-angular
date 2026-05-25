import { provideHttpClient } from '@angular/common/http';
import { type EnvironmentProviders } from '@angular/core';

export const coreProviders: EnvironmentProviders[] = [
  provideHttpClient(),
];
