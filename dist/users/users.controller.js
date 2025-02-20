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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const StatusSwitchModel_1 = require("./dto/StatusSwitchModel");
const FilterUserById_1 = require("./dto/FilterUserById");
const swagger_1 = require("@nestjs/swagger");
;
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(createUserDto) {
        return this.usersService.createUserAsync(createUserDto);
    }
    UserStatusSwitcher(Email) {
        return this.usersService.UserStatusSwitcherAsync(Email);
    }
    DashboardMetric() {
        return this.usersService.DashboardMetricAsync();
    }
    GetAllUsersAsync() {
        return this.usersService.GetAllUsersAsync();
    }
    DeleteUser(Request) {
        return this.usersService.DeleteUserAsync(Request);
    }
    findOne(id) {
        return this.usersService.GetUserByIdAsync(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('CreateUser'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)('UserStatusSwitcher'),
    (0, swagger_1.ApiOperation)({ summary: 'Activate User status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User Activated successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StatusSwitchModel_1.status]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "UserStatusSwitcher", null);
__decorate([
    (0, common_1.Get)('DashBoardMetric'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve User Data ' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Users Data retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "DashboardMetric", null);
__decorate([
    (0, common_1.Get)('GetAllUsersDTO'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve User ' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Users Data retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "GetAllUsersAsync", null);
__decorate([
    (0, common_1.Get)("DeleteUser"),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a User ' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Users deleted successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterUserById_1.FilterById]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "DeleteUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve User by id ' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User retrieved successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map