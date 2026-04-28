import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SalesConsultancyPage from './SalesConsultancyPage.jsx'
import CaseStudiesPage from './CaseStudiesPage.jsx'
import CaseStudyDetailPage from './CaseStudyDetailPage.jsx'
import ContactPage from './ContactPage.jsx'
import { caseStudiesData } from './data/caseStudiesData'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const isSalesConsultancyPage = pathname === '/sales-consultancy'
const isCaseStudiesPage = pathname === '/case-studies'
const isContactPage = pathname === '/contact'
const caseStudyDetailMatch = pathname.match(/^\/case-studies\/([^/]+)$/)
const caseStudyDetail = caseStudyDetailMatch ? caseStudiesData.find((item) => item.slug === caseStudyDetailMatch[1]) : null

let RootComponent = App
if (isSalesConsultancyPage) RootComponent = SalesConsultancyPage
if (isCaseStudiesPage) RootComponent = CaseStudiesPage
if (isContactPage) RootComponent = ContactPage
if (caseStudyDetailMatch) RootComponent = CaseStudyDetailPage

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent caseStudy={caseStudyDetail} />
  </StrictMode>,
)
