import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <Link to='/'>
        <h1>page not found</h1>
      </Link>
    </div>
  )
}

export default PageNotFound
