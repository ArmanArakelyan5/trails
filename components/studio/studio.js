import styles from "./studio.module.css"
import Image from "next/image";
export default function Studio(){
    return(
        <div className={styles.studio}>
            <div className={styles.fon}>
                <Image
                    src="/2ndSection.png"
                    alt="2ndSection"
                    className={styles.secondsection}
                    width={1920}
                    height={1028}
                />
            </div>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h1 className={styles.textH1}>AR Trails Creator's Studio</h1>
                    <p className={styles.textP}>AR Trails is an augmented reality platform for travel. It transform any location into an attraction! AR Trails is the perfect way to make an area more attractive, interactive and interesting.
                    </p>
                    <h2 className={styles.textH2}>Join our community of Travel content creators!
                    </h2>

                </div>
            </div>
            <div className={styles.btn}>
                <div className={styles.btnImg}>
                    <Image
                        src="/Group3051.png"
                        alt="button"
                        width={246}
                        height={57}
                    />
                    <div className={styles.btnText}>Explore Now</div>
                </div>
            </div>
            <div className={styles.phones}>
                <Image
                    src="/phonesforstudio.png"
                    alt="phones"
                    width={407.23}
                    height={553}
                />
            </div>
            <div className={styles.laptop}>
                <Image
                    src="/laptop.png"
                    alt="laptop"
                    width={1029}
                    height={687}
                />
            </div>
        </div>
    )
}