import React from 'react'
import { graphql } from 'gatsby';

import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"
import './boards.scss'

//Background Image
import background from '../../img/surfing01.jpg'

const SurfPage = ({data}) =>{  
  const sections = data.allWpSurf.nodes;

  return(
    
    <Layout>
    <SEO title='Board | Surfboard'/>
    <section className='boards'>
    <div className='head-background' style={ {backgroundImage:`url(${background})`}} >
      <h2>Skateboard</h2>
      </div>
      <Link className='backLink' to='/'><i className="fas fa-chevron-left" /> Go back </Link>
    <h3>Latest products</h3>
        <div className='boards-group'>
        {sections.map(section => (
            <div className='board-item'  key={section.id}>
            <Link to={section.id}>
            <img src={section.surf.image.sourceUrl} alt={section.surf.title}/>
            </Link>

            <Link to={section.id}>
            <h4>{section.surf.title}</h4>
            <p className='price'>£ {section.surf.price}</p>
            </Link>
            </div>

            ))}
            </div>
    </section>        
    </Layout>
  )}

export const pageQuery = graphql`
query {
  allWpSurf {
    nodes {
      surf {
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
}`


export default SurfPage