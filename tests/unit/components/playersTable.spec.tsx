import React from 'react'
import { render, getNodeText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PlayersTable from '../../../components/PlayersTable'

describe('PlayersTable', () => {
  it('diplays a table with the player\'s name and gender', () => {
    const players = [{name: 'Orla', gender: 'Female'}, {name: 'Tom', gender: 'Male'}]
    const { getByText } = render(<PlayersTable players={players} />)
    const orla = getByText('Orla')
    const tom = getByText('Tom')
    expect(getNodeText(orla)).toEqual('Orla')
    expect(getNodeText(tom)).toEqual('Tom')
  })
})
