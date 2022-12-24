import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'jwt-refresh-token-grovetech-demo',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
