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
        <p>My name is Wendy Dherin, and I&rsquo;m a full stack developer with a passion for making beautiful audio and visual artworks and building physics engines with <a href="https://p5js.org/" target="_blank" rel="noreferrer">p5.js</a>.</p>
        <p>In 2014 I built <a href="https://www.audiosnowflake.com" target="_blank" rel="noreferrer">Audio Snowflake</a>, a music-visualizer that creates unique spirographs for songs based on their musical properties, using a predecessor of p5.js, <a href="https://www.processing.org/" target="_blank" rel="noreferrer">Processing</a>. <strong><i>Update on Audio Snowflake:</i></strong> It&rsquo;s currently not fully functional because the Echonest API it relies on has gone the way of the dodo; only songs that are already in the database are searchable. So you can try to search and you might get lucky and get a snowflake, otherwise, search just on the artists, and you might get a different song by them. I hope to soon update the app to use the Spotify API, which has replaced the Echonest one.</p>
        <p>I&rsquo;m originally from California, but I currently reside in Ireland.</p>
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