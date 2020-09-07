import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.scss'

const youtubeVideo = "https://www.youtube.com/embed/NdGC2Yyt_aQ"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className='home'>
    <h1>Get on board <br/>with us</h1>
    </section>
    <section className='shopNow'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim diam sit amet scelerisque commodo. 
    Pellentesque quis erat quis ex tincidunt viverra. 
     pellentesque eget nisl sit amet, volutpat varius quam. Nam volutpat scelerisque fermentum. Pellentesque suscipit diam ac</p>
     <button><Link to='/blog'>SHOP NOW</Link></button></section>
    <section className='options'>
    <h2>EXPLORE OUR BOARDS</h2>
    <article className='options-group'>
    
    <Link to='/skate'><div className='options-item skate'><div className='transp'><h3>SKATE</h3></div></div></Link>
     <Link to='/snow'><div className='options-item snow'><div className='transp'><h3>SNOW</h3></div></div></Link>
     <Link to='/surf'><div className='options-item surf'><div className='transp'><h3>SURF</h3></div></div></Link>
    </article>
    </section>
    <section className='videoSection'>
    <h2>SNOWBOARD, SKATEBOADR AND SURF IN 24 HOURS</h2>
    <iframe src={youtubeVideo} title='youtubeVideo' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </section>
  </Layout>
)

export default IndexPage
