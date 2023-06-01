import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

function Toolbar() {
  const router = useRouter();
  return (
    <nav className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/education")}>Education</div>
      <div onClick={() => router.push("/work")}>Work Experince</div>
      <div onClick={() => (window.location.href = "https://www.linkedin.com/in/abhinavkaul26/")}>LinkdIn</div>
      <div onClick={() => (window.location.href = "https://github.com/Abhinavkaul")}>Github</div>
    </nav>
  );
}
export default Toolbar;
