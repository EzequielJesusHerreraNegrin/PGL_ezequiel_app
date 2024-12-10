import uuid from "react-native-uuid";

export type FoodItem = {
  id: string;
  name: string;
  price: string;
  quantity: string;
  section: string;
  isInBasket: boolean;
};
