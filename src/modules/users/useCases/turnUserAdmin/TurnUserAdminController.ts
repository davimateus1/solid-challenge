import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id: user_id } = request.params;

    const user = this.turnUserAdminUseCase.execute({ user_id });
    user.admin = true;

    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };
