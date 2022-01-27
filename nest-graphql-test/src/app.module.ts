import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
        autoSchemaFile: true, //for code first
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

/* 
## GraphQLModule.forRoot() imported from "nestjs/graphql" => to configure GraphQL in application
## autoSchemaFile: true => enables code first generation of schema, instead of gql one
## next step is to create a folder to hold business logic
## we create the 'model' of the db table inside models folder, to get the type too
## inside of dtos, we hold the data transfer object, the "parameters", or the data that will be sent to functions, and is a type too
## inside of users.service.ts, we hold the database access, and functions to manage it, in this case, a memory object
## in users.resolver.ts, is where we handle the directive to each service function, its similar to the controller in a 
typical nest crud app, the diference is that we don't set http requests, but we set the Query and Mutation schema, 
which would be accessed in GraphQL Playground, or after in the frontend, there we define, queries/mutation names, types, and etc
## in users.module.ts, is where we configure both UsersService and UsersResolver in providers
## after that, we can simply start the application (yarn start:dev => hot reload), and access localhost:PORT/graphql to see queries and mutations
*/
