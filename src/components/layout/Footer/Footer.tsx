import {Logo} from '@components/shared';
import FacebookIcon from '@assets/socials/facebook.svg?react'
import TwitterIcon from '@assets/socials/twitter.svg?react'
import InstagramIcon from '@assets/socials/instagram.svg?react'

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.socials__container}>
            <Logo/>
            <p className={styles.slogan}>Our vision is to provide convenience and help increase your sales business.</p>
            <div className={styles.socials}>
              <a className={styles.social__link} href="#">
                <div className={styles.mark}/>
                <FacebookIcon/>
              </a>
              <a className={styles.social__link} href="#">
                <div className={styles.mark}/>
                <TwitterIcon/>
              </a>
              <a className={styles.social__link} href="#">
                <div className={styles.mark}/>
                <InstagramIcon/>
              </a>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <p className={styles.column__title}>About</p>
              <ul className={styles.column__list}>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Featured</a></li>
                <li><a href="#">Partnership</a></li>
                <li><a href="#">Bussiness Relation</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <p className={styles.column__title}>Community</p>
              <ul className={styles.column__list}>
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Invite a friend</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <p className={styles.column__title}>Socials</p>
              <ul className={styles.column__list}>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.breakLine}/>
        <div className={styles.rights}>
          <p>©2024 Company Name. All rights reserved</p>
          <div className={styles.privacy}>
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
