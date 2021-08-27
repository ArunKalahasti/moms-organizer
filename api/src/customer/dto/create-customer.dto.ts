import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  readonly name: string;

  readonly detail: string;

  @IsNotEmpty()
  readonly phone: string;
}
