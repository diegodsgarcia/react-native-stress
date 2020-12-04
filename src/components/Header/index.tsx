import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>Minhas vendas</Text>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F2F2F3'
  },
  text: {
    fontSize: 24,
    color: '#1D1647'
  }
})

export default Header
