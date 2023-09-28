import { SafeAreaView, StyleSheet,ScrollView, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordlength:Yup.number()
  .min(4, 'Should be minimum of 4 characters')
  .max(16, 'Should be maxmum of 16 characters')
  .required('Length is required')
})

const App = () => {

const [password,setPassword] = useState('');
const [isPassGenerated,setIsPassGenerated] = useState(false);
const [lowerCase,setLowerCase] = useState(true);
const [upperCase,setUpperCase] = useState(false);
const [numbers,setNumbers] = useState(false);
const [symbols,setSymbols] = useState(false);

const generatePasswordString = (passwordLength:number) => {
  let characterList ='';
  const upperCaseChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars ='abcdefghijklmnopqrstuvwxyz';
  const digitChars = '0123456789';
  const specialChars = '!@#$%^&*()_+';

  if(upperCase){
    characterList += upperCaseChars
  }
  if(lowerCase){
    characterList += lowerCaseChars
  }
  if(numbers){
    characterList += digitChars
  }
  if(symbols){
    characterList += specialChars
  }

  const passwordResult = createPassword(characterList,passwordLength)
  setPassword(passwordResult)
  setIsPassGenerated(true)
}

const createPassword =(characters:string,passwordLength:number) => {
  let result =''
  for (let i = 0; i < passwordLength; i++) {
    const characterIndex = Math.round(Math.random() * characters.length)
    result += characters.charAt(characterIndex)
  }
  return result
  console.log("Kashi");
}

const resetPasswordState =() => {
  setPassword('')
  setIsPassGenerated(false)
  setLowerCase(true)
  setUpperCase(false)
  setNumbers(false)
  setSymbols(false)
}

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})