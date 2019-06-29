import React from 'react'
import {render} from '@testing-library/react'
import Display from './Display'

test('should render Display', () => {
    render(<Display />)
})

test('should render basball stats', () => {
    const balls = 0;
    const fouls = 1;
    const strikes = 2;

    const { getAllByText } = render(<Display balls = {balls} fouls = {fouls} strikes = {strikes} />)
    getAllByText(/balls: 0/i)
    getAllByText(/fouls: 1/i)
    getAllByText(/strikes: 2/i)
})



