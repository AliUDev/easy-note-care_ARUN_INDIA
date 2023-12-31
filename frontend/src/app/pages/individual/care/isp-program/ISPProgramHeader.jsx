import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function ISPProgramHeader() {
    const location = useLocation()
  return (
    <div>
         <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/isp-program/new' && 'active')
                }
                to='/care/isp-program/new'
              >
                New
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/isp-program/search' && 'active')
                }
                to='/care/isp-program/search'
              >
                Search
              </Link>
            </li>
  
            
            
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ISPProgramHeader