import { ScrollView, View } from "react-native"
import { Button, Divider, ListItem, Text } from "@rneui/themed"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title"

import { useEffect, useState } from "react"
import axiosConfig from "../config/axios"

export default function Home({ navigation }) {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axiosConfig.get('/products').then((response) => {
            setProdutos(response.data.products)
        })
    }, [])

    return (
        <ScrollView>
            <Text h1>Home</Text>
            <Divider />
            <Text h3>Produtos</Text>
            {produtos.map((produto) =>
            (
                <ListItem key={produto.id}>
                    <ListItemContent>
                        <ListItemTitle>
                            <Text>{produto.title}</Text>
                        </ListItemTitle>
                    </ListItemContent>
                </ListItem>
            )
            )}

            <Divider />
            <Button title='Sair' onPress={
                () => navigation.navigate('Login')
            } />
        </ScrollView>
    )
}