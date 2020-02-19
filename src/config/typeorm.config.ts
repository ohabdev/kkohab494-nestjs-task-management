import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 5432,
    username: 'kkohab494',
    password: 'kkohab494kk',
    database: 'daito',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,

} 