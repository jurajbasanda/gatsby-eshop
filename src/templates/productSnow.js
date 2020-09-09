import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//images
import stars from '../images/stars.jpg'


import './item.scss'

export default function Template({data}){
  const section = data.allWpSnow.nodes;
  const item = section[0]
    return(
  <Layout>
    <SEO title={`Board | ${item.snow.title}`} />
    <section className='item-template'>
    <Link className='backLink' to='/snow'><i className="fas fa-chevron-left" /> Go back </Link>
    <div className="item-group">
   <img src={item.snow.image.sourceUrl} alt={item.snow.title}/>
      <div className="item-info">
        <div className="item-title">
          <h2>{item.snow.title}</h2>
          <p>Brand by {item.snow.brand} </p>
          </div>
          <div className='reviews-group'>
          <img src={stars} alt='Stars Reviews'/>
          <small> 6 Customers Reviews</small>
          </div>
          <div className='addTo-group'><p>Availability: <span>IN STOCK</span> and ready to deliver</p>
          <div className='addTo'>
          <p className='price'>£ {item.snow.price}</p>
        <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
                      </select>
        <button>ADD TO BASKET</button>
        </div>
        </div>
        <div className='item-dsc'>
          <p><h4>PRODUCT DETAILS</h4><br/>{item.snow.content}</p>
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