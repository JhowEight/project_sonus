'use client'

import axios from 'axios';
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import Musica from "../components/Musicas";
import host from '../lib/host';

function Artista () {

    

    const [artista, alteraArtista] = useState([]);
    const [selecionaArtista, alteraSelecionaArtista] = useState(null); // Estado para o álbum selecionado

    useEffect(() => {
      async function fetchArtistaData() {
        try {
          const response = await axios.get(host+'/artista');
          alteraArtista(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados do álbum:', error);
        }
      }

      fetchArtistaData();
    }, []);

    const handleArtistaClick = (a) => {
      alteraSelecionaArtista(a); // Atualiza o estado com o álbum clicado
    };


  return (
    <div>
    {/* Detalhes do artista selecionado */}
    {selecionaArtista && (
      <div>
        <h1 className="text-white text-center text-4xl mt-5">{selecionaArtista.nome}</h1>
        <div className="bg-[#362D58] max-w-7xl rounded-xl w-full flex flex-col md:flex-row text-white p-5">
          <img className="rounded-xl  w-96" src={selecionaArtista.url_imagem} alt={selecionaArtista.nome}/>
            <div className="p-4 md:ml-4 mt-4 md:mt-0 rounded-xl bg-[#1b2021] flex-1">
            <p className="text-xl text-justify overflow-visible break-words">
                  {selecionaArtista.descricao}
            </p>
            </div>
        </div>
        <h3 className="text-white text-center mt-5">Ouça Também</h3>
      </div>
    )}

    

    {/* Exibe os artistas na lista */}
    <div className="text-white flex flex-wrap justify-start gap-8 p-5">
      {artista.length > 0 ? (
        artista.map((item, index) => (
        <div
          key={index}
          className="border-solid border rounded-xl bg-[#362D58] p-5 w-60 cursor-pointer"
          onClick={() => handleArtistaClick(item)} // Chama a função ao clicar no álbum
        >
          <h3>{item.nome}</h3>
        </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  </div>

 );
}
export default Artista;
