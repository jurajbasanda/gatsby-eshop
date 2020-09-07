import React from 'react'
import { graphql } from 'gatsby';

import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import './boards.scss'

//Background Image
import background from '../../public/img/snowboarding01.jpg'

const SnowPage = ({data}) =>  
  (
    <Layout>
    <SEO title='Blog'/>
    <section className='boards'>
    <div className='head-background' style={ {backgroundImage:`url(${background})`}} >
    <h2>Snowboard</h2>
      </div>
      <Link className='backLink' to='/'><i className="fas fa-chevron-left" /> Go back </Link>
    <h2>Latest products</h2>
        <div className='boards-group'>
        {data.allMarkdownRemark.edges.map(post => (
            <div className='board-item'  key={post.node.id}>
            <Link to={post.node.frontmatter.path}>
            <h3>{post.node.frontmatter.title}</h3>
            </Link>
            <small>Skate by {post.node.frontmatter.author}</small>
            <Link to={post.node.frontmatter.path}>
            <img src={post.node.frontmatter.featuredImage} alt="img"/>
            </Link>
            <br/>
            <br/>
            <p className='price'>£{post.node.frontmatter.date}</p>
             
            <br/>
            <br/>
            </div>

            ))}
            </div>
    </section>        
    </Layout>
  )

export const pageQuery = graphql`
query SnowIndexQuery{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          path
          date
          author
          title
          featuredImage
          }
        excerpt
      }
    }
  }

      
}
`


export default SnowPage