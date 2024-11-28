import { ScrollView, StyleSheet, Text, View } from "react-native";
import Item from "./Item";
import { foodItem } from "../../types/AppTypes";

type FoodListProps = {
  foodList: foodItem[];
  setFoodList: Function;
  basketPrice: number;
  setBasketPrice: Function;
};

const FoodList = (props: FoodListProps) => {
  const handlerFoodList = () => {
    if (props.foodList != undefined) {
      console.log(typeof props.foodList);
      return props.foodList.map((listItem) => (
        <Item
          foodItem={{
            id: listItem.id,
            image: listItem.image,
            name: listItem.name,
            price: listItem.price,
            quantity: listItem.quantity,
            section: listItem.section,
          }}
          setBasketPrice={props.setBasketPrice}
          basketPrice={props.basketPrice}
        ></Item>
      ));
    } else {
      return [];
    }
  };

  return (
    <View>
      <ScrollView>{handlerFoodList()}</ScrollView>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
