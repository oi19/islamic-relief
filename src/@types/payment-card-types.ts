export type Payment_Card_Type = {
  id?:number,
  name?: string
  image?: string;
  expiryDate?: string | number;
  lastDigits?:string
  type?: string,
  selected?:boolean | null
};
