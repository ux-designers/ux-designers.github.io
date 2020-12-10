import React from "react"
import Job from "../components/job"

class Jobs extends React.Component {
  render() {
    return (
      <div className="Jobs">
        <p>
          Take a look to see if there’s a{" "}
          <b>
            <u>fit for you.</u>
          </b>
        </p>

        <div className="JobSection">
          <h6>design.</h6>
     {/*<p>- Currently no vacancy available. -</p>*/}
          <Job
            joblink="https://jobs.sap.com/job/Walldorf-Intern-Working-Student-%28fmd%29-UIUX-Designer-BW/636723401/?locale=de_DE"
            jobtitle="Intern / Working Student – User Experience Designer (f/m/d)​​"
          /> 
        </div>


        <div className="JobSection">
          <h6>code.</h6>
          {/*<Job
            joblink="https://performancemanager5.successfactors.eu/acme?bplte_company=SAP&fbacme_n=recruiting&recruiting%5fns=joblisting%20detail&itrModule=rcm&recruiting_mode=266576&selected_lang=en_US&jobAlertController_jobAlertId=&jobAlertController_jobAlertName=&_s.crb=X1iWGt%2fHquPC0Xyq8LL1FB31cNi%2fA4fzvApjj%2fh4lrc%3d"
            jobtitle="Progressive Delivery (Senior) Developer (f/m/d)​​​​​"
          />
          <Job
            joblink="https://performancemanager5.successfactors.eu/acme?bplte_company=SAP&fbacme_n=recruiting&recruiting%5fns=joblisting%20detail&itrModule=rcm&recruiting_mode=266581&selected_lang=en_US&jobAlertController_jobAlertId=&jobAlertController_jobAlertName=&_s.crb=X1iWGt%2fHquPC0Xyq8LL1FB31cNi%2fA4fzvApjj%2fh4lrc%3d"
            jobtitle="CI/CD Full Stack Developer (f/m/d)​​​​​"
          />
          <Job
            joblink="https://performancemanager5.successfactors.eu/acme?bplte_company=SAP&fbacme_n=recruiting&recruiting%5fns=joblisting%20detail&itrModule=rcm&recruiting_mode=266575&selected_lang=en_US&jobAlertController_jobAlertId=&jobAlertController_jobAlertName=&_s.crb=X1iWGt%2fHquPC0Xyq8LL1FB31cNi%2fA4fzvApjj%2fh4lrc%3d"
            jobtitle="CI/CD Full Stack (Senior) Developer (f/m/d)"
          /> 
          <Job
            joblink="https://performancemanager5.successfactors.eu/acme?bplte_company=SAP&fbacme_n=recruiting&recruiting%5fns=joblisting%20detail&itrModule=rcm&recruiting_mode=270142&selected_lang=en_US&jobAlertController_jobAlertId=&jobAlertController_jobAlertName=&_s.crb=X1iWGt%2fHquPC0Xyq8LL1FB31cNi%2fA4fzvApjj%2fh4lrc%3d"
            jobtitle="Full Stack Developer (f/m/d)"
          /> 
          <Job
            joblink="https://performancemanager5.successfactors.eu/acme?bplte_company=SAP&fbacme_n=recruiting&recruiting%5fns=joblisting%20detail&itrModule=rcm&recruiting_mode=266783&selected_lang=en_US&jobAlertController_jobAlertId=&jobAlertController_jobAlertName=&_s.crb=X1iWGt%2fHquPC0Xyq8LL1FB31cNi%2fA4fzvApjj%2fh4lrc%3d"
            jobtitle="Full Stack Developer (f/m/d)"
          /> 
          <Job
            joblink="https://performancemanager5.successfactors.eu/acme?bplte_company=SAP&fbacme_n=recruiting&recruiting%5fns=joblisting%20detail&itrModule=rcm&recruiting_mode=266785&selected_lang=en_US&jobAlertController_jobAlertId=&jobAlertController_jobAlertName=&_s.crb=X1iWGt%2fHquPC0Xyq8LL1FB31cNi%2fA4fzvApjj%2fh4lrc%3d"
            jobtitle="Full Stack Developer (f/m/d)"
          /> */}
          <p>- Currently no vacancy available. -</p>
    </div>
      </div>
    )
  }
}

export default Jobs
