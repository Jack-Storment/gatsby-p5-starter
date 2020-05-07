import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import SEO from './seo'

const Layout = ({ title, children }) => {
  return (
    <div>
      <SEO title={title} />
      <Header />

      {children}

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout