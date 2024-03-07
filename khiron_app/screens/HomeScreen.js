import { View, Text, StyleSheet, Button } from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen(){
    return(
        <View style={Stylesheet.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

