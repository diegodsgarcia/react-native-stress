import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

const SearchInput = (props: TextInputProps) => <TextInput style={styles.container} {...props} />

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    padding: 8,
    borderColor: '#72737A',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid'
  },
})

export default SearchInput
