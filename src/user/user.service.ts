import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(): string{
        return 'Cek ERP Run di Port 3000';
    }
}
