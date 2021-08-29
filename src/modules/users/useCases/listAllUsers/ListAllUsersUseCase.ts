import AppError from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("user_not_exists", 400);
    } else if (!user.admin) {
      throw new AppError("user_not_admin", 400);
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
