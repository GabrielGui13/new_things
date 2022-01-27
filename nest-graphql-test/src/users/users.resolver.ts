import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';
import { UsersService } from './users.service';


@Resolver(() => User) //anonymous function that returns the type that the resolver is responsible
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    //name, if can be nullable
    @Query(() => User, { name: 'user', nullable: true }) //anonymous function to tell nest js what the return type is
    getUser(@Args() getUserArgs: GetUserArgs): User { //Args() from nestjs/graphql, and GetUserArgs is a DTO created by us implemented to be the parameters, similar to the typeDefs
        return this.usersService.getUser(getUserArgs);
    }

    @Query(() => [User], { name: 'users', nullable: 'items' }) //items in array can be null, but not the list, both would be 'itemsAndList'
    getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
        return this.usersService.getUsers(getUsersArgs);
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User {
        return this.usersService.createUser(createUserData);
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
        return this.usersService.updateUser(updateUserData);
    }
    
    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
        return this.usersService.deleteUser(deleteUserData);
    }
}
