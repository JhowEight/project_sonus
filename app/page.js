'use client'
import Musicas from "./albuns_N/components/Albuns";
import Artistas from "./artista_N/components/Artistas";
import "./components/Musica.css"
import Musica from "./components/Musicas";
import Noticias from "./components/Noticias";
import { useState } from "react";


export default function Home() {

    // const [artistas, alteraArtistas]=useState([

    //   {
              
    //     imagemArtista: "imagens/albuns sabbath/"
    //   },
    //   {
          
    //     imagemArtista: ""
    //   },
    //   {
       
    //     imagemArtista: ""
    //   },
    //   {
       
    //     imagemArtista: ""
    //   }

    // ]);

    const [musicas, alteraMusicas] = useState([
        {
            nomeMusica: "BAD",
            artista: "Michael Jackson",
            imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Michael_Jackson_-_Bad.png/220px-Michael_Jackson_-_Bad.png"
          },
          {
            nomeMusica: "Thriller",
            artista: "Michael Jackson",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Billie Jean",
            artista: "Michael Jackson",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Smooth Criminal",
            artista: "Michael Jackson",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Beat It",
            artista: "Michael Jackson",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Like a Prayer",
            artista: "Madonna",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Vogue",
            artista: "Madonna",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Material Girl",
            artista: "Madonna",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Papa Don't Preach",
            artista: "Madonna",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "La Isla Bonita",
            artista: "Madonna",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "Bohemian Rhapsody",
            artista: "Queen",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          },
          {
            nomeMusica: "We Will Rock You",
            artista: "Queen",
            imagem: "https://i.ibb.co/qxC4W5M/beat-it.jpg"
          }
        
    ]);

    return ( 

      <div>
        <h1 className="text-white text-center">Seus amigos vão gostar disso!!</h1>

        <div>
          <ul className="musica bg-zinc-80 gap-5 rounded-xl overflow-x-auto">{   
            musicas.map((i)=>
            <Musica nomeMusica={i.nomeMusica} artista={i.artista} imagem={i.imagem}/>
          )}
          </ul>
          <br/>                
          <br/>
        </div>

        <h1 className="text-white text-center ">Albuns para você</h1>
        <br/>

        <div className=" musica bg-zinc-80 gap-5 rounded-xl ">

          <a  href="./albuns_N"> <button className="rounded-xl bg-[#362D58] p-10 ">  <img src="/imagens/heaven in hell.jpg"/> </button></a>
                  
          <button className="rounded-xl bg-[#362D58] p-10 "> <img src="/imagens/heaven in hell.jpg"/> </button>

          <button className="rounded-xl bg-[#362D58] p-10 "> <img src="/imagens/heaven in hell.jpg"/> </button>

          <button className="rounded-xl bg-[#362D58] p-10 "> <img src="/imagens/heaven in hell.jpg"/> </button>  
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
