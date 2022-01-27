import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
    private data: User[] = [
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
    ];

    findAll(): User[] {
        return this.data;
    }

    findById(id: number): User {
        return this.data.find((value) => value.id === id);
    }
    
    findByEmail(email: string): User {
        return this.data.find((value) => value.email === email);
    }

    create(user: User): User {
        user.id = this.data[this.data.length - 1].id + 1
        this.data.push(user);
        return user;
    }

    update(id: number, user: User): User | { error: String; } {
        const prevUser = this.data.find((value) => value.id == id);

        if (prevUser) {
            prevUser.name = user.name;
            prevUser.email = user.email;

            return user;
        }

        return {
            error: 'User does not exist'
        }
    }

    delete(id: number): void {
        const user = this.data.find(value => value.id == id);
        this.data.splice(this.data.indexOf(user), 1);
    }
}
