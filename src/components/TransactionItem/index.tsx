import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Pizza from './Pizza'

export type TransactionItemProps = {
  name: string
  amount: string
  date: string
  status: string
}

const TransactionItem = ({name, amount, date, status}: TransactionItemProps ) => (
  <View style={styles.container}>
    <View style={styles.icon}>
      <Pizza />
    </View>
    <View style={styles.content}>
      <View style={styles.contentText}>
        <Text>{name}</Text>
        <Text>{date}</Text>
      </View>
      <View style={styles.contentText}>
        <Text>{amount}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 20,
    paddingVertical: 16,
  },
  icon: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1
  },
  contentText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  normalText: {
    fontSize: 16,
    color: '#454550',
  },
  smallText: {
    fontSize: 14,
    color: '#72737A'
  }
})

export default TransactionItem
