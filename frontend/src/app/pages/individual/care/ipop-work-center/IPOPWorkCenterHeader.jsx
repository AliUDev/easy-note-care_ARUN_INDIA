import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function IPOPWorkCenterHeader() {
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
                  (location.pathname === '/care/ipop-work-center/new' && 'active')
                }
                to='/care/ipop-work-center/new'
              >
                New
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/ipop-work-center/acknowledge' && 'active')
                }
                to='/care/ipop-work-center/acknowledge'
              >
                Acknowledge
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/ipop-work-center/archive' && 'active')
                }
                to='/care/ipop-work-center/archive'
              >
                Archive
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/ipop-work-center/search' && 'active')
                }
                to='/care/ipop-work-center/search' 
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

export default IPOPWorkCenterHeader