import fotos from "../info"
import Image from 'next/image'
import styles from "../styles/Home.module.css";
const Imagenes = () => {
    return (
        <div Style="display:flex; flex-direction:column;padding-top:10px">
            {fotos.map((image,index) => {
                return (
                        <img key={index} className={styles.responsive} src={"/" + image} loader="lazy"  Style="max-width:130vh; height:auto; object-fit:fill;margin-top:0" />
                )
            })}
        </div>
    )

}

export default Imagenes
//{}