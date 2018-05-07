import { Customer } from "./customer";

export interface ICurrentDemo {
  custid: string,
  firstname: string,
  lastname: string,
  PhoneNum: string,
  email: string,
  demoid: string,
  Rackets: string[],
  CheckedOut: string,
  ReturnDate: string
}
