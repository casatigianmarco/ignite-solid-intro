import AppError from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);
    if (userExists) {
      throw new AppError("user_already_exists", 400);
    }
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
