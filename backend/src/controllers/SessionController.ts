import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import SessionService from '../services/SessionService';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRespository = new UserRepository();
    const sessionService = new SessionService(userRespository);

    const session = await sessionService.execute({
      email,
      password,
    });

    return response.json(session);
  }
}

export default SessionController;
