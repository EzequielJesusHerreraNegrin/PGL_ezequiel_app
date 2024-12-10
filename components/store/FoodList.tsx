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
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.foodList.length > 0 ? (
          handlerFoodList()
        ) : (
          <View style={{ marginTop: "100%" }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              La Lista está vacía
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
