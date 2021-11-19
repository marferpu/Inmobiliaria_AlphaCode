import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CiudadModel extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  Pais: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdPais?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CiudadModel>) {
    super(data);
  }
}

export interface CiudadModelRelations {
  // describe navigational properties here
}

export type CiudadModelWithRelations = CiudadModel & CiudadModelRelations;
