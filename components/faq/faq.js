import styles from "./faq.module.css"
import Image from "next/image";
import React from "react";

export default function Faq(){
    return(
        <div className={styles.faq}>
            <div className={styles.main}>
                <div className={styles.mainInfo}>
                    <h1 className={styles.h1}>FAQ</h1>
                    <div className={styles.element}>
                        <div className={styles.question}>
                            <h2 className={styles.h2}>Why use the AR Trails mobile app during hiking?</h2>
                            <Image
                                src="/faq/upicon.png"
                                alt="upicon"
                                width={25.16}
                                height={13.72}
                            />
                        </div>
                        <div className={styles.answer}>
                            <p className={styles.p}>Our mobile app aims to provide the visitor with the necessary&nbsp; information in audio, video, photo and other formats using Augmented Reality (AR). Thus, when hiking on the AR trail,&nbsp; you do not only see the natural and historical-cultural heritage, but also receive useful and fascinating information in audio, video, image, animation, 3D and other formats. In addition, the app allows you to see the virtual track of the trail, which will reduce the likelihood of deviation from the trail. Therefore, it will also contribute to your safety.</p>
                            <p className={styles.p}>Your friends and followers will be able to trace your way and see the marks you left for them.</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <div className={styles.question}>
                            <h2 className={styles.h2}>Why use the AR Trails mobile app during hiking?</h2>
                            <Image
                                src="/faq/downicon.png"
                                alt="upicon"
                                width={25.16}
                                height={13.72}
                            />
                        </div>
                        <div className={styles.answer}></div>
                    </div>
                    <div className={styles.element}>
                        <div className={styles.question}>
                            <h2 className={styles.h2}>Why use the AR Trails mobile app during hiking?</h2>
                            <Image
                                src="/faq/downicon.png"
                                alt="upicon"
                                width={25.16}
                                height={13.72}
                            />
                        </div>
                        <div className={styles.answer}></div>
                    </div>
                    <div className={styles.element}>
                        <div className={styles.question}>
                            <h2 className={styles.h2}>Why use the AR Trails mobile app during hiking?</h2>
                            <Image
                                src="/faq/downicon.png"
                                alt="upicon"
                                width={25.16}
                                height={13.72}
                            />
                        </div>
                        <div className={styles.answer}></div>
                    </div>
                </div>
                <div className={styles.faqImage}>
                    <Image
                        src="/contacts/faqsectionphones.png"
                        alt="phones"
                        width={488}
                        height={702}
                    />
                </div>
            </div>
        </div>
    )
}