import styles from "./offers.module.css"
import Image from "next/image";
export default function Offers(){
    return(
        <div className={styles.offers}>
            <div className={styles.back}>
                <div className={styles.main}>
                    <div className={styles.left}>
                        <div className={styles.list}>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/1.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Find trip ideas from the trails list</h1>
                                <p className={styles.p}>From natural to cultural trips, we have various trips for any interest</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/2.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Find nearest trails around you</h1>
                                <p className={styles.p}>Find nearest trails around you and discover your own country in a new way.</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/3.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Find trails according to the destination</h1>
                                <p className={styles.p}>Find trails in your travel destination to discover any place on its fullest.</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/4.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Filter and choose trails according to your interests</h1>
                                <p className={styles.p}>Find experiences according to your interests, discover cultural, historical, natural, hiking, city, adventure and other trips!</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/5.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>View trails online or download to use offline</h1>
                                <p className={styles.p}>Just download chosen trail beforehand and enjoy your trip. Our trails work offline!</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.phone}>
                        <Image
                            src="/offersImg/phone.png"
                            alt="phone"
                            width={348}
                            height={712}
                        />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.list}>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Use navigation/map​ of the trail</h1>
                                <p className={styles.p}>See whole journey that the trail offers and use map to navigate during the trip.</p>
                            </div>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/6.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Enjoy informative, fun and educational content</h1>
                                <p className={styles.p}>Visit the most interesting places and experiences the best adventures with coolest content and trips from AR Trails.</p>
                            </div>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/7.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Get location-based information</h1>
                                <p className={styles.p}>Get all the information you need about the location, via videos, audios, photos and 3D figures integrated on each trail.</p>
                            </div>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/8.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Enjoy visual and audio content</h1>
                                <p className={styles.p}>See visual and audio content, including avatars of famous people, audio content talking about that place, fun 3D figures and historical photos.</p>
                            </div>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/9.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.text}>
                                <h1 className={styles.h1}>Take fun photos and videos with 3D characters​</h1>
                                <p className={styles.p}>Take fun photos and videos with 3D figures to keep the best memories from the trip and share them on your social media or with friends.</p>
                            </div>
                            <div className={styles.icon}>
                                <Image
                                    src="/offersImg/10.png"
                                    alt="icon"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={styles.fon}></div>*/}
        </div>
    )
}