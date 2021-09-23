import { IsNumberString, IsNotEmpty } from 'class-validator';

export class FindOneUserQuery {
  @IsNotEmpty()
  @IsNumberString()
  userId: string;

  @IsNotEmpty()
  @IsNumberString()
  name: string;
}
