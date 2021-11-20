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
import {CredentialsModel} from '../models';
import {CredentialsModelRepository} from '../repositories';

export class CredentialsControllerController {
  constructor(
    @repository(CredentialsModelRepository)
    public credentialsModelRepository : CredentialsModelRepository,
  ) {}

  @post('/credential')
  @response(200, {
    description: 'CredentialsModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(CredentialsModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CredentialsModel, {
            title: 'NewCredentialsModel',
            
          }),
        },
      },
    })
    credentialsModel: CredentialsModel,
  ): Promise<CredentialsModel> {
    return this.credentialsModelRepository.create(credentialsModel);
  }

  @get('/credential/count')
  @response(200, {
    description: 'CredentialsModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CredentialsModel) where?: Where<CredentialsModel>,
  ): Promise<Count> {
    return this.credentialsModelRepository.count(where);
  }

  @get('/credential')
  @response(200, {
    description: 'Array of CredentialsModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CredentialsModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CredentialsModel) filter?: Filter<CredentialsModel>,
  ): Promise<CredentialsModel[]> {
    return this.credentialsModelRepository.find(filter);
  }

  @patch('/credential')
  @response(200, {
    description: 'CredentialsModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CredentialsModel, {partial: true}),
        },
      },
    })
    credentialsModel: CredentialsModel,
    @param.where(CredentialsModel) where?: Where<CredentialsModel>,
  ): Promise<Count> {
    return this.credentialsModelRepository.updateAll(credentialsModel, where);
  }

  @get('/credential/{id}')
  @response(200, {
    description: 'CredentialsModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CredentialsModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CredentialsModel, {exclude: 'where'}) filter?: FilterExcludingWhere<CredentialsModel>
  ): Promise<CredentialsModel> {
    return this.credentialsModelRepository.findById(id, filter);
  }

  @patch('/credential/{id}')
  @response(204, {
    description: 'CredentialsModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CredentialsModel, {partial: true}),
        },
      },
    })
    credentialsModel: CredentialsModel,
  ): Promise<void> {
    await this.credentialsModelRepository.updateById(id, credentialsModel);
  }

  @put('/credential/{id}')
  @response(204, {
    description: 'CredentialsModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() credentialsModel: CredentialsModel,
  ): Promise<void> {
    await this.credentialsModelRepository.replaceById(id, credentialsModel);
  }

  @del('/credential/{id}')
  @response(204, {
    description: 'CredentialsModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.credentialsModelRepository.deleteById(id);
  }
}
