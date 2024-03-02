import { View, Text, Stylesheet, Button } from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen(){
    const navigation = useNavigation;
    return(
        <View style={Stylesheet.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    
})