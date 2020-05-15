import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './style.scss'

export default function Template({data}){
    const post = data.markdownRemark
    return(
  <Layout>
    <SEO title={post.frontmatter.title} />
    <section className='template'>
    <Link to='/blog'>Go back</Link>
    <hr/>
    <small>Posted by {post.frontmatter.author} on {post.frontmatter.date}</small>
    <h2>{post.frontmatter.title}</h2>
    <br/>
    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </section>
  </Layout>
    )
}

export const postQuery = graphql`
        query BlogPostByPath($path: String!){
            markdownRemark(frontmatter: { path: { eq: $path } }){
                html
                frontmatter {
                    path
                    title
                    author
                    date
                }
            }
        } 
`

