import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { status } from './dto/StatusSwitchModel';
import { FilterById } from './dto/FilterUserById';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import("./dto/ResponseObj").Response<import("./entities/user.entity").User>>;
    UserStatusSwitcher(Email: status): Promise<import("./dto/ResponseObj").Response<import("./entities/user.entity").User>>;
    DashboardMetric(): Promise<import("./dto/ResponseObj").Response<import("./dto/DashboardMetric").DashboardMetric>>;
    GetAllUsersAsync(): Promise<import("./dto/ResponseObj").Response<any>>;
    DeleteUser(Request: FilterById): Promise<import("./dto/ResponseObj").Response<any>>;
    findOne(id: string): Promise<import("./dto/ResponseObj").Response<import("./entities/user.entity").User>>;
}
