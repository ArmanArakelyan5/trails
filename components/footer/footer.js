import styles from "./footer.module.css"
import Image from "next/image";

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.logoandnav}>
                        <div className={styles.logo}>
                            <Image
                                src="/footer/artrailslogo.png"
                                alt="logo"
                                width={114.16}
                                height={112.39}
                            />
                        </div>
                        <div className={styles.nav}>
                            <p>Our Team</p>
                            <p>FAQ</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className={styles.downloade}>
                        <div className={styles.googleplay}>
                            <Image
                                src="/googleplay.png"
                                alt="googleplay"
                                width={162}
                                height={47}
                            />
                        </div>
                        <div>
                            <Image
                                src="/appstore.png"
                                alt="appstore"
                                width={162}
                                height={47}
                            />
                        </div>
                    </div>
                </div>

                <hr/>

                <div className={styles.bottom}>
                    <p className={styles.p1}>Powered By X-TECH and AR Trip CJSC</p>
                    <div>
                        <p className={styles.p2}>Terms of Use </p><span>|</span><p className={styles.p3}> Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}