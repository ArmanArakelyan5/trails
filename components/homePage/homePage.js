import styles from "./homePage.module.css"
import NavBar from "../navBar/navBar";
import AboutApp from "../aboutApp/aboutApp";
export default function HomePage(){
    return(
        <div className={styles.homePage}>
            <NavBar/>
            <AboutApp/>
        </div>
    )
}