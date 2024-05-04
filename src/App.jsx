import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Partner from './components/Partner'
import Services from './components/Services'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import DigitalMarketing from './services-comp/DigitalMarketing'
import ContentCreator from './services-comp/ContentCreator'
import BrandMarketing from './services-comp/BrandMarketing'
import EmailMarketing from './services-comp/EmailMarketing'
import Fiver from './services-comp/Fiver'
import GoogleAds from './services-comp/GoogleAds'
import OurTeam from './services-comp/OurTeam'
import Popular from './services-comp/Popular'
import Youtube from './services-comp/Youtube'
import UpWork from './services-comp/UpWork'

// DASHBOARD IMPORTS
import NavbarDB from '../src/dashboard/NavbarDB'
import DashBoardMain from '../src/dashboard/DashBoardMain'
import DashBoardServices from '../src/dashboard/DashBoardServices'
import AddNewServices from '../src/dashboard/AddNewServices'
import ServicesList from '../src/dashboard/ServicesList'
import LoginDB from '../src/dashboard/LoginDB'
import RegisterDB from '../src/dashboard/RegisterDB'
import ForgotPasswordDB from '../src/dashboard/ForgotPasswordDB'



const App = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const handleButtonClick = () => {
    setShowNavbar(!showNavbar);
    setShowFooter(!showFooter);
  };


  return (
    <Router>
      {showNavbar ? <Navbar handleButtonClick={handleButtonClick}/> : <NavbarDB handleButtonClick={handleButtonClick}/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/services/digitalmarketing' element={<DigitalMarketing />} />
        <Route path='/services/contentcreator' element={<ContentCreator />} />
        <Route path='/services/brandmarketing' element={<BrandMarketing />} />
        <Route path='/services/emailmarketing' element={<EmailMarketing />} />
        <Route path='/services/fiver' element={<Fiver />} />
        <Route path='/services/googleads' element={<GoogleAds />} />
        <Route path='/services/ourteam' element={<OurTeam />} />
        <Route path='/services/popular' element={<Popular />} />
        <Route path='/services/youtube' element={<Youtube />} />
        <Route path='/services/upwork' element={<UpWork />} />

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<DashBoardMain />} />
        <Route path="/dashboard-services" element={<DashBoardServices />} />
        <Route path="/dashboard-add-new-services" element={<AddNewServices />} />
        <Route path="/dashboard-services-list" element={<ServicesList />} />
        <Route path="/dashboard-login" element={<LoginDB />} />
        <Route path="/dashboard-register" element={<RegisterDB />} />
        <Route path="/dashboard-forgot-password" element={<ForgotPasswordDB />} />
      </Routes>
      {showFooter && <Footer />}
    </Router>


  )
}

export default App