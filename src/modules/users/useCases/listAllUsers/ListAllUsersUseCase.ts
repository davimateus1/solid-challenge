import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();
    const userFind = users.find((user) => user.id === user_id);

    if (!users) {
      throw new Error("Users not found");
    }

    if (!userFind) {
      throw new Error("User not found");
    }

    if (!userFind.admin) {
      throw new Error("User not admin");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
