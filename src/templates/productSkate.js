import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './item.scss'

export default function Template({data}){
  const section = data.allWpSkate.nodes;
  const item = section[0]
    return(
  <Layout>
    <SEO title={item.Skate.title} />
    <section className='item-template'>
    <Link className='backLink' to='/skate'><i className="fas fa-chevron-left" /> Go back </Link>
    <div className="item-group">
   <img src={item.Skate.image.sourceUrl} alt=""/>
      <div className="item-info">
        <div className="item-title">
          <h2>{item.Skate.title}</h2>
          <small>Brand by </small>
          <p className='price'>£ {item.Skate.price}</p>
        </div>
        <div className='item-dsc'>
          <p>{item.Skate.content}</p>
        </div>
      </div>
  </div>    </section>
  </Layout>
    )
}

export const postQuery = graphql`
query($slug: String) {
  allWpSkate(filter: {slug: {eq:$slug}}) {
    nodes {
      Skate {
        brand
        content
        price
        title
        image {
          sourceUrl
        }
      }
      id
      slug
    }
  }
}
`