// React and packages
import React, { FC, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
// Types and utils
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { colors } from "../../theme"
// Components
import { Screen, TextField } from "../../components"


export const CreateProductScreen: FC<StackScreenProps<NavigatorParamList, "createProduct">> = observer(function CreateProductScreen() {
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [imageUri, setImageUri] = useState('')


  const setPriceMiddleware = (num: string) => {
    const lastDig = num[num.length - 1];
    if (num.length > 0) {
      if (!lastDig.match(/\d/)) {
        return;
      }
    }
    setPrice(+num);
  };


  return (
    <Screen style={styles.container} preset="fixed">

      <TextField 
        label="Product name"
        placeholder="Enter new product name..."
        value={name}
        onChangeText={t => setName(t)}
        style={{
          width: '80%'
        }}
      />
      <TextField 
        label="Product description"
        placeholder="Enter new product description..."
        value={description}
        onChangeText={t => setDescription(t)}
        style={{
          width: '80%'
        }}
      />
      <TextField 
        label="Product price"
        placeholder="Enter new product price..."
        value={price.toString()}
        keyboardType='number-pad'
        onChangeText={t => setPriceMiddleware(t)}
        style={{
          width: '80%'
        }}
      />
      
    </Screen>
  )
})


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette.white,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})