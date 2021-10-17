import fotos from "../info"
import Image from 'next/image'
const Imagenes = () => {
    return (
        <div Style="display:flex; flex-direction:column; align-self:center;margin-top:0px">
            {fotos.map((image,index) => {
                return (
                        <img src={"/" + image} loader="lazy" key={index} Style="width:700px; height:auto; object-fit:contain;align-self:center;margin-top:0px" />
                )
            })}
        </div>
    )

}

export default Imagenes

//{}