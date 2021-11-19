import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoAlphaCode',
  connector: 'db2',
  dsn: '	',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  schema: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoAlphaCodeDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoAlphaCode';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoAlphaCode', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
