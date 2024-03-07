import { View, Text, Stylesheet, Button } from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen(){
<<<<<<< Updated upstream
    const navigation = useNavigation;
    return(
        <View style={Stylesheet.container}>
            <Text style={styles.text}>Home Screen</Text>
=======
    return(
        <View>
          <Text>Hi</Text>
  
>>>>>>> Stashed changes
        </View>
    );
}

const styles = Stylesheet.create({
    
})