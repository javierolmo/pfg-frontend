/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  apiUrl: window['env']['apiUrl'] || 'http://localhost:64001/api',
  docUrl: window['env']['docUrl'] || 'http://localhost:64001/swagger-ui/',
  appname: 'Melodía',
  appversion: '0.3.13',
};
