import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomerAdt from "./components/customerAdt";

export default function App() {
    return <CustomerAdt></CustomerAdt>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
