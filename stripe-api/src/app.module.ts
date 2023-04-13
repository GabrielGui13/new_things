import { AuthModule } from './models/auth/auth.module';
import { PrismaService } from './common/database/prisma.service';
import { UsersModule } from './models/users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './models/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './common/guards/jwt/jwt.strategy';
import { ProjectsModule } from './models/projects/projects.module';
import { SpdasModule } from './models/spdas/spdas.module';
import { SpdaTypeModule } from './models/spda-type/spda-type.module';
import { StructuresModule } from './models/structures/structures.module';
import { CalcsModule } from './models/calcs/calcs.module';
import { NormsModule } from './models/norms/norms.module';
import { ProjectClassesModule } from './models/project-classes/project-classes.module';
import { PlansModule } from './models/plans/plans.module';
import { DimensioningTypesModule } from './models/dimensioning-types/dimensioning-types.module';
import { PaymentModule } from './models/payment/payment.module';
import { SubscriptionsModule } from './models/subscriptions/subscriptions.module';

@Module({
  imports: [
    AuthModule, 
    UsersModule, 
    PassportModule, 
    JwtModule,
    ProjectsModule,
    SpdasModule,
    SpdaTypeModule,
    StructuresModule,
    CalcsModule,
    NormsModule,
    ProjectClassesModule,
    DimensioningTypesModule,
    PlansModule,
    SubscriptionsModule,
    PaymentModule
  ],
  controllers: [AppController],
  providers: [
    PrismaService, 
    AppService, 
    AuthService, 
    JwtStrategy
  ],
})
export class AppModule {}
