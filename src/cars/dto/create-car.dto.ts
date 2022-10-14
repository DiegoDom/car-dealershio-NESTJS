import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDTO {
  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsString()
  readonly model: string;
}
