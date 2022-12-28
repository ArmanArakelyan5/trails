import styles from "./ourtrails.module.css"
import React, {useState} from "react";
import Image from "next/image";
export default function OurTrails(){
    const [trails, setTrails] = useState([
        {id:101, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
        {id:102, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
        {id:103, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
        {id:104, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
        {id:105, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
        {id:106, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
        {id:107, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
        {id:108, name:"Lorem ipsum...", logo:{src:"/ourtrails/logo.png",alt:"Logo",width:63.78,height:75.73},image:{src:"/ourtrails/2.jpg",alt:"Image",width:450,height:350},},
    ])

    return(
        <div className={styles.ourTrails}>
            <h1 className={styles.h1}>Our Trails</h1>
            <div className={styles.main}>
                {
                    trails.map((elm)=>{
                        return<div key={elm.id} className={styles.elm}>
                            <Image
                                src={elm.image.src}
                                alt={elm.image.alt}
                                width={elm.image.width}
                                height={elm.image.height}
                            />
                            <div className={styles.elmLogo}>
                                <Image
                                    src={elm.logo.src}
                                    alt={elm.logo.alt}
                                    width={elm.logo.width}
                                    height={elm.logo.height}
                                />
                            </div>
                            <div className={styles.elmInfo}><p className={styles.elmP}>{elm.name}</p></div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}