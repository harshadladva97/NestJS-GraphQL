import { CreateProduct } from './create-product';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProduct extends PartialType(CreateProduct) {
  id: number;
}
