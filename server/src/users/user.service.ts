import { Body, HttpException, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { createUserDto } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async findUser(@Param('id') id: string) {
    try {
      const user = await this.userModel
        .findOne({ _id: id })
        .select('-passwordHash');
      return user;
    } catch (err) {
      throw new HttpException('something went wrong...', 500);
    }
  }

  async createUser(@Body() body: createUserDto) {
    try {
      const { mail, password } = body;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const user = new this.userModel({
        mail,
        passwordHash: hash,
        _id: new mongoose.Types.ObjectId(),
        refreshToken: undefined,
        accessToken: undefined,
      });

      return user;
    } catch (Err) {
      throw new HttpException('Registration failed', 500);
    }
  }

  async findByMail(mail: string) {
    try {
      const user = this.userModel.findOne({ mail });
      if (!user) {
        return undefined;
      }
      return user;
    } catch (err) {
      return undefined;
    }
  }
  async findById(id: string) {
    try {
      const user = await this.userModel.findOne({ _id: id });
      if (user) {
        const userData = { ...user.toObject() };
        delete userData.passwordHash;
        return userData;
      }
      return undefined;
    } catch (err) {
      throw new HttpException('Failed to find user', 404);
    }
  }
}
