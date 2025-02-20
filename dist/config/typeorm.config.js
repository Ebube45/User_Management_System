"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const user_entity_1 = require("../users/entities/user.entity");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Maverick123&',
    database: 'Usermanagementsystem',
    entities: [user_entity_1.User],
    synchronize: false,
    migrations: ['src/database/migrations/*-migration.ts'],
});
exports.default = AppDataSource;
//# sourceMappingURL=typeorm.config.js.map