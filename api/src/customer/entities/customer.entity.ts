import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;
@Schema({
  autoIndex: true,
})
export class Customer {
  @Prop()
  name: string;

  @Prop({ default: '' })
  detail: string;

  @Prop({ unique: true })
  phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

CustomerSchema.index({ name: 1, detail: 1 }, { unique: true });
