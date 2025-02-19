
'use client'
import { useState } from "react";
import Artistas from "./components/Artistas";




function Artista () {
    
    const [musicos, alteraMusicos] = useState([
        {
            id: 0,
            nome: "Black Sabbath",
            genero: "Heavy Metal",
            imagem: "BLACK SABBATH logo.png"
        },
        {
            id: 1,
            nome: "The Weeknd",
            genero: "Pop",
            imagem: "THE WEEKND logo.jpg"
        },
        {
            id: 2,
            nome: "Michael Jackson",
            genero: "Pop",
            imagem: "MICHAEL JACKSON logo.png"
        },
        {
            id: 3,
            nome: "Lady Gaga",
            genero: "Pop",
            imagem: "LADY GAGA logo.jpg"
        },
        {
            id: 4,
            nome: "Linkin Park",
            genero: "NuMetal",
            imagem: "LINKIN PARK logo.jpg"
        },
        {
            id: 5,
            nome: "Travis Scott",
            genero: "Trap",
            imagem: "TRAVIS SCOTT logo.jpg"
        },
        {
            id: 6,
            nome: "Mayhem",
            genero: "Black Metal",
            imagem: "MAYHEM logo.jpg"
        },
        {
            id: 7,
            nome: "Racionais",
            genero: "Rap",
            imagem: "RACIONAIS logo.jpg"
        }
    ]);

    return ( 
        <div>

            <br/>
            <h2 className=" text-white "> Artistas</h2>

            <div className="flex bg-stone-950">         

                {
                    musicos.map( (i)=>
                    <Artistas nome={i.nome}  genero={i.genero} imagem={i.imagem} />
                    )
                }

            </div>

        </div>
     );
}

export default Artista ;