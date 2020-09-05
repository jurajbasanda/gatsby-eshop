import React from 'react'
import {Link} from 'gatsby'

import './footer.scss'

export default function Footer() {
  return (
    <footer>
    <ul className='socialNetworks'>
    <li><a href='twitter.com'><i className="fab fa-twitter"></i></a></li>
    <li><a href='intsagram.com'><i className="fab fa-instagram"></i></a></li>
    <li><a href='facebook.com'><i className="fab fa-facebook-f"></i></a></li>
    </ul>
    <br/>
    <article className='sub'>
    <label htmlFor='email'>Fallow us</label>
    <input type="emial" id='email' name='email'  placeholder='Join our Newsletter'/>
    <button>Join</button>
    </article>
    <br/>
    <ul className='footer-list'>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/'>FAQ's</Link></li>
    <li><Link to='/'>Returns</Link></li>
    <li><Link to='/'>Terms and Condidtions</Link></li>
    </ul>
    <br/>
    <br/>
    <section className='madeBy'>
    © {new Date().getFullYear()}, Made by
          {` `}
          <a href="https://www.jurajbasanda.com">Juraj Basanda</a>
    </section>
    </footer>
  );
}
