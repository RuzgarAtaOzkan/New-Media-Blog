

// MODULES
import React from 'react';

// ICONS
import { FaPlay } from 'react-icons/fa';

function Play({ active }) {
  return active ? <FaPlay /> : <FaPlay />;
}

export default Play;
