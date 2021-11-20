import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoAlphaCodeDataSource} from '../datasources';
import {CiudadModel, CiudadModelRelations} from '../models';

export class CiudadModelRepository extends DefaultCrudRepository<
  CiudadModel,
  typeof CiudadModel.prototype.IdPais,
  CiudadModelRelations
> {
  constructor(
    @inject('datasources.mongoAlphaCode') dataSource: MongoAlphaCodeDataSource,
  ) {
    super(CiudadModel, dataSource);
  }
}
