import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userRespository = new UserRepository();
    const createUser = new CreateUserService(userRespository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    // delete user.password;

    return response.json(user);
  }
}

export default UserController;
