// use client

import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Modal,
    Pressable,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/custom-button'



/* ---------------- DATA ---------------- */

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
]



/* ---------------- CUSTOM DROPDOWN (NO LIBRARY) ---------------- */

const Dropdown = ({
    data,
    value,
    setValue,
    isFocus,
    setIsFocus,
    placeholder,
}) => {

    const selected = data.find(item => item.value === value)

    return (
        <>
            {/* Closed field */}
            <Pressable
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                onPress={() => setIsFocus(true)}
            >
                <Text style={{ color: value ? '#000' : '#999' }}>
                    {selected ? selected.label : placeholder}
                </Text>
            </Pressable>

            {/* Options list */}
            <Modal
                visible={isFocus}
                transparent
                animationType="fade"
            >
                <Pressable
                    style={styles.overlay}
                    onPress={() => setIsFocus(false)}
                >
                    <View style={styles.menu}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => {
                                        setValue(item.value)
                                        setIsFocus(false)
                                    }}
                                >
                                    <Text style={{ fontSize: 16 }}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Pressable>
            </Modal>
        </>
    )
}



/* ---------------- SCREEN ---------------- */

const AddProductScreen = () => {

    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [isFocus, setIsFocus] = useState(false)


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    padding: 20,
                    gap: 20
                }}
            >

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        padding: 20
                    }}
                >
                    Add Product
                </Text>



                {/* ---------------- NAME ---------------- */}

                <View>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
                        Product Name:
                    </Text>

                    <TextInput
                        style={styles.input}
                        value={productName}
                        onChangeText={setProductName}
                    />
                </View>



                {/* ---------------- DESCRIPTION ---------------- */}

                <View>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
                        Product Description:
                    </Text>

                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        multiline
                        value={productDescription}
                        onChangeText={setProductDescription}
                    />

                    <CustomButton
                        title="print value"
                        onPress={() => {
                            console.log("Product name:", productName)
                            console.log("Product Description:", productDescription)
                            console.log("Category:", productCategory)
                        }}
                    />
                </View>



                {/* ---------------- CATEGORY DROPDOWN ---------------- */}

                <View style={styles.container}>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
                        Category:
                    </Text>

                    <Dropdown
                        data={data}
                        value={productCategory}
                        setValue={setProductCategory}
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        placeholder="Select item"
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}


export default AddProductScreen



/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
    },

    input: {
        borderColor: "#000",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 60,
    },

    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },

    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "center",
        padding: 20,
    },

    menu: {
        backgroundColor: "white",
        borderRadius: 8,
        maxHeight: 250,
    },

    option: {
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: "#ddd",
    },
})
