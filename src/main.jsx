import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { MarketingPage } from '@/pages/MarketingPage'

const root = document.getElementById('root')
// Each HTML entry sets data-page; index.html has none and renders the home page.
const pages = { projects: ProjectsPage, marketing: MarketingPage }
const Page = pages[root.dataset.page] ?? App

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
