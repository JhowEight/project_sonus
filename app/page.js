'use client'
import axios from "axios";
import Musicas from "./albuns_N/components/Albuns";
import Artistas from "./artista_N/components/Artistas";
import "./components/Musica.css"
import Musica from "./components/Musicas";
import Noticias from "./components/Noticias";
import { useEffect, useState } from "react";
import host from "./lib/host";



export default function Home() {


    const [musicas, alteraMusicas] = useState([]);


    async function  buscamusica(){
      const res = await axios.get(host+"/musica")
      console.log(res.data)
      alteraMusicas(res.data)
    }


    useEffect(()=>{
      buscamusica()
    }, [])

    return ( 

        <div>

          


            <h1 className="text-white text-center">Seus amigos vão gostar disso!!</h1>

            <div >

            <ul className="musica bg-zinc-80 gap-5 rounded-xl overflow-x-auto">
              {
                musicas
                .filter((musica, index, self) =>
                  index === self.findIndex((m) => m.id_album === musica.id_album)
                )
                .slice(0, 5)
                .map((musica) => (
                <Musica key={musica.id} nomeMusica={musica.nome} imagem={musica.url_imagem} />
              ))
              }
            </ul>


                <br/>                
                <br/>

            </div>

               

    <br/>
    <br/>
    <br/>
    <hr/>
    <h1 className="text-white text-center">Noticias que soam como musicas</h1>

         <div className="text-white">

            <Noticias/>
         </div>

    <br/>
    <hr/>
    <br/>


    </div>
    );
}
