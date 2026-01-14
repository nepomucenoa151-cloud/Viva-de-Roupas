
export enum PaymentMethod {
  PIX = 'PIX',
  CREDIT_CARD = 'CREDIT_CARD'
}

export interface FormData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  installments: string;
}
