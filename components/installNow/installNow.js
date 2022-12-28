import styles from "./installNow.module.css"
import Image from "next/image";
export default function InstallNow (){
    return(
        <div className={styles.installNow}>
            <Image
                src="/installNow/background.jpg"
                alt="background"
                width={1920}
                height={498}
            />
            <div className={styles.main}>
                <h1 className={styles.h1}>Revolutionize your travel experience with AR Trails. Experience <br/>trails around the world, enriched with visual, audio and 3D content.</h1>
                <h2 className={styles.h2}>Install AR Trails now</h2>
                <div className={styles.downloade}>
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
    )
}