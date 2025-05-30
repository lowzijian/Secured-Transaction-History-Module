import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";

const useAppState = () => {
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    });
  });
};

export default useAppState;
