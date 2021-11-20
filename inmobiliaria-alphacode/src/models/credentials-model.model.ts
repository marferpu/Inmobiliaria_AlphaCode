import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CredentialsModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'string',
    required: true,
  })
  IdRolCredential: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CredentialsModel>) {
    super(data);
  }
}

export interface CredentialsModelRelations {
  // describe navigational properties here
}

export type CredentialsModelWithRelations = CredentialsModel & CredentialsModelRelations;
