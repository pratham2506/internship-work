import CallToActions from '@/components/job-listing-pages/components/CallToActions'
import FilterJobBox from './FilterJobBox'
import FooterDefault from "../footer/common-footer";
import LoginPopup from "../common/form/login/LoginPopup";
import DefaulHeader2 from "../header/DefaulHeader2";
import MobileMenu from "../header/MobileMenu";


export default function JobFind() {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

     
      {/* <Findjob/> */}
      {/* <FinderJobs/> */}
      <section className="page-title">
        <div className="auto-container">
          <div className="title-outer">
            <h1>Find Jobs</h1>
            <ul className='page-breadcrumb'>
              <li><a href="/">Home</a></li>
              <li>Jobs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ls-section">
        <div className="auto-container">

      <FilterJobBox/>

        </div>
      </section>
      <section className="call-to-action">
        <div className="auto-container">
          <CallToActions/>
        </div>
      </section>

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  )
}
