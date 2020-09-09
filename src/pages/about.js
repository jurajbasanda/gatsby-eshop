import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

import './about.scss'


export default function about() {
  return (
    <Layout>
    <SEO title='Board | About' />
    <section className='about'>
      <h1>About</h1>
      <p>This is About page.</p>
    </section>
    </Layout>
  );
}
