import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useProductsStore from './global-store/products-store'
import CustomButton from '@/components/custom-button'
import { Link, useRouter } from 'expo-router'


const cardScreen = () => {

    const { increaseProductsCount, decreaseProductsCount } = useProductsStore()
    return (

        <SafeAreaView style={{
            flex: 1,
        }}>
            <View
                style={{
                    flex: 1,
                    gap: 20,
                    padding: 20
                }}>




                <Text>
                    Cardscreen
                </Text>

                <CustomButton
                    title="Increase Products Count"
                    onPress={increaseProductsCount} />



                <CustomButton
                    title="Decrease Products Count"
                    onPress={decreaseProductsCount} />


                <Link href="/">Home</Link>

            </View>
        </SafeAreaView>

    )
}

export default cardScreen
