import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { parsePhoneNumber } from 'libphonenumber-js';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel({
      ...createCustomerDto,
      phone: parsePhoneNumber(createCustomerDto.phone, 'US').formatNational(),
    });
    return createdCustomer.save();
  }

  async findAll() {
    return this.customerModel.find().exec();
  }

  async findOne(id: string) {
    return this.customerModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customerToUpdate = {
      ...(await this.findOne(id)).toObject(),
    };

    if (Object.keys(updateCustomerDto).includes('name')) {
      customerToUpdate.name = updateCustomerDto.name;
    }

    if (Object.keys(updateCustomerDto).includes('detail')) {
      customerToUpdate.detail = updateCustomerDto.detail;
    }

    if (Object.keys(updateCustomerDto).includes('phone')) {
      customerToUpdate.phone = parsePhoneNumber(
        updateCustomerDto.phone,
        'US',
      ).formatNational();
    }

    return this.customerModel.updateOne(
      { _id: id },
      customerToUpdate,
      {
        upsert: true,
      },
      (err, doc) => (err ? err : doc),
    );
  }

  async remove(id: string) {
    this.customerModel.remove({ _id: id });
  }
}
