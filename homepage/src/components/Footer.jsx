import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-4">
        <aside>
            <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved - Coding Soul</p>
        </aside>
    </footer>
  )
}

export default Footer