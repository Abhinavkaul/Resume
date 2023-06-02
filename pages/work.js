import Toolbar from "./toolbar";
import styles from "../styles/Work.module.css";

function Work() {
  return (
    <div>
      <Toolbar />
      <h1>Work Experince</h1>
      <div className={styles.upper}>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;Autodesk Construction Cloud</h3>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MLOps Intern</h5>
        <ul>
          <li>Set up centralized code pipelines for CI/CD using Jenkins and Jenkins Shared Libraries to automate the build,
            test, and deployment process of software applications.</li>
          <li>Containerized Python applications with Docker to facilitate the deployment and scalability of software
            applications across different environments.</li>
          <li>Integrated several machine learning models with a testing framework to automate the process of testing. This
            helped to improve the quality and reliability of the software applications.</li>
          <li>Released the new version of the testing framework, which included several new features and improvements to
            enhance the overall testing process.</li>
          <li>Worked on resolving several defects and incidents from product teams, which involved analyzing and
            troubleshooting the issues, collaborating with the development teams to identify and fix the root cause of the
            problem, and testing the fixes to ensure that they were effective.</li>
        </ul>
      </div>
      <br></br>
      <h1>Achievements & Volunteer Experience</h1>
      <div className={styles.lower}>
        <ul>
          <li>Completed 30 Days of GOOGLE CLOUD PROGRAM 2020.</li>
          <li>Management Team Executive at Virtual BAJA SAEINDIA 2021</li>
        </ul>
      </div>
    </div>
  );
}
export default Work;
