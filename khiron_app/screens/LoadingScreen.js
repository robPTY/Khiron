import { View, Text, Stylesheet, Button } from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function LoadingScreen(){
    const navigation = useNavigation;
    useEffect(()=> {
        const timer = setTimeout(() => {
            navigation.navigate('HomeScreen');
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigation]);

    const logo = require('./assets/Khiron-PNGs/Logo-21.png');
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0ABC71',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
