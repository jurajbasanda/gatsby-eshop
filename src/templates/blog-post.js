import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './item.scss'

export default function Template({data}){
    const post = data.markdownRemark;
    return(
  <Layout>
    <SEO title={post.frontmatter.title} />
    <section className='item-template'>
    <Link className='backLink' to='/'><i className="fas fa-chevron-left" /> Go back </Link>
      <div className="item-group">
      <div className="item-img"><img src={post.frontmatter.featuredImage} alt=""/></div>
        <div className="item-info">
          <div className="item-title">
            <h2>{post.frontmatter.title}</h2>
            <small>Brand by {post.frontmatter.author}</small>
            <p className='price'>£ {post.frontmatter.date}</p>
          </div>
          <div className='item-dsc'>
            <p  dangerouslySetInnerHTML={{ __html: post.html }}></p>
          </div>
        </div>
    </div>
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
                    featuredImage
            }
        } 
      }
`