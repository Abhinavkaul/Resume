import Toolbar from "./toolbar";
import styles from "../styles/Education.module.css";

function Education() {
  return (
    <>
      <Toolbar />
      <h1>Education</h1>
      <div className={styles.main}>
        <div>
          <h2>Class 10th</h2>
          <h3>School : B.B.M.B D.A.V Public School Talwara</h3>
          <h4>Marks : 9.2 CGPA</h4>
          <h5>Passing Year : 2016</h5>
        </div>

        <div>
          <h2>Class 12th</h2>
          <h3>School : B.B.M.B D.A.V Public School Talwara</h3>
          <h4>Marks : 75%</h4>
          <h5>Passing Year : 2018</h5>
        </div>

        <div>
          <h2>Graduation</h2>
          <h3>College : Chitkara University Rajpura, Punjab</h3>
          <h4>Marks : 9.95 CGPA</h4>
          <h5>Passing Year : 2023</h5>
        </div>
      </div>

      <h1>Projects</h1>
      <div className={styles.projects}>
        <div>
          <h3 onClick={() => (window.location.href = "https://github.com/Abhinavkaul/duplicate-question-pairs")}>&nbsp;&nbsp;&nbsp;&nbsp;Duplicate Question Pairs NLP Project</h3>
          <ul>
            <li>Predicting whether a pair of questions that are already asked are duplicate or not. In the dataset using Natural
              Language Processing and Random Forest Classifier</li>
            <li>Also created a Dockerfile and Makefile to test the project on a local system by executing a single command.
            </li>
          </ul>
        </div>

        <div>
          <h3 onClick={() => (window.location.href = "https://github.com/Abhinavkaul/Suicidal_thoughts_detection_model")}>&nbsp;&nbsp;&nbsp;&nbsp;Suicidal Thought Detection</h3>
          <ul>
            <li>Predicting whether given statement is showing suicidal thought or not. In the dataset using Natural
              Language Processing</li>
            <li>Also created a Dockerfile and Makefile to test the project on a local system by executing a single command.
            </li>
          </ul>
        </div>

        <div>
          <h3 onClick={() => (window.location.href = "https://legendary-gnome-47cd05.netlify.app/")}>&nbsp;&nbsp;&nbsp;&nbsp;To-Do-List App</h3>
          <ul>
            <li>Genral to-do-list app using react js</li>
            <li>Added features like edit, delete, move up and down, and done</li>
          </ul>
        </div>

        <div>
          <h3 onClick={() => (window.location.href = "https://amazing-choux-814659.netlify.app/")}>&nbsp;&nbsp;&nbsp;&nbsp;Weather-App</h3>
          <ul>
            <li>Genral weather app using react js and axios</li>
            <li>Gives weather of entered location</li>
          </ul>
        </div>

      </div>
    </>
  );
}
export default Education;
