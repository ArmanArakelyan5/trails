import styles from "./partners.module.css"
import Image from "next/image";
import React, {useState} from "react";

export default function Partners(){
    const [partners, setPartners] = useState([
        {id:101,image:{src:"/partners/1.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:102,image:{src:"/partners/2.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:103,image:{src:"/partners/3.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:104,image:{src:"/partners/4.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:105,image:{src:"/partners/5.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:106,image:{src:"/partners/6.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:107,image:{src:"/partners/7.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:108,image:{src:"/partners/8.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:109,image:{src:"/partners/9.jpg",alt:"partner",width:269.06,height:269.06}},
        {id:110,image:{src:"/partners/10.jpg",alt:"partner",width:269.06,height:269.06}},
    ])

    return(
        <div className={styles.partners}>
            <h1 className={styles.h1}>Partners</h1>
            <div className={styles.main}>
                {
                    partners.map((elm)=>{
                        return<div key={elm.id} className={styles.elm}>
                            <Image
                                src={elm.image.src}
                                alt={elm.image.alt}
                                width={elm.image.width}
                                height={elm.image.height}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}