import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PersonaModel extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  IdRol: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  Cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  Rol: string;

  @property({
    type: 'number',
    required: false,
  })
  PersonasACargo: number;

  @property({
    type: 'string',
    required: false, // solo para empleados y clientes. No aplica a codeudor
  })
  Password: string;

  @property({
    type: 'string',
    required: false, //va dirigido al administrador
  })
  EstadoAsesor: string;

  @property({
    type: 'object',
    
  })
  CartaLaboral?: object;

  @property({
    type: 'object',
  })
  CodigoHash?: object;

  @property({
    type: 'object',
  })
  EnlaceConfirmacion?: object;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdPersona?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PersonaModel>) {
    super(data);
  }
}

export interface PersonaModelRelations {
  // describe navigational properties here
}

export type PersonaModelWithRelations = PersonaModel & PersonaModelRelations;
