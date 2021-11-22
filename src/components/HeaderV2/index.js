// MODULES
import React from 'react';

// ICONS
import SublimeTextIcon from '../Icons/SublimeText';

// STYLES
import styles from './index.module.scss';

function HeaderV2() {
  return (
    <header>
      <nav>
        <div className={styles['icon-area']}>
          <SublimeTextIcon />
        </div>

        <div className={styles['nav-area']}>
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderV2;
