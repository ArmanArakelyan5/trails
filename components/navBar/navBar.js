import styles from "./navBar.module.css"
import Image from "next/image";
export default function NavBar(){
    return(
        <div className={styles.nav}>
            <div className={styles.image}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={230}
                    height={39}
                    priority
                />
            </div>
            <div className={styles.list}>
                <ul>
                    <li>About App</li>
                    <li>About Studio</li>
                    <li>What We Do</li>
                    <li>Our Trails</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
    )
}