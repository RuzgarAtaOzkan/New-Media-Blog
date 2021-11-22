// MODULES
import React from 'react';
import { Link } from 'react-router-dom';

// ICONS
import SublimeTextIcon from '../Icons/SublimeText';

// STYLES
import styles from './index.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles['footer-container']}>
        <div className={styles['icon-area']}>
          <SublimeTextIcon />
        </div>

        <div className={styles['nav-area']}>
          <div>
            <Link to="/contact">İletişim</Link>
          </div>
          <div>
            <Link to="/about">Blog Hakkında</Link>
          </div>
        </div>
      </div>

      <div className={styles['rights-area']}>© Ruzgar Ata Ozkan Blog.</div>
    </footer>
  );
}

export default Footer;
