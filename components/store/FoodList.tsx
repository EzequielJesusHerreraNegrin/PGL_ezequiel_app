import { ScrollView, StyleSheet, Text, View } from "react-native";
import Item from "./Item";
import { foodItem } from "../../types/AppTypes";

type FoodListProps = {
  foodList: foodItem[];
  setFoodList: Function;
  basketPrice: number;
  setBasketPrice: Function;
  isInBasket: boolean;
  setIsInBasket: Function;
};

const FoodList = (props: FoodListProps) => {
  const handlerFoodList = () => {
    if (props.foodList != undefined) {
      return props.foodList.map((listItem) => (
        <Item
          key={listItem.id}
          foodItem={{
            id: listItem.id,
            name: listItem.name,
            price: listItem.price,
            isInBasket: listItem.isInBasket,
            quantity: listItem.quantity,
            section: listItem.section,
          }}
          setBasketPrice={props.setBasketPrice}
          basketPrice={props.basketPrice}
          isInBasket={props.isInBasket}
          setIsInBasket={props.setBasketPrice}
          deleteItem={deleteItem}
        />
      ));
    } else {
      return [];
    }
  };

  const deleteItem = (id: string) => {
    const newFoodList = props.foodList.filter((item) => item.id != id);
    props.setFoodList(newFoodList);
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {handlerFoodList()}
      </ScrollView>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
