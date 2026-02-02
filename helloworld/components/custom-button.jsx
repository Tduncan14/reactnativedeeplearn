import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'



const CustomButton = ({ title, onPress }) => {

    return (

        <TouchableOpacity onPress={() => {
            console.log('React native customized button pressed')
        }}>
            <View
                style={{
                    backgroundColor: "#001933",
                    alignItems: "center",
                    padding: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5
                }}>
                <Text
                    style={{
                        color: "#ffffff",
                        width: "100%",
                        textAlign: "center"


                    }}
                > {title} </Text>
            </View>
        </TouchableOpacity>
    )






}


export default CustomButton