
'use client'
import { useState } from "react";
import Artistas from "./components/Artistas";




function Artista () {
    
    const [albuns, alteraAlbuns] = useState([
        { id: 0, nome: "Black Sabbath", ano: 1970, imagem: "black sabbath.jpg" },
        { id: 1, nome: "Paranoid", ano: 1970, imagem: "paranoid.jpg" },
        { id: 2, nome: "Master of Reality", ano: 1971, imagem: "master of reality.jpg" },
        { id: 3, nome: "Vol. 4", ano: 1972, imagem: "vol 4.jpg" },
        { id: 4, nome: "Sabbath Bloody Sabbath", ano: 1973, imagem: "sabbath bloody sabbath.jpg" },
        { id: 5, nome: "Sabotage", ano: 1975, imagem: "sabotage.jpg" },
        { id: 6, nome: "Technical Ecstasy", ano: 1976, imagem: "technical esctasy.jpg" },
        { id: 7, nome: "Never Say Die!", ano: 1978, imagem: "never say die.jpg" },
        { id: 8, nome: "Heaven and Hell", ano: 1980, imagem: "heaven and hell.jpg" },
        { id: 9, nome: "Mob Rules", ano: 1981, imagem: "mob rules.jpg" },
        { id: 10, nome: "Born Again", ano: 1983, imagem: "born again.jpg" },
        { id: 11, nome: "The Eternal Idol", ano: 1987, imagem: "the eternal idol.jpg" },
        { id: 12, nome: "Headless Cross", ano: 1989, imagem: "headless cross.jpg" },
        { id: 13, nome: "Tyr", ano: 1990, imagem: "tyr.jpg" },
        { id: 14, nome: "Dehumanizer", ano: 1992, imagem: "dehumanizer.jpg" },
        { id: 15, nome: "Cross Purposes", ano: 1994, imagem: "cross puposes.jpg" },
        { id: 16, nome: "Forbidden", ano: 1995, imagem: "forbidden.jpg" },
        { id: 17, nome: "13", ano: 2013, imagem: "13.jpg" }
    ]);

    return ( 
        <div>

            <br/>
            <h1 className=" text-white "> Artista</h1>

            <div>

            </div>

            <br/>
            <h2 className=" text-white ">Albúns</h2>

            <div className="flex bg-stone-950">         

                {
                    albuns.map( (i)=>
                    <Artistas nome={i.nome}  ano={i.ano} imagem={i.imagem} />
                    )
                }

            </div>

        </div>
     );
}

export default Artista ;