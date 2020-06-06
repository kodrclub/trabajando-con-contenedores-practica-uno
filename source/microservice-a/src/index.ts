import {MicroserviceAApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {MicroserviceAApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new MicroserviceAApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log("Ola ke ase 2");
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
