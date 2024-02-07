import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  NativeRouter, 
  Route, 
  Link
} from "react-native";




const logoImg = require("./assets/Image.png");
const logo = require("./assets/logo.png");
export default function App() {
  return (
    <ImageBackground source={logoImg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image style={styles.image} source={logo} />

        <Text style={styles.quoteText}>
          ﴿وَنُنَزِّلُ مِنَ القُرآنِ ما هُوَ شِفاءٌ وَرَحمَةٌ لِلمُؤمِنينَ ﴾
        </Text>

        <AppButton
          title="  تسجيل كزائر   "
          size="sm"
          withBorder={true}
          onPress={() => Alert.alert("Welcome to React Native 🤪")}
        />

        <AppButton
          title="تسجيل الدخول"
          size="sm"
          backgroundColor="#FF8000"
          onPress={() => Alert.alert("Welcome to React Native 🤪")}
        />
        
      </View>
    

    </ImageBackground>
  );
}

const AppButton = ({ onPress, title, backgroundColor, withBorder }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      { backgroundColor: backgroundColor },
      withBorder && styles.appButtonWithBorder,
    ]}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  quoteText: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 120, 
  },
 
  appButtonContainer: {
    elevation: 8,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 80,
    marginVertical: 8,
    borderWidth: 0, // This sets the border for all buttons
  },
  appButtonWithBorder: {
    borderColor: "#FF8000",
  },
  appButtonText: {
    fontSize: 13,
    color: "#ffffff",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
