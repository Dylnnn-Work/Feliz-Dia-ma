import fotos from "../info"
import Image from 'next/image'
const Imagenes = () => {
    return (
        <div Style="display:flex; flex-direction:column; align-self:center;margin-top:0px">
            {fotos.map((image,index) => {
                return (
                    <img src={"/" + image} loader="lazy" key={index} Style="max-width:52vh; height:auto; object-fit:fill;align-self:center;margin-top:14px" />
                )
            })}
        </div>
    )

}

export default Imagenes

//{}