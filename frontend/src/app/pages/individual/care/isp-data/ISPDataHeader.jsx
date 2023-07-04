import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function ISPDataHeader() {
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
                  (location.pathname === '/care/isp-data/new' && 'active')
                }
                to='/care/isp-data/new'
              >
                New
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/isp-data/search' && 'active')
                }
                to='/care/isp-data/search'
              >
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/isp-data/report' && 'active')
                }
                to='/care/isp-data/report'
              >
                Report
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/isp-data/search-report' && 'active')
                }
                to='/care/isp-data/search-report'
              >
                Search Report
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/care/isp-data/archive' && 'active')
                }
                to='/care/isp-data/archive'
              >
                Archive
              </Link>
            </li>
            
            
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ISPDataHeader