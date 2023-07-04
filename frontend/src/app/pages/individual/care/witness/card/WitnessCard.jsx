import React from 'react'
import { Link } from 'react-router-dom'
import { Graph1 } from '../../../../../../_helper/partials/widgets'

function WitnessCard() {




  return (
    <>
      {/* <div className="card card-flush h-md-100">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Witness </h2>
                  </div>
                </div>
              
                <div className="card-body pt-1">
            
                  <div className="d-flex flex-column text-gray-600">
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/witness/search">Search</Link></div>
                
                  </div>
                </div>

              </div>



 */}










      {/*begin::Mixed Widget 2*/}
      <div className="card card-xl-stretch mb-5 mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-primary py-5">
          <h3 className="card-title fw-bolder text-white">Witness</h3>

        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          {/*begin::Chart*/}
          {/* <div className="mixed-widget-2-chart card-rounded-bottom bg-primary" data-kt-color="primary" style={{height: '200px'}} /> */}
          <Graph1
            chartColor='primary'
            strokeColor='#0078d0'
            chartData={[25, 20, 35, 25, 60, 40, 70]}
            chartHeight='200px'
          />
          {/*end::Chart*/}

          {/*begin::Stats*/}
          <div className="card-p mt-n20 position-relative">
            {/*begin::Row*/}
            <div className="row g-0">

              {/*begin::Col*/}
              <div className="col bg-light-primary px-6 py-8 rounded-2 mb-7">
                {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                <Link className="text-primary fw-bold fs-6" to="/care/witness/search" >
                  <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
                      <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  Search
                </Link>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row g-0">

            </div>
            {/*end::Row*/}
          </div>
          {/*end::Stats*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Mixed Widget 2*/}








    </>
  )
}





export default WitnessCard