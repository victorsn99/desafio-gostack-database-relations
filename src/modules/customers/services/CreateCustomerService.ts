import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Customer from '../infra/typeorm/entities/Customer';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository
    ) {}

  public async execute({ name, email }: IRequest): Promise<Customer> {

    const findEqualEmail = await this.customersRepository.findByEmail(email);

    if (findEqualEmail){
      throw new AppError(`${email} is already registered.`);
    }

    const customer = await this.customersRepository.create({name: name, email: email});

    return customer;
  }
}

export default CreateCustomerService;
