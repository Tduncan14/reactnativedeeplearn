// import CustomButton from "@/components/custom-button";
// import { Text, View, Button, TouchableOpacity, ScrollView } from "react-native";

// export default function Index() {

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]



//   return (
//     <View
//       style={{
//         flex: 1,
//         padding: 50,
//         gap: 20
//       }}>

//       <Text
//         style={{
//           width: 50,
//         }}>

//         Hello World
//       </Text>


//       <ScrollView
//       >

//         <View
//           style={{
//             gap: 1 + 0
//           }}>

//           {numbers.map((num) => (

//             <CustomButton
//               title={`Button ${num}`}
//               onPress={() => {
//                 console.log('ButtonPressed')
//               }} />



//           ))}

//         </View>

//       </ScrollView>






//       {/* <CustomButton
//         title="Click Me"
//         onPress={() => {
//           console.log("Button pressed")
//         }} />



//       <CustomButton
//         title="Second Button"
//         onPress={() => {
//           console.log("Second Button Pressed")
//         }} /> */}




//     </View>

//   );
// }
import React from 'react'
import { View, Text } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { Button } from '@react-navigation/elements'
import CustomButton from '@/components/custom-button'

const Products = () => {
  const router = useRouter()
  return (
    <View style={{ flex: 1, gap: 10, padding: 20 }}>
      <Text>
        Home
      </Text>

      <Link href="/products">Go to products</Link>
      <Link href="/cart"> Go to Cart</Link>




      <CustomButton title="Go to Products" onPress={() => router.push("/products")} />
      <CustomButton title="Go to cart" onPress={() => router.push("/cart")} />
    </View>
  )
}

export default Products
