import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { UserService } from './data services/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../models/table models/user.model';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {
  }

  public async login(userDto: UserDto): Promise<{ token: string }> {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  public async signup(userDto: UserDto): Promise<{ token: string }> {
    const exUser = await this.userService.getUserByEmail(userDto.Email);
    if (exUser) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.Password, 5);
    const user = await this.userService.createUser({ ...userDto, Password: hashPassword });
    return this.generateToken(user);
  }

  private async generateToken(user: User): Promise<{ token: string }> {
    const payload = {
      id: user.id,
      email: user.Email,
      idRole: user.idRole,
    };
    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(userDto: UserDto): Promise<User> {
    const exUser = await this.userService.getUserByEmail(userDto.Email);
    const isEqualPasswords = bcrypt.compare(userDto.Password, exUser.Password);
    if (!exUser && !isEqualPasswords) {
      throw new UnauthorizedException({ message: 'Неправильный email или пароль' });
    }
    return exUser;
  }
}
