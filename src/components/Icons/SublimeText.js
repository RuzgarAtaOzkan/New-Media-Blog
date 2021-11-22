// MODULES
import React from 'react';

// ICONS
import { SiSublimetext } from 'react-icons/si';

function SublimeText({ active }) {
  return active ? <SiSublimetext /> : <SiSublimetext />;
}

export default SublimeText;
