import { IsString, IsNumber, Min } from "class-validator";

export class CreateCouchDto {
  hostId: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(1)
  rooms: number;

  constructor(props: CreateCouchDto) {
    Object.assign(this, props);
  }
}
