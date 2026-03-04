import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View, TextInput, Button, StyleSheet } from "react-native"
import { useForm, Controller } from "react-hook-form"
import CustomButton from '../components/custom-button'

const AddProduct2 = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 20 }}>

                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
                    AddProduct2
                </Text>

                <View style={{ gap: 15 }}>

                    <Controller
                        control={control}
                        name="firstName"
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="First name"
                                placeholderTextColor="#000"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.firstName && (
                        <Text style={{ color: "red" }}>First name is required</Text>
                    )}

                    <Controller
                        control={control}
                        name="lastName"
                        rules={{ maxLength: 100, minLength: 2 }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Last name"
                                placeholderTextColor="#000"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                            />
                        )}
                    />

                    <CustomButton
                        title="Submit"
                        onPress={handleSubmit(onSubmit)}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    input: {
        borderColor: "#000",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        color: '#000',
        height: 45
    }
})

export default AddProduct2