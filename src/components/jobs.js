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
     <p>- Currently no vacancy available. -</p>
          {/*<Job
            joblink="https://jobs.sap.com/job/Walldorf-Intern-Working-Student-%28fmd%29-UIUX-Designer-BW/636723401/?locale=de_DE"
            jobtitle="User Experience Designer – Intern/Working Student (f/m/d)​​"
          /> */}
        </div> 


        <div className="JobSection">
          <h6>code.</h6>
         {/* {<Job
            joblink="https://jobs.sap.com/job/Walldorf-DevOps-Engineer-%28fmd%29-for-Cumulus-Team-BW-69190/639204001/?locale=de_DE"
            jobtitle="Full Stack Developer (f/m/d) for PPMS Team​​​​​"
         />*/}
         
          <p>- Currently no vacancy available. -</p> 
    </div>
      </div>
    )
  }
}

export default Jobs
