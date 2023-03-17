import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  };

  console.log(countries);

  return (
    <SafeAreaView style={container}>
      <Text>Hello</Text>
      <View>
        <FlatList
          data={countries}
          keyExtractor={(item) => item.cca3}
          renderItem={({ item }) => (
            <View style={box}>
              <Image style={stretch} source={{ uri: item.flags.png }} />
              <Text>{item.cca3}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const { container, box, stretch } = StyleSheet.create({
  container: {
    flex: 1,
  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
  },
});
export default App;

// import { StatusBar } from "expo-status-bar";
// import {
//   FlatList,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import Item from "./src/Item";

// const DATA = [
//   {
//     id: "1",
//     title: "First Item",
//   },
//   {
//     id: "2",
//     title: "Second Item",
//   },
//   {
//     id: "3",
//     title: "Third Item",
//   },
//   {
//     id: "4",
//     title: "First Item",
//   },
//   {
//     id: "5",
//     title: "Second Item",
//   },
//   {
//     id: "6",
//     title: "Third Item",
//   },
// ];
// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.textBox}>Hello</Text>

//         <FlatList
//           data={DATA}
//           horizontal={true}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => <Item content={item} />}
//         />
//         <View style={styles.imageBox}>
//           <Image
//             style={styles.tinyLogo}
//             resizeMode="cover"
//             source={require("./assets/icon.png")}
//           />
//         </View>
//         <StatusBar style="auto" />
//       </View>
//       <View style={styles.anotherContainer}>
//         <Text>Kolejny text</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "gold",
//     padding: 20,
//     flex: 1,
//   },
//   anotherContainer: {
//     backgroundColor: "green",
//     padding: 20,
//     flex: 1,
//   },
//   textBox: {
//     backgroundColor: "gold",
//     padding: 20,
//     color: "white",
//     flex: 1,
//   },
//   tinyLogo: {
//     width: 50,
//     height:50,

//   },
//   imageBox:{
//     alignItems: "center"
//   }
// });
