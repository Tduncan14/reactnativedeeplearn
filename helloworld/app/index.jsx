import CustomButton from "@/components/custom-button";
import { Text, View, Button, TouchableOpacity, ScrollView } from "react-native";

export default function Index() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]



  return (
    <View
      style={{
        flex: 1,
        padding: 50,
        gap: 20
      }}>

      <Text
        style={{
          width: 50,
        }}>

        Hello World
      </Text>


      <ScrollView
      >

        <View
          style={{
            gap: 10
          }}>

          {numbers.map((num) => (

            <CustomButton
              title={`Button ${num}`}
              onPress={() => {
                console.log('ButtonPressed')
              }} />



          ))}

        </View>

      </ScrollView>






      {/* <CustomButton
        title="Click Me"
        onPress={() => {
          console.log("Button pressed")
        }} />



      <CustomButton
        title="Second Button"
        onPress={() => {
          console.log("Second Button Pressed")
        }} /> */}




    </View>

  );
}
