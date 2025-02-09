'use client'

import Cabecalho from "../components/Cabecalho";
import { useState } from 'react';


function Avaliacao() {
    
    const [star,setStar] = useState(0)
    const [avalia, setAvalia] = useState("Fenomenal!!! Um dos melhores álbuns de todos os tempos")

    function Avaliar(){
        console.log("Comentário:"+avalia)
        console.log("Estrelas: "+star)
        setAvalia()
    }
    
    return ( 

    <div>
        <hr/>
        <br/>
        <br/>  

        <h2 className="text-center">Avalie a sua música / o seu álbum</h2>
        <div className=" flex justify-center">
            <div className="text-center">
                <img src="https://m.media-amazon.com/images/I/712nD2NH-zL._AC_SY355_.jpg"/> 
                <br/>
                <br/>
                <p>Álbum: Paranoid (18/09/1970)</p>
                <br/>
                <br/>
                <div>
                    <button onClick={()=>setStar(1)}>⭐</button>
                    <button onClick={()=>setStar(2)}>⭐</button>
                    <button onClick={()=>setStar(3)}>⭐</button>
                    <button onClick={()=>setStar(4)}>⭐</button>
                    <button onClick={()=>setStar(5)}>⭐</button>
                      <p>{star}</p>
                </div>     
            </div>
        </div>
                    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div>
            <div className="flex justify-center">
                <p>O que você achou da recomendação da música / do álbum?</p>
            </div>

            <div className="flex justify-center">
                <textarea id="story" name="story" rows="10" cols="50"></textarea>
            </div>    
        </div>

        <div className="flex justify-center">
            <br/>
            <br/>
            <button input onChange={(a)=> setAvalia(a.target.value) } value={avalia} onClick={()=> Avaliar()} className="bg-purple-800 hover:bg-purple-950 focus:outline-2 active:bg-purple-900 cursor-pointer rounded-md border-none mt-5 p-2 text-white">Enviar avaliação</button>
            <br/>
            <br/>
        </div>
        <br/>
        <br/>

    </div>

    );
}

export default Avaliacao;
