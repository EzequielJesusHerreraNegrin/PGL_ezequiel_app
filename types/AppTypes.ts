export type FoodItem = {
  id: string;
  name: string;
  price: string;
  quantity: string;
  section: string;
  isInBasket: boolean;
};

export type LoginFields = {
  email: string;
  password: string;
};

export type registerFields = {
  email: string;
  name: string;
  password: string;
};

export interface ApiResponse {
  message: string;
  object?: {
    email: string;
    userId: number;
    token: string;
  };
  statusCode: number;
}
