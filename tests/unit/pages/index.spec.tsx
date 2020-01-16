import React from 'react'
import { render, getNodeText, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import App from '../../../pages/index'

describe('Index page', () => {
  it('should display the text text in the nav bar', () => {
    const { getByText } = render(<App />)
    const text = getByText('Lineup Builder')
    expect(getNodeText(text)).toEqual('Lineup Builder')
  })

  it('should add a new player and display the name', () => {
    const { getByText, getByTestId } = render(<App />)

    userEvent.type(getByTestId('nameInput'), 'Orla')
    expect(getByTestId('nameInput')).toHaveAttribute('value', 'Orla')

    const button = getByText('Add player')

    fireEvent.click(button)

    const name = getByText('Orla')
    expect(getNodeText(name)).toEqual('Orla')
  })

})
