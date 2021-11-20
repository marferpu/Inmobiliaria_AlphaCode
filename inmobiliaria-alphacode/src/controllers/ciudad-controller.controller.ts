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
import {CiudadModel} from '../models';
import {CiudadModelRepository} from '../repositories';

export class CiudadControllerController {
  constructor(
    @repository(CiudadModelRepository)
    public ciudadModelRepository : CiudadModelRepository,
  ) {}

  @post('/ciudad')
  @response(200, {
    description: 'CiudadModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(CiudadModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CiudadModel, {
            title: 'NewCiudadModel',
            
          }),
        },
      },
    })
    ciudadModel: CiudadModel,
  ): Promise<CiudadModel> {
    return this.ciudadModelRepository.create(ciudadModel);
  }

  @get('/ciudad/count')
  @response(200, {
    description: 'CiudadModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CiudadModel) where?: Where<CiudadModel>,
  ): Promise<Count> {
    return this.ciudadModelRepository.count(where);
  }

  @get('/ciudad')
  @response(200, {
    description: 'Array of CiudadModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CiudadModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CiudadModel) filter?: Filter<CiudadModel>,
  ): Promise<CiudadModel[]> {
    return this.ciudadModelRepository.find(filter);
  }

  @patch('/ciudad')
  @response(200, {
    description: 'CiudadModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CiudadModel, {partial: true}),
        },
      },
    })
    ciudadModel: CiudadModel,
    @param.where(CiudadModel) where?: Where<CiudadModel>,
  ): Promise<Count> {
    return this.ciudadModelRepository.updateAll(ciudadModel, where);
  }

  @get('/ciudad/{id}')
  @response(200, {
    description: 'CiudadModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CiudadModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CiudadModel, {exclude: 'where'}) filter?: FilterExcludingWhere<CiudadModel>
  ): Promise<CiudadModel> {
    return this.ciudadModelRepository.findById(id, filter);
  }

  @patch('/ciudad/{id}')
  @response(204, {
    description: 'CiudadModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CiudadModel, {partial: true}),
        },
      },
    })
    ciudadModel: CiudadModel,
  ): Promise<void> {
    await this.ciudadModelRepository.updateById(id, ciudadModel);
  }

  @put('/ciudad/{id}')
  @response(204, {
    description: 'CiudadModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ciudadModel: CiudadModel,
  ): Promise<void> {
    await this.ciudadModelRepository.replaceById(id, ciudadModel);
  }

  @del('/ciudad/{id}')
  @response(204, {
    description: 'CiudadModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ciudadModelRepository.deleteById(id);
  }
}
