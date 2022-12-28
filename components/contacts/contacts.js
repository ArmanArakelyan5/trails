import styles from "./contacts.module.css"
import Image from "next/image";
import React, {useState} from "react";

export default function Contact(){
    const [workers, setWorkers] = useState([
        {id:101,name:"Tigran Abgaryan",title:"Hiking Guide, “ECOTOUR” LLC",info:"“AR Trails” is an exciting tool to make hiking more catchy. It was a great experience with the AR trail in Artavan. Hikers not only walk, but also explore the surrounding environment, historical monuments, etc. It helps me to overcome language barrier with international visitors",image:{src:"/contacts/man.jpg",alt:"image",width:308,height:308}},
        {id:102,name:"Tigran Abgaryan",title:"Hiking Guide, “ECOTOUR” LLC",info:"“AR Trails” is an exciting tool to make hiking more catchy. It was a great experience with the AR trail in Artavan. Hikers not only walk, but also explore the surrounding environment, historical monuments, etc. It helps me to overcome language barrier with international visitors",image:{src:"/contacts/man.jpg",alt:"image",width:308,height:308}},
        {id:103,name:"Angelina Jolie",title:"Hiking Guide, “ECOTOUR” LLC",info:"LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lore",image:{src:"/contacts/woman.jpg",alt:"image",width: 308,height: 308}},
    ])

    return(
        <div className={styles.contact}>
            <div className={styles.image}>
                <Image
                    src="/contacts/image.jpg"
                    alt="image"
                    width={1920}
                    height={647}
                />
            </div>
            <div className={styles.info}>
                {
                    workers.map((elm)=>{
                        return<div key={elm.id} className={styles.elm}>
                            <div className={styles.elmImage}>
                                <Image
                                    src={elm.image.src}
                                    alt={elm.image.alt}
                                    width={elm.image.width}
                                    height={elm.image.height}
                                />
                            </div>
                            <div className={styles.elmAbout}>
                                <h1 className={styles.elmName}>{elm.name}</h1>
                                <p className={styles.elmTitle}>{elm.title}</p>
                                <hr className={styles.elmHr}/>
                                <p className={styles.elmInfo}>{elm.info}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}