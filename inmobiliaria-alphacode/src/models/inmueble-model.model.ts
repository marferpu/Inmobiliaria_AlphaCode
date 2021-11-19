import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class InmuebleModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdInmueble: number;

  @property({
    type: 'string',
    id: true,
    required: false, // se genera cuando el cliente desea comprar o alquilar
  })
  IdSolicitud: string;

  @property({
    type: 'number',
    required: true,
  })
  ValorInmueble: number;

  @property({
    type: 'string',
    required: true,
  })
  Departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  Ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'object',
    required: true,
  })
  ImagenInmueble: object;

  @property({
    type: 'string',
    required: false, //para la creación del inmueble
  })
  DescripcionInmueble: string;

  @property({
    type: 'string',
    required: true, //verificar a que se refiere????
  })
  TipoOferta: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoInmueble: string; // Apto, Casa, Finca, Local

  @property({
    type: 'string',
    required: true,
  })
  EstadoInmueble: string; //Libre, Ocupado; En venta, Vendido

  @property({
    type: 'string',
    required: false,
  })
  NombreAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoSolicitud: string; //Alquiler o Compra

  @property({
    type: 'string',
    required: false,
  })
  MensajeSolicitud: string;

  @property({
    type: 'string',
    required: false,
  })
  EmailCliente?: string;

  @property({
    type: 'string',
    required: false,
  })
  NombreCliente?: string;

  @property({
    type: 'string',
    default: 'Alquiler',
    required: false,
  })
  TipoMensaje?: string;

  @property({
    type: 'date',
    required: false,
  })
  FechaInicioAlquiler?: string;

  @property({
    type: 'date',
    required: false,
  })
  FechaFinAlquiler?: string;

  @property({
    type: 'boolean',
    required: false,
  })
  RenovarAlquiler?: boolean;

  @property({
    type: 'number',
    required: false,
  })
  TiempoAlquiler?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InmuebleModel>) {
    super(data);
  }
}

export interface InmuebleModelRelations {
  // describe navigational properties here
}

export type InmuebleModelWithRelations = InmuebleModel & InmuebleModelRelations;
