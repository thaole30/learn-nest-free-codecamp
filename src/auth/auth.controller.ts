import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  // constructor() {
  //     const service = new AuthService()
  // }

  //   authService: AuthService;
  //   constructor(authService: AuthService) {
  //     this.authService = authService;
  //   }

  constructor(private authService: AuthService) {}
}
