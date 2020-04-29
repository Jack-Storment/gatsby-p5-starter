import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledLayout = styled.div`
`

const StyledHeader = styled.div`
  color: white;
  background-color: black;
`

const Container = styled.div``

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledHeader>Hi!</StyledHeader>
      <Container>{children}</Container>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
