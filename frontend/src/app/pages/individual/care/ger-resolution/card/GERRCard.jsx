import React from 'react'
import { Link } from 'react-router-dom'
import { Graph2 } from '../../../../../../_helper/partials/widgets'


function GERRCard() {
  return (
    <>
      {/* <div className="card card-flush h-md-100">
        <div className="card-header">
          <div className="card-title">
            <h2>GER Resolution  </h2>
          </div>
        </div>
        <div className="card-body pt-1">
          <div className="d-flex flex-column text-gray-600">
            <div className="d-flex align-items-center text-hover-primary py-2">
              <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ger-resolution/new" >New</Link></div>
            <div className="d-flex align-items-center text-hover-primary py-2">
              <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ger-resolution/unaddressed-gers" > Unaddressed GERs</Link></div>
            <div className="d-flex align-items-center text-hover-primary py-2">
              <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ger-resolution/open-resolution" >Open Resolutions</Link></div>
            <div className="d-flex align-items-center text-hover-primary py-2">
              <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ger-resolution/open-investigation" >Open Investigations</Link></div>
            <div className="d-flex align-items-center text-hover-primary py-2">
              <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/ger-resolution/search" >Search</Link></div>
          </div>
        </div>
      </div> */}






      <div className={`card card-xl-stretch mb-xl-8`}>
        {/* begin::Body */}
        <div className='card-body p-0'>
          {/* begin::Header */}
          <div className={`px-9 pt-7 card-rounded  w-100`}>
            {/* begin::Heading */}
            <div className='d-flex flex-stack'>
              <h3 className='m-0 fw-bolder fs-3'>GER Resolution</h3>

            </div>
            {/* end::Heading */}
          </div>
          {/* end::Header */}
          <div>
            <Graph2
              chartColor='success'
              chartHeight='200px'
            />
          </div>
          {/* begin::Items */}
          <div
            className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-white'
            style={{ marginTop: '-70px' }}
          >
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className='symbol symbol-45px w-40px me-5'>
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
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/care/ger-resolution/new" >New</Link>
                  </div>
                </div>
                {/* end::Title */}
              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className='symbol symbol-45px w-40px me-5'>
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
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/care/ger-resolution/unaddressed-gers" >Unaddressed GERs</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className='symbol symbol-45px w-40px me-5'>
                <div className="symbol-label bg-light-info">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                  <span class="svg-icon svg-icon-1 svg-icon-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M20.859 12.596L17.736 13.596L10.388 20.944C10.2915 21.0406 10.1769 21.1172 10.0508 21.1695C9.9247 21.2218 9.78953 21.2486 9.65302 21.2486C9.5165 21.2486 9.3813 21.2218 9.25519 21.1695C9.12907 21.1172 9.01449 21.0406 8.918 20.944L2.29999 14.3229C2.10543 14.1278 1.99619 13.8635 1.99619 13.588C1.99619 13.3124 2.10543 13.0481 2.29999 12.853L11.853 3.29999C11.9495 3.20341 12.0641 3.12679 12.1902 3.07452C12.3163 3.02225 12.4515 2.9953 12.588 2.9953C12.7245 2.9953 12.8597 3.02225 12.9858 3.07452C13.1119 3.12679 13.2265 3.20341 13.323 3.29999L21.199 11.176C21.3036 11.2791 21.3797 11.4075 21.4201 11.5486C21.4605 11.6898 21.4637 11.8391 21.4295 11.9819C21.3953 12.1247 21.3249 12.2562 21.2249 12.3638C21.125 12.4714 20.9989 12.5514 20.859 12.596Z" fill="black" />
                      <path d="M14.8 10.184C14.7447 10.1843 14.6895 10.1796 14.635 10.1699L5.816 8.69997C5.55436 8.65634 5.32077 8.51055 5.16661 8.29469C5.01246 8.07884 4.95035 7.8106 4.99397 7.54897C5.0376 7.28733 5.18339 7.05371 5.39925 6.89955C5.6151 6.7454 5.88334 6.68332 6.14498 6.72694L14.963 8.19692C15.2112 8.23733 15.435 8.36982 15.59 8.56789C15.7449 8.76596 15.8195 9.01502 15.7989 9.26564C15.7784 9.51626 15.6642 9.75001 15.479 9.92018C15.2939 10.0904 15.0514 10.1846 14.8 10.184ZM17 18.6229C17 19.0281 17.0985 19.4272 17.287 19.7859C17.4755 20.1446 17.7484 20.4521 18.0821 20.6819C18.4158 20.9117 18.8004 21.0571 19.2027 21.1052C19.605 21.1534 20.0131 21.103 20.3916 20.9585C20.7702 20.814 21.1079 20.5797 21.3758 20.2757C21.6437 19.9716 21.8336 19.607 21.9293 19.2133C22.025 18.8195 22.0235 18.4085 21.925 18.0154C21.8266 17.6223 21.634 17.259 21.364 16.9569L19.843 15.257C19.7999 15.2085 19.7471 15.1697 19.688 15.1432C19.6289 15.1167 19.5648 15.1029 19.5 15.1029C19.4352 15.1029 19.3711 15.1167 19.312 15.1432C19.2529 15.1697 19.2001 15.2085 19.157 15.257L17.636 16.9569C17.2254 17.4146 16.9988 18.0081 17 18.6229ZM10.388 20.9409L17.736 13.5929H1.99999C1.99921 13.7291 2.02532 13.8643 2.0768 13.9904C2.12828 14.1165 2.2041 14.2311 2.29997 14.3279L8.91399 20.9409C9.01055 21.0381 9.12539 21.1152 9.25188 21.1679C9.37836 21.2205 9.51399 21.2476 9.65099 21.2476C9.78798 21.2476 9.92361 21.2205 10.0501 21.1679C10.1766 21.1152 10.2914 21.0381 10.388 20.9409Z" fill="black" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/care/ger-resolution/open-resolution" >Open Resolutions</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
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
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/care/ger-resolution/open-investigation" >Open Investigations</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center'>
              {/* begin::Symbol */}
              <div className="symbol symbol-50px me-3">
                <div className="symbol-label bg-light-info">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                  <span class="svg-icon svg-icon-1 svg-icon-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M20.859 12.596L17.736 13.596L10.388 20.944C10.2915 21.0406 10.1769 21.1172 10.0508 21.1695C9.9247 21.2218 9.78953 21.2486 9.65302 21.2486C9.5165 21.2486 9.3813 21.2218 9.25519 21.1695C9.12907 21.1172 9.01449 21.0406 8.918 20.944L2.29999 14.3229C2.10543 14.1278 1.99619 13.8635 1.99619 13.588C1.99619 13.3124 2.10543 13.0481 2.29999 12.853L11.853 3.29999C11.9495 3.20341 12.0641 3.12679 12.1902 3.07452C12.3163 3.02225 12.4515 2.9953 12.588 2.9953C12.7245 2.9953 12.8597 3.02225 12.9858 3.07452C13.1119 3.12679 13.2265 3.20341 13.323 3.29999L21.199 11.176C21.3036 11.2791 21.3797 11.4075 21.4201 11.5486C21.4605 11.6898 21.4637 11.8391 21.4295 11.9819C21.3953 12.1247 21.3249 12.2562 21.2249 12.3638C21.125 12.4714 20.9989 12.5514 20.859 12.596Z" fill="black" />
                      <path d="M14.8 10.184C14.7447 10.1843 14.6895 10.1796 14.635 10.1699L5.816 8.69997C5.55436 8.65634 5.32077 8.51055 5.16661 8.29469C5.01246 8.07884 4.95035 7.8106 4.99397 7.54897C5.0376 7.28733 5.18339 7.05371 5.39925 6.89955C5.6151 6.7454 5.88334 6.68332 6.14498 6.72694L14.963 8.19692C15.2112 8.23733 15.435 8.36982 15.59 8.56789C15.7449 8.76596 15.8195 9.01502 15.7989 9.26564C15.7784 9.51626 15.6642 9.75001 15.479 9.92018C15.2939 10.0904 15.0514 10.1846 14.8 10.184ZM17 18.6229C17 19.0281 17.0985 19.4272 17.287 19.7859C17.4755 20.1446 17.7484 20.4521 18.0821 20.6819C18.4158 20.9117 18.8004 21.0571 19.2027 21.1052C19.605 21.1534 20.0131 21.103 20.3916 20.9585C20.7702 20.814 21.1079 20.5797 21.3758 20.2757C21.6437 19.9716 21.8336 19.607 21.9293 19.2133C22.025 18.8195 22.0235 18.4085 21.925 18.0154C21.8266 17.6223 21.634 17.259 21.364 16.9569L19.843 15.257C19.7999 15.2085 19.7471 15.1697 19.688 15.1432C19.6289 15.1167 19.5648 15.1029 19.5 15.1029C19.4352 15.1029 19.3711 15.1167 19.312 15.1432C19.2529 15.1697 19.2001 15.2085 19.157 15.257L17.636 16.9569C17.2254 17.4146 16.9988 18.0081 17 18.6229ZM10.388 20.9409L17.736 13.5929H1.99999C1.99921 13.7291 2.02532 13.8643 2.0768 13.9904C2.12828 14.1165 2.2041 14.2311 2.29997 14.3279L8.91399 20.9409C9.01055 21.0381 9.12539 21.1152 9.25188 21.1679C9.37836 21.2205 9.51399 21.2476 9.65099 21.2476C9.78798 21.2476 9.92361 21.2205 10.0501 21.1679C10.1766 21.1152 10.2914 21.0381 10.388 20.9409Z" fill="black" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/care/ger-resolution/search" >Search</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
          </div>
          {/* end::Items */}
        </div>
        {/* end::Body */}
      </div>











    </>
  )
}

export default GERRCard