import { router } from "expo-router";
import { useEffect } from "react";
import { storage_functions } from "../services/asyncStorageService";

function AppPage() {
  useEffect(() => {
    const checkStorage = async () => {
      storage_functions.get(storage_functions.KEY.register).then((value) => {
        if (value === null) {
          router.navigate("user-management/login");
        } else {
          router.navigate("/welcome");
        }
      });
    };

    checkStorage();
  }, [storage_functions.get(storage_functions.KEY.register)]);

  return null;
}

export default AppPage;
