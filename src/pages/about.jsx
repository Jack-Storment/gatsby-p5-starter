import React from "react"
import { graphql, Link } from 'gatsby'

import PropTypes from 'prop-types'
import Img from "gatsby-image/withIEPolyfill"

import Layout from '../components/layout'

const About = ({ data }) => {
  const { allFile: { nodes } } = data

  return (
    <Layout>
      <div className="about-content-container">
        <h1>About Jack</h1>
        <p>Full-Stack Developer with over 5 years of professional experience in web and application development.</p>
        <p>Entrepreneurial and team centric skills including starting a company and working in a team environment to build multiple full-stack enterprise mobile and web applications.</p>
        <p>Recently graduated from UNC Chapel Hill with a bachelor of science in computer science.</p>
        <p>Started a web development business in Durham, North Carolina that was profitable in under two weeks.</p>
        <h1>Professional Experience</h1>
        { data && nodes && <Img className="round" fluid={ nodes[0].childImageSharp.fluid } /> }
        <p>In 2015 I started my web development career by helping small business owner Arno Ilgner build a website that allowed for the global sale of his books translated into three different languages via custom Wordpress and Shopify development.</p>
        <p>In 2016 I built <a href="https://triangleweb.solutions" target="_blank" rel="noreferrer">Triangle Web Solutions</a>, a web development company mainly focused on React that empowers local businesses in the Research Triangle Park area to help build a strong web presence. This has been especially helpful to local resturaunts by enabling contact-less pickup. One of our biggest clients, Matt Ganzert, was not only able to survive the pandemic but thrive as he went on to start two more resturaunts in the area! </p>
        <p>In 2017 I interned at Fidelity Investments to help redesign their landing page as well as help with data visualization projects.</p>
        <p>Currently, I am still running Triangle Web Solutions although we are working with our last client as my business partner just accepted a job at Facebook.</p>
        <p>After I graduated from UNC, I accepted a one year contract job at QuestBlue Systems building multiple enterprise mobile and web telecommunications applications for our clients such as Penn State University. The contract ends in March of 2021 and I am currently looking for my next full-time job opportunity!</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/static/images/about/"}}) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }  
`

About.propTypes = {
  data: PropTypes.object
}

export default About