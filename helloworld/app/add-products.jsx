import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddProductScreen = () => {


    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")

    return (
        <SafeAreaView>
            <View
                style={{
                    flex: 1,
                    padding: 20,
                    gap: 20
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        padding: 20
                    }}>Add Product</Text>


                <View>

                    <Text style={{
                        marginBottom: 10,
                        fontWeight: "bold"
                    }}>Product Name:</Text>


                    <TextInput
                        style={{
                            borderColor: "#000",
                            borderWidth: 1,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderRadius: 5,
                            height: 60
                        }}
                        value={productName}
                        onChangeText={setProductName}

                    />
                </View>


                <View>

                    <Text style={{
                        marginBottom: 10,
                        fontWeight: "bold"
                    }}>Product Description:</Text>


                    <TextInput
                        style={{
                            borderColor: "#000",
                            borderWidth: 1,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderRadius: 5,
                            height: 60,

                        }}
                        numberOfLines={20}
                        value={productDescription}
                        onChangeText={setProductDescription}

                    />
                </View>



            </View>
        </SafeAreaView>
    )
}

export default AddProductScreen