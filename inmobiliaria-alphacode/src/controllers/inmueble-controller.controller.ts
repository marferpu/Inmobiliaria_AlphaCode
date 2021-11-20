import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {InmuebleModel} from '../models';
import {InmuebleModelRepository} from '../repositories';

export class InmuebleControllerController {
  constructor(
    @repository(InmuebleModelRepository)
    public inmuebleModelRepository : InmuebleModelRepository,
  ) {}

  @post('/inmuebles')
  @response(200, {
    description: 'InmuebleModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(InmuebleModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InmuebleModel, {
            title: 'NewInmuebleModel',
            
          }),
        },
      },
    })
    inmuebleModel: InmuebleModel,
  ): Promise<InmuebleModel> {
    return this.inmuebleModelRepository.create(inmuebleModel);
  }

  @get('/inmuebles/count')
  @response(200, {
    description: 'InmuebleModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InmuebleModel) where?: Where<InmuebleModel>,
  ): Promise<Count> {
    return this.inmuebleModelRepository.count(where);
  }

  @get('/inmuebles')
  @response(200, {
    description: 'Array of InmuebleModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InmuebleModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InmuebleModel) filter?: Filter<InmuebleModel>,
  ): Promise<InmuebleModel[]> {
    return this.inmuebleModelRepository.find(filter);
  }

  @patch('/inmuebles')
  @response(200, {
    description: 'InmuebleModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InmuebleModel, {partial: true}),
        },
      },
    })
    inmuebleModel: InmuebleModel,
    @param.where(InmuebleModel) where?: Where<InmuebleModel>,
  ): Promise<Count> {
    return this.inmuebleModelRepository.updateAll(inmuebleModel, where);
  }

  @get('/inmuebles/{id}')
  @response(200, {
    description: 'InmuebleModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InmuebleModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InmuebleModel, {exclude: 'where'}) filter?: FilterExcludingWhere<InmuebleModel>
  ): Promise<InmuebleModel> {
    return this.inmuebleModelRepository.findById(id, filter);
  }

  @patch('/inmuebles/{id}')
  @response(204, {
    description: 'InmuebleModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InmuebleModel, {partial: true}),
        },
      },
    })
    inmuebleModel: InmuebleModel,
  ): Promise<void> {
    await this.inmuebleModelRepository.updateById(id, inmuebleModel);
  }

  @put('/inmuebles/{id}')
  @response(204, {
    description: 'InmuebleModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inmuebleModel: InmuebleModel,
  ): Promise<void> {
    await this.inmuebleModelRepository.replaceById(id, inmuebleModel);
  }

  @del('/inmuebles/{id}')
  @response(204, {
    description: 'InmuebleModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inmuebleModelRepository.deleteById(id);
  }
}
