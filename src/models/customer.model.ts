import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  name?: string;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
