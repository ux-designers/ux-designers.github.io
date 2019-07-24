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
          <Job
            joblink="https://jobs.sap.com/job/WalldorfSt_-Leon-Rot-User-Experience-Designer-%28InternshipWorking-Student%29-Job-BW/534251601/"
            jobtitle="User Experience Designer (Internship/Working Student) Job​​"
          />
        </div>
        <div className="JobSection">
          <h6>code.</h6>
          {/* <Job
            joblink="https://jobs.sap.com/job/WalldorfSt_-Leon-Rot-%28Associate%29-Full-Stack-Developer-%28mf%29-%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B%E2%80%8B-BW/522852101/?locale=de_DE"
            jobtitle="Associate Full-Stack Developer (m/f)​​​​​"
          />
          <Job
            joblink="https://performancemanager5.successfactors.eu/sf/jobreq?jobId=214176&company=SAP&username&_s.crb=cTSjSf2eRwLPIV1nEqRaOS7P9NE%253d"
            jobtitle="Associate Architect (m/f)"
          /> */}
          <p>- Currently no vacancy available. -</p>
        </div>
      </div>
    )
  }
}

export default Jobs
