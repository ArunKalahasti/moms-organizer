import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseFilters,
} from '@nestjs/common';
import { CustomerMongoExceptionFilter } from './customer.error-hander';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @UseFilters(CustomerMongoExceptionFilter)
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.customerService.findOne(id);
  }

  @Patch(':id')
  @UseFilters(CustomerMongoExceptionFilter)
  @UsePipes(new ValidationPipe({ transform: true }))
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @UseFilters(CustomerMongoExceptionFilter)
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
