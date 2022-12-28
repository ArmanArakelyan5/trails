import styles from "./aboutApp.module.css"
import Image from "next/image";
export default function AboutApp(){
    return(
        <div className={styles.aboutApp}>
            <div className={styles.image}>
                <Image
                    src="/logoforhome.png"
                    alt="logoforhome"
                    width={1309.62}
                    height={1027.43}
                />
            </div>
            <div className={styles.main}>
                <div>
                    <Image
                        src="/phones.png"
                        alt="phones"
                        width={620}
                        height={651}
                    />
                </div>
                <div className={styles.mainText}>
                    <div className={styles.title}>
                        AR Trails - Let’s make your journey much more exciting with augmented reality
                    </div>
                    <div className={styles.paragraph}>
                        AR Trails is an app for adventurous travelers, where each one can find trails to chaise in any location of the world, according to interests and the destination one takes! <br/><br/> Choose and download trails for various travel experiences, from city walks, and hiking routes, to adventure and cultural trips!
                    </div>
                    <div className={styles.paragraph2}>
                        Trails will become your best travel buddy and the only guide you need!
                    </div>
                    <div className={styles.downloade}>
                        <div className={styles.dwnTitle}>Download the app
                        </div>
                        <div className={styles.icons}>
                            <div className={styles.googleplay}>
                                <Image
                                    src="/googleplay.png"
                                    alt="googleplay"
                                    width={217.61}
                                    height={64.05}
                                />
                            </div>
                            <div>
                                <Image
                                    src="/appstore.png"
                                    alt="appstore"
                                    width={217.61}
                                    height={64.05}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}