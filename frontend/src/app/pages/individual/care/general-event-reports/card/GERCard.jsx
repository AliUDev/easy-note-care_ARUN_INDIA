import React from 'react'
import { Link } from 'react-router-dom'
import { Graph2 } from '../../../../../../_helper/partials/widgets'

function GERCard() {
  return (
    <>
      {/* <div className="card card-flush h-md-100">
        <div className="card-header">
          <div className="card-title">
            <h2>General Event Reports (GER) </h2>
          </div>
        </div>
        <div className="card-body pt-1">
          <div className="d-flex flex-column text-gray-600">
            <div className="d-flex align-items-center text-hover-primary py-2">
              <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/general-event-report/new">New</Link></div>
            <div className="d-flex align-items-center text-hover-primary py-2">
              <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/general-event-report/search" >Search</Link> </div>
          </div>
        </div>

      </div> */}














         {/*begin::Mixed Widget 3*/}
         <div className="card card-xl-stretch mb-xl-8">
        {/*begin::Beader*/}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder fs-3 mb-1">General Event Report</span>
            {/* <span className="text-muted fw-bold fs-7">Recent sales statistics</span> */}
          </h3>
         
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0 d-flex flex-column">
          {/*begin::Stats*/}
          <div className="card-p pt-5 bg-body flex-grow-1">
            {/*begin::Row*/}
      <div className="row g-0">
        {/*begin::Col*/}
        <div className="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7">
          {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
          <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
              <rect x={8} y={9} width={3} height={10} rx="1.5" fill="black" />
              <rect opacity="0.5" x={13} y={5} width={3} height={14} rx="1.5" fill="black" />
              <rect x={18} y={11} width={3} height={8} rx="1.5" fill="black" />
              <rect x={3} y={13} width={3} height={6} rx="1.5" fill="black" />
            </svg>
          </span>
          {/*end::Svg Icon*/}
          <Link className="text-warning fw-bold fs-6" to="/care/general-event-report/new">New</Link>
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col bg-light-info px-6 py-8 rounded-2 mb-7">
          {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
          <span className="svg-icon svg-icon-3x svg-icon-info d-block my-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
              <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
            </svg>
          </span>
          {/*end::Svg Icon*/}
          <Link to="/care/general-event-report/search" className="text-info fw-bold fs-6">Search</Link>
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
             
            
          
          </div>
          {/*end::Stats*/}
          {/*begin::Chart*/}
          <Graph2
          chartHeight='150px'
          chartColor='info'
          />
          {/*end::Chart*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Mixed Widget 3*/}




    </>
  )
}

export default GERCard