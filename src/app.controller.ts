

import { UseInterceptors,UploadedFile,Req } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';

import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';



@Controller()
export class AppController {

    @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

}