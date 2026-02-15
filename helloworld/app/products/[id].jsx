import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks'
import { SafeAreaView } from 'react-native-safe-area-context'



const ProductInfoScreen = () => {

    const params = useLocalSearchParams()
    console.log(params)

    return (
        <SafeAreaView>

            <View>
                <Text>ProductInfoScreen</Text>
            </View>
        </SafeAreaView>

    )
}


export default ProductInfoScreen