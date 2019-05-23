<h1 align="center">
  Tools Team Website
</h1>

Welcome to the new built Tools Team Website. Here are some documentations to help you edit the website.

## 😎 Edit Tools Portfolio

1.  **Create a new page.**

    Copy the code template from portfolio.js file. Replace the content with your content.

1.  **Link the tool.**

    Link your tool page to the index in the tools.js component. Use the format of tool component below.

    ```
    <Tool
          class="Tool STN"
          link="/stn"
          title="SAP Transformation Navigator"
          logo={require("../images/stn.svg")}
          image={require("../images/stn.png")}
        />
    ```

## 📖 Edit Blogs

1.  **Link the blog.**

    Link your the medium blog link to the site in the blogs.js component. Use the format of blog below. Please only show 3 blog tiles at one time to make sure the consistency of the design.

    ```
    <Blog
          bloglink="https://medium.com/sap-tools/continuous-design-thinking-9a7c2530f6e0"
          blogimage={require("../images/offset_comp_744573@2x.png")}
          blogtitle="Continuous Design Thinking"
          excerpt="Our process for staying human-centered, no matter what!"
        />
    ```

## 💼 Edit Job Postings

1.  **Link the job posting.**

    Link your the job link to the site in the jobs.js component. Use the format of blog below. Make sure the job post are inside the right job category (design or code).

    ```
    <Job
            joblink="https://performancemanager5.successfactors.eu/sf/jobreq?jobId=214176&company=SAP&username&_s.crb=cTSjSf2eRwLPIV1nEqRaOS7P9NE%253d"
            jobtitle="Associate Architect (m/f)"
          />
    ```
