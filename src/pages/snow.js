import React from 'react'
import { graphql } from 'gatsby';

import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import './boards.scss'

//Background Image
import background from '../../img/skateboard01.jpg'

const SurfPage = ({data}) =>{  
  const sections = data.allWpSnow.nodes;

  return(
    
    <Layout>
    <SEO title='Snowboard'/>
    <section className='boards'>
    <div className='head-background' style={ {backgroundImage:`url(${background})`}} >
      <h2>Skateboard</h2>
      </div>
      <Link className='backLink' to='/'><i className="fas fa-chevron-left" /> Go back </Link>
    <h3>Latest products</h3>
        <div className='boards-group'>
        {sections.map(section => (
            <div className='board-item'  key={section.id}>
            <Link to={section.title}>
            <h4>{section.snow.title}</h4>
            </Link>
            <Link to={section.title}>
            <img src={section.snow.image.sourceUrl} alt="img"/>
            </Link>
            
            <p className='price'>£ {section.snow.price}</p>
             
            
            </div>

            ))}
            </div>
    </section>        
    </Layout>
  )}

export const pageQuery = graphql`
query {
  allWpSnow {
    nodes {
      snow {
        price
        content
        brand
        content
        title
        image {
          sourceUrl
        }
      }
      slug
      id
      title
    }
  }
}
`


export default SurfPage