import React from 'react'
import { render, getNodeText } from '@testing-library/react'
import Index from '../pages/index'

describe('Index page', () => {
  it('should display the text Softball app', () => {
    const { getByText } = render(<Index />)
    const text = getByText('Softball app')
    expect(getNodeText(text)).toEqual('Softball app')
  })
})
