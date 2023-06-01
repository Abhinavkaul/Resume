import Toolbar from "./toolbar";
import Image from 'next/image';
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Toolbar />
      <div className={styles.main}>
        <div>
          <h1>Abhinav Kaul</h1>
          <h4>Email : abhinavkaul10032000@gmail.com</h4>
          <h4>Phone Number : +91-6283237653</h4>
          <p className={styles.para}> Experienced MLOps Engineer and Data Science Enthusiast with proficiency in Python, machine learning, automation, and programming. Skilled in developing and deploying complex ML models, automating workflows, and collaborating with cross-functional teams to achieve business objectives. Well-versed in software engineering best practices, including version control, testing, and CI/CD. With strong analytical skills, I excel in analyzing complex datasets and extracting valuable insights to drive data-informed decision-making and optimize strategies. Additionally, I have knowledge of HTML, CSS, JavaScript, React, and Next.js for web development. I possess a proven track record in delivering impactful solutions and optimizing processes. Passionate about leveraging my expertise in MLOps, data science, and automation to drive innovation and create tangible value for organizations. A proactive problem solver, I thrive in challenging environments, and my collaborative nature enables effective alignment of technical and business requirements. </p>
        </div>
        <div><Image src="/me.jpg" width={250} height={300} /></div>
      </div>

      <div className={styles.skillscores}>
        <h2>Skills and Cores</h2>
        <div className={styles.skillsdiv}>
          <div>
            <p>Languages</p>
            <p>Developer Tools</p>
            <p>DevOps/MLOps</p>
            <p>Web Dev</p>
            <p>Libraries</p>
            <p>Data Sceince</p>
          </div>
          <div>
            <p>Python, C/C++</p>
            <p>VS Code, Git</p>
            <p> Docker, Jenkins, Kubernetes, AWS, Terraform</p>
            <p>HTML, CSS, JavaScript, React, Next</p>
            <p>NumPy, Pandas, Matplotlib, Streamlit</p>
            <p>ML, NLP, Ensemble Learning, Hyper Parameter Tuning</p>
          </div>
          <div><Image src="/skills.png" width={250} height={300} /></div>
        </div>
        
      </div>
    </>
  );
}
export default Home;
