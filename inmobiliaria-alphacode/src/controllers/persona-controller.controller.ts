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
import {PersonaModel} from '../models';
import {PersonaModelRepository} from '../repositories';

export class PersonaControllerController {
  constructor(
    @repository(PersonaModelRepository)
    public personaModelRepository : PersonaModelRepository,
  ) {}

  @post('/user')
  @response(200, {
    description: 'PersonaModel model instance',
    content: {'application/json': {schema: getModelSchemaRef(PersonaModel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonaModel, {
            title: 'NewPersonaModel',
            
          }),
        },
      },
    })
    personaModel: PersonaModel,
  ): Promise<PersonaModel> {
    return this.personaModelRepository.create(personaModel);
  }

  @get('/user/count')
  @response(200, {
    description: 'PersonaModel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PersonaModel) where?: Where<PersonaModel>,
  ): Promise<Count> {
    return this.personaModelRepository.count(where);
  }

  @get('/user')
  @response(200, {
    description: 'Array of PersonaModel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PersonaModel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PersonaModel) filter?: Filter<PersonaModel>,
  ): Promise<PersonaModel[]> {
    return this.personaModelRepository.find(filter);
  }

  @patch('/user')
  @response(200, {
    description: 'PersonaModel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonaModel, {partial: true}),
        },
      },
    })
    personaModel: PersonaModel,
    @param.where(PersonaModel) where?: Where<PersonaModel>,
  ): Promise<Count> {
    return this.personaModelRepository.updateAll(personaModel, where);
  }

  @get('/user/{id}')
  @response(200, {
    description: 'PersonaModel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PersonaModel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PersonaModel, {exclude: 'where'}) filter?: FilterExcludingWhere<PersonaModel>
  ): Promise<PersonaModel> {
    return this.personaModelRepository.findById(id, filter);
  }

  @patch('/user/{id}')
  @response(204, {
    description: 'PersonaModel PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonaModel, {partial: true}),
        },
      },
    })
    personaModel: PersonaModel,
  ): Promise<void> {
    await this.personaModelRepository.updateById(id, personaModel);
  }

  @put('/user/{id}')
  @response(204, {
    description: 'PersonaModel PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personaModel: PersonaModel,
  ): Promise<void> {
    await this.personaModelRepository.replaceById(id, personaModel);
  }

  @del('/user/{id}')
  @response(204, {
    description: 'PersonaModel DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personaModelRepository.deleteById(id);
  }
}
