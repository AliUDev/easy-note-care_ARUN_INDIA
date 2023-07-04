import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ServiceAuthorizationHeader from './ServiceAuthorizationHeader'
import AppliedRateHistorySearch from './applied-rate-history-search/AppliedRateHistorySearch'
import Archive from './archive/Archive'
import New from './new/New'
import RenewalSearch from './renewal-search/RenewalSearch'
import Search from './search/Search'

function ServiceAuthorizationIndex() {
  return (
    <div>
      <ServiceAuthorizationHeader/>
      <Switch>
        <Route to="/billing/professional-claim/service-authorization/applied-rate-history-search" >
          <AppliedRateHistorySearch/>
        </Route>
        <Route to="/professional-claim/service-authorization/archive">
          <Archive/>
        </Route>
        <Route to="/professional-claim/service-authorization/new">
          <New/>
        </Route>
        <Route to="/professional-claim/service-authorization/renewal-search">
          <RenewalSearch/>
        </Route>
        <Route to="/professional-claim/service-authorization/search">
          <Search/>
        </Route>
        <Redirect from='/professional-claim/service-authorization' exact={true} to='/professional-claim/service-authorization/applied-rate-history-search' />
        <Redirect to='/professional-claim/service-authorization/applied-rate-history-search' />
      </Switch>
    </div>
  )
}

export default ServiceAuthorizationIndex