import { ScrollView, View } from "react-native"
import { Avatar, Button, Divider, ListItem, Text } from "@rneui/themed"
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content"
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title"

import { useEffect, useState } from "react"
import axiosConfig from "../config/axios"

import * as SecureStore from 'expo-secure-store'
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Home({ navigation }) {
    const [produtos, setProdutos] = useState([])
    const [nomeUsuario, setNomeUsuario] = useState('')

    useEffect(() => {
        axiosConfig.get('/products').then((response) => {
            setProdutos(response.data.products)
        })
        AsyncStorage.getItem('user').then((user) => {
            setNomeUsuario(user)
        })
    }, [])

    async function sair() {
        await SecureStore.deleteItemAsync('token')
        await AsyncStorage.removeItem('user')
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <Text h1>Home</Text>
            <Text>Olá {nomeUsuario}</Text>
            <Divider />
            <Text h3>Produtos</Text>
            {
                produtos.length <= 0 && (
                    <Text>Nenhum produto encontrado</Text>
                )
            }            
            {produtos.map((produto) =>
            (
                <ListItem key={produto.id} onPress={()=>{
                    navigation.navigate("Produto",{produto})
                }}>
                    <Avatar source={{uri: produto.thumbnail}} />
                    <ListItemContent>
                        <ListItemTitle>
                            <Text>{produto.title}</Text>
                        </ListItemTitle>
                    </ListItemContent>
                </ListItem>
            )
            )}

            <Divider />
            <Button title='Sair' onPress={sair} />
        </ScrollView>
    )
}