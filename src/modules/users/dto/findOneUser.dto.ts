import { IsNotEmpty, IsString } from 'class-validator';

export class FindOneUserQuery {
  @IsNotEmpty()
  @IsString()
  userId: string;
}
