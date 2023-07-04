import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import Care from '../pages/individual/care/Care'
import { MenuTestPage } from '../pages/MenuTestPage'
import MyPage from '../pages/myPage/MyPage'
import GERIndex from '../pages/individual/care/general-event-reports/GERIndex'
import GERResolutionIndex from '../pages/individual/care/ger-resolution/GERResolutionIndex'
import WitnessIndex from '../pages/individual/care/witness/WitnessIndex'
import EventSummariesIndex from '../pages/individual/care/event-summaries/EventSummariesIndex'
import IndividualDemographicsIndex from '../pages/individual/care/individual-demographics/IndividualDemographicsIndex'
import GlobalTemplateLibraryIndex from '../pages/individual/care/global-template-library/GlobalTemplateLibraryIndex'
import IndividualMedicalInformationIndex from '../pages/individual/care/individual-medical-information/IndividualMedicalInformationIndex'
import ISPDataIndex from '../pages/individual/care/isp-data/ISPDataIndex'
import ISPProgramIndex from '../pages/individual/care/isp-program/ISPProgramIndex'
import ISPProgramTemplateLiabraryIndex from '../pages/individual/care/isp-program-template-liabrary/ISPProgramTemplateLiabraryIndex'
import ConsentAndAuthorizationIndex from '../pages/individual/care/consent-and-authorization/ConsentAndAuthorizationIndex'
import IPOPGeneralInformationIndex from '../pages/individual/care/ipop-general-information/IPOPGeneralInformationIndex'
import IPOPResidentialInformationIndex from '../pages/individual/care/ipop-residential-information/IPOPResidentialInformationIndex'
import IPOPDayProgramIndex from '../pages/individual/care/ipop-day-program/IPOPDayProgramIndex'
import IPOPSupportedEmploymentIndex from '../pages/individual/care/ipop-supported-employment/IPOPSupportedEmploymentIndex'
import IPOPWorkCenterIndex from '../pages/individual/care/ipop-work-center/IPOPWorkCenterIndex'
import IPOPIndividualizedServicesIndex from '../pages/individual/care/ipop-individualized-services/IPOPIndividualizedServicesIndex'
import AgencyWideDocumentStorage from '../pages/agency/agency-wide-document-storage/AgencyWideDocumentStorage'
import QuestionnaireForms from '../pages/agency/questionnaire-forms/QuestionnaireForms'
import DocumentStorageIndex from '../pages/agency/agency-wide-document-storage/document-storage/DocumentStorageIndex'
import StaffVisitorLogIndex from '../pages/agency/questionnaire-forms/staff-visitor-log/StaffVisitorLogIndex'
import AttendanceCard from '../pages/billing/attendance/AttendanceCard'
import AttendanceIndex from '../pages/billing/attendance/attendance/AttendanceIndex'
import ProfessionalClaimIndex from '../pages/billing/professional-claim/ProfessionalClaimIndex'
import ServiceAuthorizationIndex from '../pages/billing/professional-claim/service-authorization/ServiceAuthorizationIndex'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path="/mypage" component={MyPage} />


        <Route path="/individual/care" component={Care} />
        <Route path="/care/general-event-report" component={GERIndex} />
        <Route path="/care/ger-resolution" component={GERResolutionIndex} />
        <Route path="/care/witness" component={WitnessIndex} />
        <Route path="/care/event-summaries" component={EventSummariesIndex} />
        <Route path="/care/isp-data" component={ISPDataIndex} />
        <Route path="/care/isp-program" component={ISPProgramIndex} />
        <Route path="/care/isp-program-template-liabrary" component={ISPProgramTemplateLiabraryIndex} />
        <Route path="/care/global-template-library" component={GlobalTemplateLibraryIndex} />
        <Route path="/care/individual-demographics" component={IndividualDemographicsIndex} />
        <Route path="/care/individual-medical-information" component={IndividualMedicalInformationIndex} />
        <Route path="/care/consent-and-authorization" component={ConsentAndAuthorizationIndex} />
        <Route path="/care/ipop-general-information" component={IPOPGeneralInformationIndex} />
        <Route path="/care/ipop-residential-information" component={IPOPResidentialInformationIndex} />
        <Route path="/care/ipop-day-program" component={IPOPDayProgramIndex} />
        <Route path="/care/ipop-supported-employment" component={IPOPSupportedEmploymentIndex} />
        <Route path="/care/ipop-work-center" component={IPOPWorkCenterIndex} />
        <Route path="/care/ipop-individualized-services" component={IPOPIndividualizedServicesIndex} />

        <Route path="/agency/agency-wide-document-storage" component={AgencyWideDocumentStorage} />
        <Route path="/agency-wide-document-storage/document-storage" component={DocumentStorageIndex} />

        <Route path="/agency/questionnaire-forms" component={QuestionnaireForms} />
        <Route path="/questionnaire-forms/staff-visitor-log" component={StaffVisitorLogIndex}/>

        <Route path="/billing/attendance" component={AttendanceCard} />
        <Route path="/billing/attendance-card/attendance" component={AttendanceIndex} />

        <Route path="/billing/professional-claim" component={ProfessionalClaimIndex} />
        <Route path="/professional-claim/service-authorization/new" component={ServiceAuthorizationIndex} />
        

        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
