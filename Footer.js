import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
             <p className='footer-subscription-heading'>
                 Dergoni email rreth pyetjeve qe keni
             </p>
             <p className='footer-subscription-text'>
                MUND TE NA SHKRUANI NE CDO KOHE
             </p>
             <div className='input-areas'>
                 <form>
                     <input 
                     className='footer-input'
                     type='email' 
                     name='email'
                     placeholder='Your email'
                     
                     />
                    <Button buttonStyle='btn--outline'>Send</Button>
                 </form>
             </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                  <div className='footer-link-items'>
                      <h2>Rreth Nesh</h2>
                      <Link to='/sherbimet'>Sherbimet</Link>
                      <Link to='/produktet'>Produktet</Link>
                      <Link to='/'>Keshillat</Link>
                      <Link to='/'>Partneret</Link>
                  </div>
                  <div className='footer-link-items'>
                      <h2>Kontakti</h2>
                      <Link to='/'>Qendra E Thirrjeve</Link>
                      <Link to='/'>Lokacioni</Link>
                      <Link to='/'>EMAIL</Link>
                  </div>
                  <div className='footer-link-items'>
                      <h2>Mediat Sociale</h2>
                      <Link to='/'>Instagram</Link>
                      <Link to='/'>Facebook</Link>
                      <Link to='/'>Youtube</Link>
                      <Link to='/'>Twitter</Link>
                    </div>
                  </div>
                </div>
                <section class='social-media'>
                 <div class='social-media-wrap'>
                  <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                      KOSIG
                      <i class='fas fa-shield-alt' />
                    </Link>
                  </div>
                  <small class='website-rights'>KOSIG © 2021</small>
                  <div class='social-icons'>
                    <Link
                     class='social-icon-link facebook'
                     to='/'
                     target='_blank'
                     aria-label='Facebook'
                    >
                      <i class='fab fa-facebook-f' />
                   </Link>
                   <Link
                     class='social-icon-link instagram'
                     to='/'
                     target='_blank'
                    aria-label='Instagram'
                   >
                    <i class='fab fa-instagram' />
                   </Link>
                    <Link
                     class='social-icon-link youtube'
                      to='/'
                     target='_blank'
                     aria-label='Youtube'
                    >
                     <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                   >
                    <i class='fab fa-twitter' />
                  </Link>
                  <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                 aria-label='LinkedIn'
                  >
                <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
     </div>
    );
}

export default Footer;
 