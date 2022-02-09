import React, { useState, useLayoutEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/Styles';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    const [todos, setTodos] = useState(
        Array(20).fill(null).map((_, index) => (`Test ${index + 1}`))
    );

    console.log(navigation)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0',
            },
            headerRight: () => (
                <AntDesign
                    style={styles.navButton}
                    name='plus'
                    size={24}
                    color="black"
                    onPress={() => navigation.navigate('Todo')}
                />
            ),
        })
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    todos.map((todo, index) => (
                        <View key={index} style={styles.rowContainer}>
                            <Text style={styles.rowText}>{todo}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}