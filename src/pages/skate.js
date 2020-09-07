import React from 'react'
import { graphql } from 'gatsby';

import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import './boards.scss'

//Background Image
import background from '../../img/skateboard01.jpg'

const SkatePage = ({data}) =>{  
  const sections = data.allWpSkate.nodes;

  return(
    
    <Layout>
    <SEO title='Blog'/>
    <section className='boards'>
    <div className='head-background' style={ {backgroundImage:`url(${background})`}} >
      <h2>Skateboard</h2>
      </div>
      <Link className='backLink' to='/'><i className="fas fa-chevron-left" /> Go back </Link>
    <h3>Latest products</h3>
        <div className='boards-group'>
        {sections.map(section => (
            <div className='board-item'  key={section.id}>
            <Link to={section.slug}>
            <h4>{section.Skate.title}</h4>
            </Link>
            <Link to={section.slug}>
            <img src={section.Skate.image.sourceUrl} alt="img"/>
            </Link>
            
            <p className='price'>£ {section.Skate.price}</p>
             
            
            </div>

            ))}
            </div>
    </section>        
    </Layout>
  )}

export const pageQuery = graphql`
{
  allWpSkate {
    nodes {
      Skate {
        fieldGroupName
        price
        title
        image {
          sourceUrl
        }
      }
      id
      content
      slug
    }
  }
}

`


export default SkatePage