import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import CustomButton from '@/components/custom-button'
import { useRouter, RelativePathString } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


const Products = () => {

    const productsData = [
        { id: 1, name: "Product", price: 10 },
        { id: 2, name: "Product2", price: 20 },
        { id: 3, name: "Product3", price: 30 },
    ]


    const router = useRouter()


    return (

        <SafeAreaView
            style={{ flex: 1, padding: 20, gap: 20 }}>
            <View
                style={{ flex: 1, padding: 20, gap: 10 }}>

                {productsData.map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        onPress={() => router.push(`/products/${product.id}`)}>
                        <View

                            style={{
                                color: "#000",
                                padding: 15,
                                borderWidth: 1,
                                borderColor: "#ccc",
                                borderRadius: 5,
                                backgroundColor: "#f9f9f9"
                            }}>

                            <Text>
                                {product.name}
                                {product.id}
                            </Text>
                        </View>
                    </TouchableOpacity>

                ))}


            </View>
        </SafeAreaView>
    )
}

export default Products
