import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/authentication/jwt-auth.guard';
import { CreateProduct } from './dto/create-product';
import { UpdateProduct } from './dto/update-product';
import { ProductService } from './product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation('createProduct')
  create(@Args('createProductInput') createProductInput: CreateProduct) {
    return this.productService.create(createProductInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query('getAllProducts')
  findAll() {
    return this.productService.findAll();
  }

  @Query('getToken')
  getToken() {
    return this.productService.getToken();
  }

  @Query('product')
  findOne(@Args('id') id: number) {
    return this.productService.findOne(id);
  }

  @Mutation('updateProduct')
  update(@Args('updateProductInput') updateProductInput: UpdateProduct) {
    return this.productService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: number) {
    return this.productService.remove(id);
  }
}
