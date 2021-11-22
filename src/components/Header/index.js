// MODULES
import React from 'react';

// COMPONENTS > ICONS
import SublimeTextIcon from '../Icons/SublimeText';

// STYLES
import styles from './index.module.scss';

function Header() {
  return (
    <header>
      <nav>
        <div className={styles['icon-area']}>
          <SublimeTextIcon />
        </div>

        <div className={styles['title-area']}>
          <h3>Blog</h3>
        </div>
      </nav>
    </header>
  );
}

export default Header;
