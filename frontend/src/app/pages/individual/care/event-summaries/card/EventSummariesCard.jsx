import React from 'react'
import { Link } from 'react-router-dom'
import { Graph1 } from '../../../../../../_helper/partials/widgets'

function EventSummariesCard() {

  return (
    <>
      {/* <div className="card card-flush h-md-100">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Event Summaries</h2>
                  </div>
                </div>

                <div className="card-body pt-1">

                  <div className="d-flex flex-column text-gray-600">
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/event-summaries/view">View</Link></div>
  
                  </div>
                </div>

              </div>
 */}









      {/*begin::Mixed Widget 2*/}
      <div className="card card-xl-stretch mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-danger py-5">
          <h3 className="card-title fw-bolder text-white">Event Summaries</h3>

        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          {/*begin::Chart*/}
          {/* <div className="mixed-widget-2-chart card-rounded-bottom bg-danger" data-kt-color="danger" style={{height: '200px'}} /> */}
          <Graph1
            chartColor='danger'
            chartHeight='200px'
            strokeColor='#cb1e46'
            chartData={[75, 30, 50, 30, 45, 40, 50]}
          />
          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div className="card-p mt-n20 position-relative">
            {/*begin::Row*/}
            
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row g-0">
              {/*begin::Col*/}
              <div className="col bg-light-danger px-6 py-8 rounded-2 mb-7">
                <Link class="text-danger fw-bold fs-6 mt-2" to="/care/event-summaries/view">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
                      <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
                    </svg>
                  </span>
                  View
                </Link>
              </div>
              {/*end::Col*/}

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


export default EventSummariesCard