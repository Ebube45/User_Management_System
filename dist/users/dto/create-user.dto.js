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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "FirstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "LastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Date' }),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "DateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "Email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "Address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    (0, class_validator_2.Matches)(/^\+?[1-9]\d{1,13}$/, {
        message: 'Phone number must be in valid international format',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "PhoneNumber", void 0);
//# sourceMappingURL=create-user.dto.js.map