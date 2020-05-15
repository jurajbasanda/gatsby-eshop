import React from 'react'

import Link from 'gatsby-link'


import Layout from "../components/layout"
import SEO from "../components/seo"

import './boards.scss'

const BlogPage = ({data}) =>  
  (
    <Layout>
    <SEO title='Blog'/>
    <section className='boards'>
      <h1>Latest Post</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br/>
            <br/>
             <Link to={post.node.frontmatter.path}>Read More</Link>
            <br/>
            <br/>
            <hr/>
            </div>

            ))}
    </section>        
    </Layout>
  )

export const pageQuery = graphql`
query BlogIndexQuery{
    
        allMarkdownRemark {
          edges {
            node {
                id
              frontmatter {
                path
                date
                author
                title
              }
              excerpt
            }
          }
        }
      
}
`


export default BlogPage