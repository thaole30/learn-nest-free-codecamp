import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
// import { User, Bookmark } from './../../node_modules/.prisma/client/index.d';
// import {User, Bookmark}

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return 'sign up ne';
  }
  signin() {
    return 'sign in ne';
  }
}
