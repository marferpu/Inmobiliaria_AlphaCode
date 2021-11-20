import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoAlphaCodeDataSource} from '../datasources';
import {CredentialsModel, CredentialsModelRelations} from '../models';

export class CredentialsModelRepository extends DefaultCrudRepository<
  CredentialsModel,
  typeof CredentialsModel.prototype.Id,
  CredentialsModelRelations
> {
  constructor(
    @inject('datasources.mongoAlphaCode') dataSource: MongoAlphaCodeDataSource,
  ) {
    super(CredentialsModel, dataSource);
  }
}
