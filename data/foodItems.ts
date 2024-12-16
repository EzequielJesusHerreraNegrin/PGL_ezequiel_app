import { FoodItem } from "../types/AppTypes";
import uuid from "react-native-uuid";

export const getDefaultFoodItem = (): FoodItem => ({
  id: uuid.v4(),
  name: "",
  price: "",
  quantity: "",
  section: "",
  isInBasket: false,
});

export const foodItems: FoodItem[] = [
  {
    id: "0",
    isInBasket: false,
    name: "Hola",
    price: "12.56",
    quantity: "2",
    section: "carne",
  },
  {
    id: "1",
    isInBasket: false,
    name: "Chuleta de Cerdo",
    price: "35.56",
    quantity: "2",
    section: "otros",
  },
  {
    id: "2",
    isInBasket: false,
    name: "Chuleta de Cerdo",
    price: "20.56",
    quantity: "2",
    section: "pescado",
  },
];
