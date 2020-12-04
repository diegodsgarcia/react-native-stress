import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import Header from './components/Header'
import TransactionItem from './components/TransactionItem'
import SearchInput from './components/SearchInput'

const rand = () => Math.random() > 0.5

const createTransaction = () => {
  return {
    name: rand() ? 'joão silva' : 'beatriz gomez',
    amount: rand() ? 'R$ 1.400,00' : 'R$ 223,87',
    date: '8 de março',
    status: rand() ? 'Em análise' : 'Aprovado',
  }
}
const mockTransactions = Array.from({ length: 2000 }, createTransaction)

export default function App() {
  const [filter, setFilter] = useState('')

  return (
    <>
      <Header>
        <SearchInput placeholder="Pesquisar" onChangeText={(value) => setFilter(value)}/>
      </Header>

      <ScrollView>
        {mockTransactions
        .filter(({ name }) => filter === '' || name.includes(filter))
        .map((transaction, i) => (
          <TransactionItem key={i} {...transaction} />
        ))}
      </ScrollView>
    </>
  )
}
