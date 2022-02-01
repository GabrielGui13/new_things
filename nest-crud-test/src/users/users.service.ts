import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
//import { User } from './user';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
/*     private data: User[] = [
        {
            id: 1,
            name: 'Gabriel Guilherme',
            email: 'gabriel@teste.com',
            password: '123'
        },
        {
            id: 2,
            name: 'Gabriel Pereira',
            email: 'pereira@teste.com',
            password: '1234'
        },
        {
            id: 3,
            name: 'Gabriel Fontineli',
            email: 'fonti@teste.com',
            password: '12345'
        },
    ]; */

    constructor(
        private prisma: PrismaService
    ) {}

    async findAll(): Promise<User[]> {
        /* return this.data; */
        return await this.prisma.user.findMany();
    }

    async findById(id: number): Promise<User> {
        //return this.data.find((value) => value.id === id);
        const user = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!user) throw new NotFoundException();

        return user;
    }
    
    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) throw new NotFoundException();

        return user;
    }

    async create(user: User): Promise<User> {
        /* user.id = this.data[this.data.length - 1].id + 1
        this.data.push(user); */
        const createdUser = await this.prisma.user.create({
            data: {
                ...user
            }
        })

        return createdUser;
    }

    async update(id: number, user: User): Promise<User> {
        /* const prevUser = this.data.find((value) => value.id == id);

        if (prevUser) {
            prevUser.name = user.name;
            prevUser.email = user.email;

            return user;
        } */
        const findUser = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!findUser) throw new NotFoundException();

        const updatedUser = await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                ...user
            }
        })
        
        return updatedUser;
    }

    async delete(id: number): Promise<User> {
        //const user = this.data.find(value => value.id == id);
        //this.data.splice(this.data.indexOf(user), 1);
        const findUser = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!findUser) throw new NotFoundException();

        const user = await this.prisma.user.delete({
            where: {
                id: id
            }
        })

        return user;
    }
}
