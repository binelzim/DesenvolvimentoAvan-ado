import { SafeAreaProvider } from "react-native-safe-area-context";
import customModalScreen from "./components/CustomModal";

export default function App(){
    return (
        <SafeAreaProvider>
            <customModalScreen animation="slide" themeColor=""/>
        </SafeAreaProvider>
    )
}