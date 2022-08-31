import {
  Body,
  Controller,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  // constructor() {
  //     const service = new AuthService()
  // }

  //   authService: AuthService;
  //   constructor(authService: AuthService) {
  //     this.authService = authService;
  //   }

  constructor(private authService: AuthService) {}

  @Post('signup')
  // signup(@Req() req: Request) {
  signup(@Body() dto: AuthDto) {
    // console.log('reqqq', req.body);
    console.log('dto', dto);
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
