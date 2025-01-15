import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export const AppLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="welcome/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Bienbenido",
          }}
        />
        <Drawer.Screen
          name="porfolio" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Porfolio",
            title: "Porfolio",
          }}
        />
        <Drawer.Screen
          name="store/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Mi compra",
            title: "Mi compra",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default AppLayout;
