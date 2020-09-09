import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './item.scss'
//images
import stars from '../images/stars.jpg'

export default function Template({data}){
  const section = data.allWpSkate.nodes;
  const item = section[0]
    return(
  <Layout>
    <SEO title={`Board | ${item.Skate.title}`} />
    <section className='item-template'>
    <Link className='backLink' to='/skate'><i className="fas fa-chevron-left" /> Go back </Link>
    <div className="item-group">
   <img src={item.Skate.image.sourceUrl} alt={item.Skate.title}/>
      <div className="item-info">
        <div className="item-title">
          <h2>{item.Skate.title}</h2>
          <p>Brand by {item.Skate.brand} </p>
          </div>
          <div className='reviews-group'>
          <img src={stars} alt='Stars Reviews'/>
          <small> 3 Customers Reviews</small>
          </div>
          <div className='addTo-group'><p>Availability: <span>IN STOCK</span> and ready to deliver</p>
          <div className='addTo'>
          <p className='price'>£ {item.Skate.price}</p>
        <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
                      </select>
        <button>ADD TO BASKET</button>
        </div>
        </div>
        <div className='item-dsc'>
          <p><h4>PRODUCT DETAILS</h4><br/>{item.Skate.content}</p>
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