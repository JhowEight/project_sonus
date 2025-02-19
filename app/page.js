'use client'
import "./components/Musica.css"
import Musica from "./components/Musicas";
import Noticias from "./components/Noticias";
import { useState } from "react";

export default function Home() {

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
            imagem: "https://via.placeholder.com/225x225/00FF00/000000?text=Billie+Jean"
          },
          {
            nomeMusica: "Smooth Criminal",
            artista: "Michael Jackson",
            imagem: "https://via.placeholder.com/225x225/FFFF00/000000?text=Smooth+Criminal"
          },
          {
            nomeMusica: "Beat It",
            artista: "Michael Jackson",
            imagem: "https://via.placeholder.com/225x225/00FFFF/000000?text=Beat+It"
          },
          {
            nomeMusica: "Like a Prayer",
            artista: "Madonna",
            imagem: "https://via.placeholder.com/225x225/FF00FF/FFFFFF?text=Like+a+Prayer"
          },
          {
            nomeMusica: "Vogue",
            artista: "Madonna",
            imagem: "https://via.placeholder.com/225x225/800080/FFFFFF?text=Vogue"
          },
          {
            nomeMusica: "Material Girl",
            artista: "Madonna",
            imagem: "https://via.placeholder.com/225x225/FFA500/FFFFFF?text=Material+Girl"
          },
          {
            nomeMusica: "Papa Don't Preach",
            artista: "Madonna",
            imagem: "https://via.placeholder.com/225x225/A0522D/FFFFFF?text=Papa+Dont+Preach"
          },
          {
            nomeMusica: "La Isla Bonita",
            artista: "Madonna",
            imagem: "https://via.placeholder.com/225x225/008000/FFFFFF?text=La+Isla+Bonita"
          },
          {
            nomeMusica: "Bohemian Rhapsody",
            artista: "Queen",
            imagem: "https://via.placeholder.com/225x225/40E0D0/000000?text=Bohemian+Rhapsody"
          },
          {
            nomeMusica: "We Will Rock You",
            artista: "Queen",
            imagem: "https://via.placeholder.com/225x225/FFD700/000000?text=We+Will+Rock+You"
          },
          {
            nomeMusica: "We Are the Champions",
            artista: "Queen",
            imagem: "https://via.placeholder.com/225x225/FF69B4/FFFFFF?text=We+Are+the+Champions"
          },
          {
            nomeMusica: "Another One Bites the Dust",
            artista: "Queen",
            imagem: "https://via.placeholder.com/225x225/808080/FFFFFF?text=Another+One+Bites+the+Dust"
          },
          {
            nomeMusica: "Don't Stop Me Now",
            artista: "Queen",
            imagem: "https://via.placeholder.com/225x225/90EE90/000000?text=Dont+Stop+Me+Now"
          }
    ]);

    return ( 

        <div>


            <h1 className="text-white">Seus amigos vão gostar disso!!</h1>

            <div >

                <ul className="musica bg-zinc-80 gap-5 rounded-xl overflow-x-auto w-full">{   
                    musicas.map((i)=>
                
                    <Musica nomeMusica={i.nomeMusica} artista={i.artista} imagem={i.imagem}/> 
                
                )
                    
                    
                    
                }</ul>

        </div>

    <br/>
    <hr/>

    <div className="text-white">
        <Noticias/>
    </div>

    </div>
    );
}
