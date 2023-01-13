import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id: user_id } = request.params;

    const users = this.listAllUsersUseCase.execute({ user_id });

    if (!users) {
      return response.status(400).json({ message: "users not found" });
    }

    return response.status(200).json(users).send();
  }
}

export { ListAllUsersController };
