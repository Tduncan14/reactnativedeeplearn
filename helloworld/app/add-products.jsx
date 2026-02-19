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
    TouchableOpacity,
    ScrollView
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

/* ---------------- CUSTOM DROPDOWN ---------------- */

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
            <Pressable
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                onPress={() => setIsFocus(true)}
            >
                <Text style={{ color: value ? '#000' : '#999' }}>
                    {selected ? selected.label : placeholder}
                </Text>
            </Pressable>

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

/* ---------------- MODAL CALENDAR ---------------- */

const ModalCalendar = ({ date, setDate }) => {
    const [show, setShow] = useState(false)
    const [currentMonth, setCurrentMonth] = useState(new Date())

    // get first day of month
    const getMonthDays = (month) => {
        const firstDay = new Date(month.getFullYear(), month.getMonth(), 1)
        const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0)
        const days = []
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(month.getFullYear(), month.getMonth(), i))
        }
        return days
    }

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    }

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
    }

    const monthDays = getMonthDays(currentMonth)

    return (
        <>
            <Pressable style={styles.dateBox} onPress={() => setShow(true)}>
                <Text>{date ? date.toDateString() : "Select launch date"}</Text>
            </Pressable>

            <Modal visible={show} transparent animationType="fade">
                <Pressable style={styles.overlay} onPress={() => setShow(false)}>
                    <View style={styles.calendarContainer}>
                        <Text style={styles.calendarTitle}>Select Launch Date</Text>

                        {/* Month navigation */}
                        <View style={styles.monthNav}>
                            <TouchableOpacity onPress={prevMonth}><Text style={styles.navText}>◀</Text></TouchableOpacity>
                            <Text style={styles.monthText}>
                                {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                            </Text>
                            <TouchableOpacity onPress={nextMonth}><Text style={styles.navText}>▶</Text></TouchableOpacity>
                        </View>

                        {/* Weekday headers */}
                        <View style={styles.weekRow}>
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <Text key={day} style={styles.weekDay}>{day}</Text>
                            ))}
                        </View>

                        {/* Days grid */}
                        <View style={styles.daysGrid}>
                            {Array(monthDays[0].getDay()).fill(null).map((_, i) => (
                                <View key={`empty-${i}`} style={styles.dayItem}></View>
                            ))}
                            {monthDays.map((d, idx) => (
                                <TouchableOpacity
                                    key={idx}
                                    style={[
                                        styles.dayItem,
                                        date &&
                                        d.toDateString() === date.toDateString() &&
                                        styles.selectedDay
                                    ]}
                                    onPress={() => { setDate(d); setShow(false) }}
                                >
                                    <Text
                                        style={date && d.toDateString() === date.toDateString() ? { color: 'white' } : {}}
                                    >
                                        {d.getDate()}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

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
    const [launchDate, setLaunchDate] = useState(null)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 20, gap: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", padding: 20 }}>Add Product</Text>

                <View>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>Product Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={productName}
                        onChangeText={setProductName}
                    />
                </View>

                <View>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>Product Description:</Text>
                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        multiline
                        value={productDescription}
                        onChangeText={setProductDescription}
                    />
                </View>

                <View style={styles.container}>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>Category:</Text>
                    <Dropdown
                        data={data}
                        value={productCategory}
                        setValue={setProductCategory}
                        isFocus={isFocus}
                        setIsFocus={setIsFocus}
                        placeholder="Select item"
                    />
                </View>

                <ModalCalendar
                    date={launchDate}
                    setDate={setLaunchDate}
                />

                <CustomButton
                    title="print value"
                    onPress={() => {
                        console.log("Product name:", productName)
                        console.log("Product Description:", productDescription)
                        console.log("Category:", productCategory)
                        console.log("Launch Date:", launchDate ? launchDate.toDateString() : "Not set")
                    }}
                />

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

    dateBox: {
        height: 50,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 12,
    },

    calendarContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        maxHeight: 450,
        padding: 15,
    },

    calendarTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    },

    monthNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },

    monthText: {
        fontSize: 16,
        fontWeight: "bold",
    },

    navText: {
        fontSize: 18,
        fontWeight: "bold",
    },

    weekRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },

    weekDay: {
        width: 40,
        textAlign: "center",
        fontWeight: "bold",
    },

    daysGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    dayItem: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        borderRadius: 4,
    },

    selectedDay: {
        backgroundColor: "blue",
    },

})
