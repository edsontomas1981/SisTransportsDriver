import * as React from 'react';
import { TextInput,Button,Card } from 'react-native-paper';
import {StyleSheet, View,Image} from "react-native";

const Login = () => {
    const [text, setText] = React.useState('');

    return (
        <View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.png')} />
            </View>        
            <TextInput
                style={styles.estiloLogin}
                label="Placa"
                left={<TextInput.Icon icon="truck" />}
            />
            <TextInput
                style={styles.estiloSenha}
                label="Romaneio"
                left={<TextInput.Icon icon="file" />}
            />
            <TextInput
                style={styles.estiloSenha}
                label="CPF"
                left={<TextInput.Icon icon="card"/>}
            />
            <Button icon="login" mode="contained" onPress={teste}>
                Entrar
            </Button>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    estiloLogin: {
        padding:10,
        marginBottom:10,
    },
    estiloSenha: {
        padding:10,
        marginBottom:10,
    },
    logo: {
        width: 300, 
        height: 300,
    },
    logoContainer: {
        flex: 1, // ou qualquer outro valor dependendo do seu layout
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:50
      },

    estiloEntrar: {
        padding:20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop:10,
    },
});

const teste = ()=>{
    alert('teste')
}

