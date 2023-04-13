import * as dotenv from 'dotenv';
dotenv.config();
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  controllers: [AuthController],
  imports: [
    PrismaClient,
    PassportModule,
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     secret: config.get<string>('JWT_SECRET'),
    //     signOptions: {
    //       expiresIn: '24h',
    //     },
    //   }),
    // }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        secure: true,
        port: +process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
  ],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
