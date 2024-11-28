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
    if (props.foodList != undefined && props.foodList.length > 0) {
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
          deleteItem={deleteItem}
        />
      ));
    }
  };

  const deleteItem = (id: string) => {
    const newFoodList = props.foodList.filter((item) => item.id != id);
    props.setFoodList(newFoodList);
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.foodList.length > 0 ? (
          handlerFoodList()
        ) : (
          <Text>La Lista está vacía</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
