import React from 'react'

const Navbar = ({title,icon}) => {
  return (
    <div className='navbar bg-primary'>
        <h1>
            <i className={icon} /> {title}
        </h1>
    </div>
  )
}

Navbar.defaultProps = {
    title: 'Learning Journal',
    icon: 'fas fa-id-card-alt'
}

export default Navbar