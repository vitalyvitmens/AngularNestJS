import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// import { createConnection, Connection } from 'typeorm';
// import { User } from 'my-app/src/entity/User';

// const connection = await createConnection({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'test',
//   password: 'test',
//   database: 'test',
//   entities: [User],
// });
