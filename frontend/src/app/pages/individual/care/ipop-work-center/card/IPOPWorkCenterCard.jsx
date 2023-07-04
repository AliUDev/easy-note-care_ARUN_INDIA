import React from 'react'
import { Link } from 'react-router-dom'
import { Graph3 } from '../../../../../../_helper/partials/widgets'


function IPOPWorkCenterCard() {
  return (
    <>
      {/* <div className="card card-flush h-md-100">
                <div className="card-header">
                  <div className="card-title">

                    <h2>IPOP Work Center</h2>
                  </div>
                </div>
                <div className="card-body pt-1">
                  <div className="d-flex flex-column text-gray-600">
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ipop-work-center/new">New</Link>
                    </div>
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ipop-work-center/acknowledge">Acknowledge</Link>
                    </div>
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ipop-work-center/archive">Archive</Link>
                    </div>
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ipop-work-center/search">Search</Link>
                    </div>
                  </div>
                </div>
              </div> */}









      {/*begin::Mixed Widget 12*/}
      <div className="card card-xl-stretch mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-dark py-5">
          <h3 className="card-title fw-bolder text-white">IPOP Work Center</h3>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          {/*begin::Chart*/}
          <Graph3
            chartColor='dark'
            chartHeight='250px'
          />
          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div className="card-rounded bg-body mt-n10 position-relative card-px py-15 ">
            {/*begin::Row*/}
            <div className="row g-0  ">
              {/*begin::Col*/}
              <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-6 mt-2">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-success">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="black" />
                          <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="black" />
                          <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="black" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$49</div> */}
                    <Link to="/care/ipop-work-center/new">
                      <div className="fs-7 fw-bolder text-success">New</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-6 mt-2">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-primary">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <path opacity="0.3" d="M3 6C2.4 6 2 5.6 2 5V3C2 2.4 2.4 2 3 2H5C5.6 2 6 2.4 6 3C6 3.6 5.6 4 5 4H4V5C4 5.6 3.6 6 3 6ZM22 5V3C22 2.4 21.6 2 21 2H19C18.4 2 18 2.4 18 3C18 3.6 18.4 4 19 4H20V5C20 5.6 20.4 6 21 6C21.6 6 22 5.6 22 5ZM6 21C6 20.4 5.6 20 5 20H4V19C4 18.4 3.6 18 3 18C2.4 18 2 18.4 2 19V21C2 21.6 2.4 22 3 22H5C5.6 22 6 21.6 6 21ZM22 21V19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19V20H19C18.4 20 18 20.4 18 21C18 21.6 18.4 22 19 22H21C21.6 22 22 21.6 22 21Z" fill="black" />
                          <path d="M3 16C2.4 16 2 15.6 2 15V9C2 8.4 2.4 8 3 8C3.6 8 4 8.4 4 9V15C4 15.6 3.6 16 3 16ZM13 15V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V15C11 15.6 11.4 16 12 16C12.6 16 13 15.6 13 15ZM17 15V9C17 8.4 16.6 8 16 8C15.4 8 15 8.4 15 9V15C15 15.6 15.4 16 16 16C16.6 16 17 15.6 17 15ZM9 15V9C9 8.4 8.6 8 8 8H7C6.4 8 6 8.4 6 9V15C6 15.6 6.4 16 7 16H8C8.6 16 9 15.6 9 15ZM22 15V9C22 8.4 21.6 8 21 8H20C19.4 8 19 8.4 19 9V15C19 15.6 19.4 16 20 16H21C21.6 16 22 15.6 22 15Z" fill="black" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$5.8M</div> */}
                    <Link to="/care/ipop-work-center/acknowledge">
                      <div className="fs-7 fw-bolder text-primary">Acknowledge</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row g-0 mt-4 ">
              {/*begin::Col*/}
              <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-6 mt-2">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-danger">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                      <span class="svg-icon svg-icon-1 svg-icon-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
                          <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$49</div> */}
                    <Link to="/care/ipop-work-center/archive">
                      <div className="fs-7 fw-bolder text-danger">Archive</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-6 mt-2">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-info">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="black" />
                        <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="black" />
                      </svg>

                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$5.8M</div> */}
                    <Link to="/care/ipop-work-center/search">
                      <div className="fs-7  fw-bolder text-info">Search</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}

          </div>
          {/*end::Stats*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Mixed Widget 12*/}






    </>
  )
}

export default IPOPWorkCenterCard