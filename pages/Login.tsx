import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Text, Button, Input } from '@rneui/themed'

export default function Login({navigation}) {
  const [resultado, setResultado] = useState('Digite seus dados')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  const logar = () => {
    if(login == '' && senha == ''){
      setResultado('Digite login e senha!!!')
      return
    }

    if(login == 'admin' && senha == '1234'){
      setResultado('Login com sucesso!')
      navigation.navigate('Home')
    } else {
      setResultado('Login ou senha inválidos!')
    }
  }

  return (
    <View style={styles.container}>
      <Text h1>Acesso ao APP</Text>
      <Text>Login</Text>
      <Input onChangeText={setLogin} />
      <Text>Senha</Text>
      <Input onChangeText={setSenha}
      secureTextEntry={true} />
      <Button size='md' radius={20} onPress={logar} title='Acessar' />
      <Text style={styles.alert}>{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alert: {
    marginTop: 20,
    fontWeight: 'bold',
  }
});