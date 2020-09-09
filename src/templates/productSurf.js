import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//images
import stars from '../images/stars.jpg'

import './item.scss'

export default function Template({data}){
  const section = data.allWpSurf.nodes;
  const item = section[0]
    return(
  <Layout>
    <SEO title={`Board | ${item.surf.title}`} />
    <section className='item-template'>
    <Link className='backLink' to='/surf'><i className="fas fa-chevron-left" /> Go back </Link>
    <div className="item-group">
   <img src={item.surf.image.sourceUrl} alt={item.surf.title}/>
      <div className="item-info">
        <div className="item-title">
          <h2>{item.surf.title}</h2>
          <p>Brand by {item.surf.brand} </p>
          </div>
          <div className='reviews-group'>
          <img src={stars} alt='Stars Reviews'/>
          <small> 5 Customers Reviews</small>
          </div>
          <div className='addTo-group'><p>Availability: <span>IN STOCK</span> and ready to deliver</p>
          <div className='addTo'>
          <p className='price'>£ {item.surf.price}</p>
        <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
                      </select>
        <button>ADD TO BASKET</button>
        </div>
        </div>
        <div className='item-dsc'>
          <p><h4>PRODUCT DETAILS</h4><br/>{item.surf.content}</p>
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