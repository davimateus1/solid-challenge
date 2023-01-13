import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id: user_id } = request.params;

    const user = this.listAllUsersUseCase.execute({ user_id });

    return response.status(201).json(user).send();
  }
}

export { ListAllUsersController };
