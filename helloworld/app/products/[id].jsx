import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks'



const ProductInfoScreen = () => {

    const params = useLocalSearchParams()
    console.log(params)

    return (
        <View>
            <Text>ProductInfoScreen</Text>
        </View>
    )
}


export default ProductInfoScreen