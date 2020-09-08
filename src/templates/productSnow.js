import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './item.scss'

export default function Template({data}){
  const section = data.allWpSnow.nodes;
  const item = section[0]
    return(
  <Layout>
    <SEO title={item.snow.title} />
    <section className='item-template'>
    <Link className='backLink' to='/snow'><i className="fas fa-chevron-left" /> Go back </Link>
    <div className="item-group">
   <img src={item.snow.image.sourceUrl} alt=""/>
      <div className="item-info">
        <div className="item-title">
          <h2>{item.snow.title}</h2>
          <small>Brand by </small>
          <p className='price'>£ {item.snow.price}</p>
        </div>
        <div className='item-dsc'>
          <p>{item.snow.content}</p>
        </div>
      </div>
  </div>    </section>
  </Layout>
    )
}

export const postQuery = graphql`
query($title: String) {
  allWpSnow(filter: {title: {eq:$title}}) {
    nodes {
      snow {
        brand
        content
        title
        price
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