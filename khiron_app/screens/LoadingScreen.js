import { View, Text, StyleSheet, Button } from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function LoadingScreen(){
    

    const logo = require('../assets/Khiron-PNGs/Logo-21.png');
    const style = {
        color: '#fff',
        fontSize: 64, //Font to be used: Gotham
        fontWeight: 'bold',
    };

    const style2 = {
        fontSize: 24, 
        marginTop: 24,
        color: '#fff',
    }

    

    return(
        <View style={styles.container}>
        <Text style={style}>SOLO</Text>
        <StatusBar style="auto" />
        <Text style={style2}>Powered By</Text>
        <Image source={logo} style={{ width: 300, height: 200 }}  />
        </View>
    );

    

}


  
