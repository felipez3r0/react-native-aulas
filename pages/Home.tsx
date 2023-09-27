import { View } from "react-native"
import { Button, Text } from "@rneui/themed"

export default function Home({ navigation }) {
    return (
        <View>
            <Text h1>Home</Text>
            <Button title='Sair' onPress={
                () => navigation.navigate('Login')
            } />
        </View>
    )
}