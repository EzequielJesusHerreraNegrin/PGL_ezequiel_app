import uuid from "react-native-uuid";

export type foodItem = {
  id: string;
  name: string;
  price: string;
  quantity: string;
  section: string;
  isInBasket: boolean;
};

export type newFood = {
  id: "";
  image: "";
  name: "";
  price: "";
  quantity: "";
  section: "";
};
