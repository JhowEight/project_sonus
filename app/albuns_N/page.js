'use client'

import axios from 'axios';
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import Musica from "../components/Musicas";
import host from '../lib/host';

function Album () {

    const [album, alteraAlbum] = useState([]);
    const [selecionaAlbum, alteraSelecionaAlbum] = useState(null); // Estado para o álbum selecionado

    useEffect(() => {
      async function fetchAlbumData() {
        try {
          const response = await axios.get(host+'/album');
          console.log(response.data)
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


         {/* Detalhes álbum selecionado */}
         {selecionaAlbum && (
          <div className="p-5">
            <h1 className="text-white text-3xl font-bold mb-4">{selecionaAlbum.nome}</h1>

            <div className="bg-[#362D58] max-w-7xl rounded-xl w-full flex flex-col md:flex-row text-white p-5">
              <img className="rounded-xl w-60 md:w-96 object-cover" src={selecionaAlbum.url_imagem} alt={selecionaAlbum.nome}/>
              <div className="p-4 md:ml-4 mt-4 md:mt-0 rounded-xl bg-[#1b2021] flex-1">
                <p className="text-xl text-justify">
                  {selecionaAlbum.descricao}
                </p>
                <hr/>
                <ul className='list-none pl-0' >
                {
                  selecionaAlbum.musicas.map(i => 
                    <li key={i.id} className='bg-zinc-900 p-1 px-10 my-1' >
                      <p><strong>{i.nome}</strong> - <em>{i.tempo}</em> </p>
                      </li>
                  )
                }
                </ul>
              </div>
            </div>
          </div>
        )}

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

       
      </div>

 );
}
export default Album;
