import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function ServiceAuthorizationHeader() {
  const location = useLocation()

  return (
    <div>
       <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Service Authorization</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/professional-claim/service-authorization/applied-rate-history-search' && 'active')
                                    }
                                    to='/professional-claim/service-authorization/applied-rate-history-search'
                                >
                                    Applied Rate History Search
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/professional-claim/service-authorization/archive' && 'active')
                                    }
                                    to='/professional-claim/service-authorization/archive'
                                >
                                    Archive
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/professional-claim/service-authorization/new' && 'active')
                                    }
                                    to='/professional-claim/service-authorization/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/professional-claim/service-authorization/renewal-search' && 'active')
                                    }
                                    to='/professional-claim/service-authorization/renewal-search'
                                >
                                    Renewal Search
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/professional-claim/service-authorization/search' && 'active')
                                    }
                                    to='/professional-claim/service-authorization/search'
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

export default ServiceAuthorizationHeader