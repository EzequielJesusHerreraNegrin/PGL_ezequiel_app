import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export const AppLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="welcome/index"
          options={{
            drawerLabel: "Home",
            title: "Bienbenido",
          }}
        />
        <Drawer.Screen
          name="porfolio"
          options={{
            drawerLabel: "Porfolio",
            title: "Porfolio",
          }}
        />
        <Drawer.Screen
          name="store/index"
          options={{
            drawerLabel: "Mi compra",
            title: "Mi compra",
          }}
        />
        <Drawer.Screen
          name="camera/index"
          options={{
            drawerLabel: "My photos",
            title: "My photos",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default AppLayout;
