import { Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav.jsx';
import HomePage from './components/HomePage.jsx';
import ServicesPage from './components/ServicesPage.jsx';
import PenetrationTestingPage from './components/PenetrationTestingPage.jsx';
import CompliancePage from './components/CompliancePage.jsx';
import SOC2Page from './components/SOC2Page.jsx';
import ISO27001Page from './components/ISO27001Page.jsx';
import NexPage from './components/NexPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import WebApplicationsPage from './components/WebApplicationsPage.jsx';
import MobileApplicationsPage from './components/MobileApplicationsPage.jsx';
import InfrastructurePage from './components/InfrastructurePage.jsx';
import CloudSecurityPage from './components/CloudSecurityPage.jsx';
import SecurityMonitoringPage from './components/SecurityMonitoringPage.jsx';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0F24] font-sans">
      <HeaderNav />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/penetration-testing" element={<PenetrationTestingPage />} />
        <Route path="services/web-applications" element={<WebApplicationsPage />} />
        <Route path="services/mobile-applications" element={<MobileApplicationsPage />} />
        <Route path="services/infrastructure" element={<InfrastructurePage />} />
        <Route path="services/cloud-security" element={<CloudSecurityPage />} />
        <Route path="services/security-monitoring" element={<SecurityMonitoringPage />} />
        <Route path="compliance" element={<CompliancePage />} />
        <Route path="compliance/soc2" element={<SOC2Page />} />
        <Route path="compliance/iso27001" element={<ISO27001Page />} />
        <Route path="nex" element={<NexPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
