import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [CEP, setCEP] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUF] = useState('')

  const buscar = () =>{
    axios.get('https://viacep.com.br/ws/'+CEP+'/json/')
    .then((res)=>{
        setRua(res.data.logradouro),
        setBairro(res.data.bairro),
        setCidade(res.data.localidade),
        setUF(res.data.uf)
      })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.texto2}>CEP:</Text>
      <TextInput
        style={styles.CEP}
        onChangeText={(e)=>setCEP(e)}
      />
      <View style={styles.btn}>
        <Button
          title='Buscar'
          color='red'
          onPress={buscar}
        />  
      </View>
      <Text style={styles.texto2}>Rua:</Text>
      <Text style={styles.texto}>{rua}</Text>
      <Text style={styles.texto2}>Bairro:</Text>
      <Text style={styles.texto}>{bairro}</Text>
      <Text style={styles.texto2}>Cidade: </Text>
      <Text style={styles.texto}>{cidade}</Text>
      <Text style={styles.texto2}>UF:</Text>
      <Text style={styles.texto}>{uf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft: 30
  },
  CEP: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1
  },
  texto: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#bbb',
    margin: 3,
    borderWidth: 1
  },
  texto2: {
    marginTop: 10,
    marginLeft: 10
  },
  btn: {
    width: 100,
    height: 40,
    marginTop: 10,
  }
});
