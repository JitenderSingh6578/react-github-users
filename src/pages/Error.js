import React from 'react'
import { Link } from 'react-router-dom'
import styles from './includes/css/Error.module.css'

export default function Error() {
  return (
    <div className={styles.mainCl}>
      <div className={styles.center}>
        <div className='display-1  fw-bold'>404</div>
        <div className='h3'>
          Sorry, the page you are trying to access not found.
        </div>
        <div className='btnCL'>
          <Link to='/' className='btn btn-primary my-2'>
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
