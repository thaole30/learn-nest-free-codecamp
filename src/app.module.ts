import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UesrModule } from './uesr/uesr.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UesrModule, BookmarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
