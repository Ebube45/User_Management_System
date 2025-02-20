import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Response } from './dto/ResponseObj';
import { status } from './dto/StatusSwitchModel';
import { DashboardMetric } from './dto/DashboardMetric';
import { FilterById } from './dto/FilterUserById';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUserAsync(createUserDto: CreateUserDto): Promise<Response<User>>;
    UserStatusSwitcherAsync(mail: status): Promise<Response<User>>;
    DashboardMetricAsync(): Promise<Response<DashboardMetric>>;
    GetAllUsersAsync(): Promise<Response<any>>;
    DeleteUserAsync(Data: FilterById): Promise<Response<any>>;
    GetUserByIdAsync(Id: string): Promise<Response<User>>;
}
