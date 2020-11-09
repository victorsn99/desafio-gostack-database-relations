import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

@injectable()
class CreateProductService {
  constructor(

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
    ) {}

  public async execute({ name, price, quantity }: IRequest): Promise<Product> {

    const searchProduct = await this.productsRepository.findByName(name);

    if (searchProduct) {
      throw new AppError(`Product ${name} is already registered.`);
    }

    const product = await this.productsRepository.create({ name: name, price: price, quantity: quantity});

    return product;


  }
}

export default CreateProductService;
