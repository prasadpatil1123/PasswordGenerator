import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordlength:Yup.number()
  .min(4, 'Should be minimum of 4 characters')
  .max(16, 'Should be maxmum of 16 characters')
  .required('Length is required')
})

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})