import React from 'react'
import { Link } from 'react-router-dom'
import { Graph1 } from '../../../../../../_helper/partials/widgets'

function GlobalTemplateLibraryCard() {


  return (
    <>
      {/* <div className="card card-flush h-md-100">
                <div className="card-header">
                  <div className="card-title">

                    <h2>Global Template Library</h2>
                  </div>
                </div>

                <div className="card-body pt-1">

                  <div className="d-flex flex-column text-gray-600">
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/global-template-library/search-isp-template">Search ISP Template</Link>
                    </div>
                  </div>
                </div>

              </div> */}



























      {/*begin::Mixed Widget 2*/}
      <div className="card card-xl-stretch mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-warning py-5">
          <h3 className="card-title fw-bolder text-white">Global Template Liabrary</h3>

        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          {/*begin::Chart*/}
          {/* <div className="mixed-widget-2-chart card-rounded-bottom bg-warning" data-kt-color="warning" style={{ height: '200px' }} /> */}

          <Graph1
            chartColor='warning'
            chartHeight='200px'
            strokeColor='#ffffff'
            chartData={[30, 45, 32, 70, 40, 40, 40]}
          />
          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div className="card-p mt-n20 position-relative">
            {/*begin::Row*/}
            <div className="row g-0">
              {/*begin::Col*/}
              <div className="col bg-light-warning px-6 py-8 rounded-2 mb-7">
                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                <Link className="text-warning fw-bold fs-6" to="/care/global-template-library/search-isp-template" >
                  <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <rect x={8} y={9} width={3} height={10} rx="1.5" fill="black" />
                      <rect opacity="0.5" x={13} y={5} width={3} height={14} rx="1.5" fill="black" />
                      <rect x={18} y={11} width={3} height={8} rx="1.5" fill="black" />
                      <rect x={3} y={13} width={3} height={6} rx="1.5" fill="black" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  Search ISP Template
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



export default GlobalTemplateLibraryCard