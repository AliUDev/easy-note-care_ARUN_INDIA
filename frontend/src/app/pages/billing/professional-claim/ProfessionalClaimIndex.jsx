import React from 'react'
import ServiceAuthorizationCard from './service-authorization/card/ServiceAuthorizationCard'

function ProfessionalClaimIndex() {
  return (
    <div>
         {/*begin::Post*/}
      <div className="post d-flex flex-column-fluid" id="kt_post">
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-xxl">
          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">


          <div className="col-md-6">
              <ServiceAuthorizationCard/>
        </div>






          </div>
          </div>
          </div>

    </div>
  )
}

export default ProfessionalClaimIndex