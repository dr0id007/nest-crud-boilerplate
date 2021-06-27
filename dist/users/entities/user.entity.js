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
exports.UserEntity = void 0;
const base_entity_1 = require("../../common/base.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ length: 30, nullable: false, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 240 }),
    __metadata("design:type", String)
], UserEntity.prototype, "bio", void 0);
__decorate([
    typeorm_1.Column({ name: 'follower_count', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "followerCount", void 0);
__decorate([
    typeorm_1.Column({ name: 'followee_count', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "followeeCount", void 0);
__decorate([
    typeorm_1.Column('boolean', { default: false }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "verified", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('users')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map