import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },

    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
    },
    rowText: {
        fontSize: 20,
        marginLeft: 5,
    },
    navButton: {
        marginRight: 5,
        fontSize: 24,
        padding: 4,
    },
})

export default styles;