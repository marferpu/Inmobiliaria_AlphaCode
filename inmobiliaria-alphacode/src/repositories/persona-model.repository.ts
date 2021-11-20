import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoAlphaCodeDataSource} from '../datasources';
import {PersonaModel, PersonaModelRelations} from '../models';

export class PersonaModelRepository extends DefaultCrudRepository<
  PersonaModel,
  typeof PersonaModel.prototype.IdPersona,
  PersonaModelRelations
> {
  constructor(
    @inject('datasources.mongoAlphaCode') dataSource: MongoAlphaCodeDataSource,
  ) {
    super(PersonaModel, dataSource);
  }
}
