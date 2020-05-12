import React from 'react';

import './contact.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const googleMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4733995464!2d-0.24168109087866665!3d51.528558241786754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZMO9bg!5e0!3m2!1ssk!2suk!4v1589224969964!5m2!1ssk!2suk"
export default function contact() {
  return (
    <Layout>
    <SEO title='Contact' />
    <section className='contact'>
    <iframe src={googleMap} title='googleMap' />
    <h2>Contact Us</h2>
    <form action="" method="post">
      <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
      <label htmlFor="name">Name</label>
        <input typ='name' name='name'/>
      <label htmlFor="message">Message</label>
        <textarea name="message" cols="30" rows="10"></textarea>
    <button type="submit">Send</button>
    </form>
      </section>
    </Layout>
  );
}
