import React from 'react'
import { Link } from 'gatsby'

export default function HeaderTitle() {
  return (
    <Link style={{ textDecoration: 'none' }} to="/" aria-label="Home page">
      <h1>Yatit Thakker</h1>
    </Link>
  );
}
