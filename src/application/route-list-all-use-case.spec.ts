import { RouteProps } from '../domain/route.entity';
import { RouteInMemoryRepository } from '../infrastructure/databases/route-memory-repository';
import { CreateRouteUseCase } from './route-create-use-case';
import { ListRouteUseCase } from './route-list-all-use-case';

describe('Caso de uso Rota de listagem', () => {
  it('Deve listar todas as rotas', async () => {
    const repositoryInMemory = new RouteInMemoryRepository();
    const promise = await repositoryInMemory.findAll();

    expect(promise).toBeTruthy();
  });
});
