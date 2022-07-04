import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { AuthService } from '../services/auth.service';
import { mainRoutes } from '../constants/routes';

@Controller(mainRoutes.auth)
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  public login(@Body() userDto: UserDto): Promise<{ token: string }> {
    return this.authService.login(userDto);
  }

  @Post('/signup')
  public signup(@Body() userDto: UserDto): Promise<{ token: string }> {
    return this.authService.signup(userDto);
  }
}
