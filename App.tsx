import { StatusBar } from "expo-status-bar";
import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import Navigation from "navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { persistor, store } from "store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
