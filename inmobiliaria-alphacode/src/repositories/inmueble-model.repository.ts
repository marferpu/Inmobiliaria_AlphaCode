import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoAlphaCodeDataSource} from '../datasources';
import {InmuebleModel, InmuebleModelRelations} from '../models';

export class InmuebleModelRepository extends DefaultCrudRepository<
  InmuebleModel,
  typeof InmuebleModel.prototype.IdInmueble,
  InmuebleModelRelations
> {
  constructor(
    @inject('datasources.mongoAlphaCode') dataSource: MongoAlphaCodeDataSource,
  ) {
    super(InmuebleModel, dataSource);
  }
}
