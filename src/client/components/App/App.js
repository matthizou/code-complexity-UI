import React from 'react'
import styled from 'styled-components'
import { Button } from '../'

import { getDates } from '../../services/api'

const Main = styled.main`
  padding-top: 4.75em; /* 76px / 16px */
`

/** Top level component */
export class App extends React.Component {
  async componentDidMount() {
    const dates = await getDates()
    console.log(dates)
  }

  render() {
    return (
      <Main>
        <Button> Click Me </Button>
      </Main>
    )
  }
}
