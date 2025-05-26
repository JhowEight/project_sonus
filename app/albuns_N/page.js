'use client'

import axios from 'axios';
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import Musica from "../components/Musicas";
import host from '../lib/host';

function Album () {

    const [musica, alteraMusica] = useState([
    { id: 0, nome: "Neon Knights", duracao: "3:51" },
    { id: 1, nome: "Children of the Sea", duracao: "5:34" },
    { id: 2, nome: "Lady Evil", duracao: "4:26" },
    { id: 3, nome: "Heaven and Hell", duracao: "6:59" },
    { id: 4, nome: "Wishing Well", duracao: "4:07" },
    { id: 5, nome: "Die Young", duracao: "4:41" },
    { id: 6, nome: "Walk Away", duracao: "4:26" },
    { id: 7, nome: "Lonely Is the Word", duracao: "5:53" }
    ])

    const [album, alteraAlbum] = useState([]);
    const [selecionaAlbum, alteraSelecionaAlbum] = useState(null); // Estado para o álbum selecionado

    useEffect(() => {
      async function fetchAlbumData() {
        try {
          const response = await axios.get(host+'/album');
          alteraAlbum(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados do álbum:', error);
        }
      }

      fetchAlbumData();
    }, []);

    const handleAlbumClick = (a) => {
      alteraSelecionaAlbum(a); // Atualiza o estado com o álbum clicado
    };

    return (

      <div>
        <h2 className="text-white justify center p-5 text-2xl font-bold">Álbuns</h2>

        {/* Lista álbuns */}
        <div className="text-white flex flex-wrap justify-start gap-8 p-5">
          {album.length > 0 ? (
          album.map((item, index) => (
          <div key={index} className="border-solid border rounded-xl bg-[#362D58] p-5 w-60 cursor-pointer hover:bg-[#4e3d7a] transition" onClick={() => handleAlbumClick(item)}>
            <h3 className="text-lg font-semibold">{item.nome}</h3>
          </div>
          ))

          ) : (

          <p>Carregando...</p>
          )}
        </div>

        {/* Detalhes álbum selecionado */}
        {selecionaAlbum && (
          <div className="p-5">
            <h1 className="text-white text-3xl font-bold mb-4">{selecionaAlbum.nome}</h1>

            <div className="bg-[#362D58] max-w-7xl rounded-xl w-full flex flex-col md:flex-row text-white p-5">
              <img className="rounded-xl w-full md:w-96 object-cover" src={selecionaAlbum.url_imagem} alt={selecionaAlbum.nome}/>
              <div className="p-4 md:ml-4 mt-4 md:mt-0 rounded-xl bg-[#1b2021] flex-1">
                <p className="text-xl text-justify">
                  {selecionaAlbum.descricao}
                </p>

              </div>
            </div>
          </div>
        )}
      </div>

 );
}
export default Album;
