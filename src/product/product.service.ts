import { Injectable } from '@nestjs/common';
import { CreateProduct, UpdateProduct } from './dto';
import { JwtService } from '@nestjs/jwt';
import { mockProducts } from 'src/mock/mock-product';

@Injectable()
export class ProductService {
  constructor(private jwtService: JwtService) {}

  create(_createProductInput: CreateProduct) {
    return 'This action adds a new product';
  }

  getToken() {
    return this.jwtService.sign({
      email: 'harshad.grovetech@gmail.com',
      phone: '9998877777',
    });
  }

  findAll() {
    return mockProducts;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProduct: UpdateProduct) {
    return `Update id of #${id}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
