import React from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './surf.scss'



const surfs = [{name:'Makalullu',
                id:'01',
                path:'/post-one',
                img:'surf.jpg'
                },
              {name:'Quad Fish',
              id:'02',
              path:'/post-two',
              img:'surf.jpg'
              },
              {name:'Surf Name',
              id:'03',
              path:'/post-three',
              img:'surf.jpg'
            }]
            
const Surf = () =>{
  

  const Items = surfs.map(surf => <div key={surf.id} className='gallery-item'>
                            <h1>{surf.name}</h1>
                            <Link to={surf.path}><small>Read more</small></Link>
                            </div>)

  return (
    <Layout>
    <SEO title='Surf'/>
    <section className='surf'>
    <div className='head-background'>
      <h2>Surfboard</h2>
      </div>
      <Link className='backLink' to='/'><i className="fas fa-chevron-left" /> Go back </Link>
      <div className='gallery'>
      {Items}
      </div>
    </section>        
    </Layout>
  );
}

export default Surf
