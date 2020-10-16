import { Customer } from './customer';

export interface Order{
    Id: number,
    Customer: Customer,
    Amount: number,
    Placed: Date,
    Fulfilled: Date
}