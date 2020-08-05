import { Controller, Get } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get()
    getAll(): User[] {
        return this.userService.getUsers();
    }
}