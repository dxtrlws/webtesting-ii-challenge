import React from 'react'
import {render, fireEvent, getAllByTestId, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {

    test('should render Dashboard', () => {
        render(<Dashboard />)
    })
    
    test('should click swing button ', () => {
        const { getByText } = render(<Dashboard/>)
        const button = getByText(/swing/i)
        fireEvent.click(button)

    })
})


