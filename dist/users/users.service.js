"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const ResponseObj_1 = require("./dto/ResponseObj");
const common_2 = require("@nestjs/common");
const DashboardMetric_1 = require("./dto/DashboardMetric");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUserAsync(createUserDto) {
        const UserResponse = new ResponseObj_1.Response;
        try {
            const UserData = new user_entity_1.User(createUserDto.FirstName, createUserDto.LastName, createUserDto.DateOfBirth, createUserDto.Email, createUserDto.Address, createUserDto.PhoneNumber);
            const user = await this.usersRepository.create(UserData);
            await this.usersRepository.save(user);
            UserResponse.Data = UserData;
            UserResponse.Message = "User Created Successfully";
            UserResponse.StatusCode = common_2.HttpStatus.CREATED;
            UserResponse.Success = true;
            return UserResponse;
        }
        catch (e) {
            UserResponse.Data = e;
            UserResponse.Message = "Error Creating User";
            UserResponse.StatusCode = common_2.HttpStatus.INTERNAL_SERVER_ERROR;
            UserResponse.Success = false;
            return UserResponse;
        }
        ;
    }
    async UserStatusSwitcherAsync(mail) {
        const UserResponse = new ResponseObj_1.Response;
        try {
            const user = await this.usersRepository.createQueryBuilder()
                .update(user_entity_1.User)
                .set({ IsActive: true })
                .where("Email = :Email", { Email: mail.Email })
                .execute();
            console.log(user);
            if (user.affected > 0) {
                UserResponse.Data = null;
                UserResponse.Message = "User is now Active";
                UserResponse.StatusCode = common_2.HttpStatus.OK;
                UserResponse.Success = true;
            }
            else {
                UserResponse.Data = null;
                UserResponse.Message = "Error updating user";
                UserResponse.StatusCode = common_2.HttpStatus.BAD_REQUEST;
                UserResponse.Success = false;
            }
            return UserResponse;
        }
        catch (e) {
            UserResponse.Data = e;
            UserResponse.Message = "Error updating user";
            UserResponse.StatusCode = common_2.HttpStatus.INTERNAL_SERVER_ERROR;
            UserResponse.Success = false;
            return UserResponse;
        }
    }
    async DashboardMetricAsync() {
        const UserResponse = new ResponseObj_1.Response;
        const ActiveUser = [];
        const InActiveUser = [];
        var Counter = 0;
        const DashBoardData = new DashboardMetric_1.DashboardMetric;
        try {
            const user = await this.usersRepository.find({
                where: { IsDeleted: false }
            });
            if (user.length > 0) {
                user.forEach((value) => {
                    if (value.IsActive == true)
                        ActiveUser.push(value);
                    else
                        InActiveUser.push(value);
                    Counter += 1;
                });
                DashBoardData.ActiveUser = ActiveUser;
                DashBoardData.InActiveUser = InActiveUser;
                DashBoardData.TotalUsers = Counter;
                UserResponse.Data = DashBoardData;
                UserResponse.Message = "DashBoard Data";
                UserResponse.StatusCode = common_2.HttpStatus.OK;
                UserResponse.Success = true;
            }
            else {
                UserResponse.Data = null;
                UserResponse.Message = "No users";
                UserResponse.StatusCode = common_2.HttpStatus.NOT_FOUND;
                UserResponse.Success = false;
            }
            return UserResponse;
        }
        catch (e) {
            UserResponse.Data = e;
            UserResponse.Message = "Error updating user";
            UserResponse.StatusCode = common_2.HttpStatus.INTERNAL_SERVER_ERROR;
            UserResponse.Success = false;
            return UserResponse;
        }
    }
    async GetAllUsersAsync() {
        const UserResponse = new ResponseObj_1.Response;
        try {
            const user = await this.usersRepository.createQueryBuilder("user")
                .where({ IsDeleted: false })
                .select([
                "user.FirstName",
                "user.IsActive",
                "user.CreateAt"
            ]).getRawMany();
            if (user.length > 0) {
                UserResponse.Data = user;
                UserResponse.Message = "DashBoard Data";
                UserResponse.StatusCode = common_2.HttpStatus.OK;
                UserResponse.Success = true;
            }
            else {
                UserResponse.Data = null;
                UserResponse.Message = "No users";
                UserResponse.StatusCode = common_2.HttpStatus.NOT_FOUND;
                UserResponse.Success = false;
            }
            return UserResponse;
        }
        catch (e) {
            UserResponse.Data = e;
            UserResponse.Message = "Error updating user";
            UserResponse.StatusCode = common_2.HttpStatus.INTERNAL_SERVER_ERROR;
            UserResponse.Success = false;
            return UserResponse;
        }
    }
    async DeleteUserAsync(Data) {
        const UserResponse = new ResponseObj_1.Response;
        try {
            const existingUser = await this.usersRepository.findOne({ where: { id: Data.Id } });
            existingUser.IsDeleted = true;
            const IsUser = await this.usersRepository.save(existingUser);
            if (IsUser) {
                UserResponse.Data = null;
                UserResponse.Message = "User Deleted";
                UserResponse.StatusCode = common_2.HttpStatus.OK;
                UserResponse.Success = true;
            }
            else {
                UserResponse.Data = null;
                UserResponse.Message = "Error deleting user";
                UserResponse.StatusCode = common_2.HttpStatus.NOT_FOUND;
                UserResponse.Success = false;
            }
            return UserResponse;
        }
        catch (e) {
            UserResponse.Data = e;
            UserResponse.Message = "Error updating user";
            UserResponse.StatusCode = common_2.HttpStatus.INTERNAL_SERVER_ERROR;
            UserResponse.Success = false;
            return UserResponse;
        }
    }
    async GetUserByIdAsync(Id) {
        const UserResponse = new ResponseObj_1.Response;
        try {
            const existingUser = await this.usersRepository.findOne({ where: { id: Id, } });
            if (existingUser) {
                UserResponse.Data = existingUser;
                UserResponse.Message = "User retrieved";
                UserResponse.StatusCode = common_2.HttpStatus.OK;
                UserResponse.Success = true;
            }
            else {
                UserResponse.Data = null;
                UserResponse.Message = "Error retrieving user";
                UserResponse.StatusCode = common_2.HttpStatus.NOT_FOUND;
                UserResponse.Success = false;
            }
            return UserResponse;
        }
        catch (e) {
            UserResponse.Data = e;
            UserResponse.Message = "Error updating user";
            UserResponse.StatusCode = common_2.HttpStatus.INTERNAL_SERVER_ERROR;
            UserResponse.Success = false;
            return UserResponse;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map