import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './item.scss'

export default function Template({data}){
  const section = data.allWpSurf.nodes;
  const item = section[0]
    return(
  <Layout>
    <SEO title={item.surf.title} />
    <section className='item-template'>
    <Link className='backLink' to='/surf'><i className="fas fa-chevron-left" /> Go back </Link>
    <div className="item-group">
   <img src={item.surf.image.sourceUrl} alt={item.surf.title}/>
      <div className="item-info">
        <div className="item-title">
          <h2>{item.surf.title}</h2>
          <small>Brand by {item.surf.brand}</small>
          <p className='price'>£ {item.surf.price}</p>
        </div>
        <div className='item-dsc'>
          <p>{item.surf.content}</p>
        </div>
      </div>
  </div>    </section>
  </Layout>
    )
}

export const postQuery = graphql`
query($id: String) {
  allWpSurf(filter: {id: {eq:$id}}) {
    nodes {
      surf {
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