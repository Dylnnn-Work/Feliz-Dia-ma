import fotos from "../info"
import Image from 'next/image'
const Imagenes = () => {
    return (
        <div Style="display:flex; flex-direction:column; align-self:center;margin-top:0px">
            {fotos.map((image,index) => {
                return (
                    <img key={index} src={"/" + image} loader="lazy"  Style="max-width:68vh; max-height:150vh; object-fit:fill;margin-top:0" />
                    )
            })}
        </div>
    )

}

export default Imagenes

//{}