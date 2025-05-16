'use client'

import axios from 'axios';
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import Musica from "../components/Musicas";

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
          const response = await axios.get('http://localhost:4000/album');
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

/*      <div>

          <h1 className="text-white"> Heaven and Hell </h1>
            <div className="bg-[#362D58] w-[1500px] rounde-xl w-full flex text-white p-5 ">
              <img className=" rounded-xl w-96" src="imagens/albuns sabbath/heaven and hell.jpg"/>

                <div className="p-2 w-[1250px] ml-4 rounded-xl bg-[#1b2021]">
                    <p className="text-4xl text-justify">Lançado em 25 de abril de 1980, Heaven and Hell marcou uma nova era para o Black Sabbath, sendo o primeiro álbum com 
                      Ronnie James Dio nos vocais, após a saída de Ozzy Osbourne. Com uma abordagem mais melódica e épica, o disco trouxe um novo fôlego para a banda, 
                      consolidando-se como um dos maiores clássicos do heavy metal.</p>
                </div>
            </div>
            <br/>            

        </div>*/
        
        <div>
      <h2 className="text-white p-5">Álbum</h2>

      {/* Exibe os álbuns na lista */}
      <div className="text-white flex flex-wrap justify-start gap-8 p-5">
        {album.length > 0 ? (
          album.map((item, index) => (
            <div
              key={index}
              className="border-solid border rounded-xl bg-[#362D58] p-5 w-60 cursor-pointer"
              onClick={() => handleAlbumClick(item)} // Chama a função ao clicar no álbum
            >
              <h3>{item.nome}</h3>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>

      {/* Detalhes do álbum selecionado */}
      {selecionaAlbum && (
        <div>
          <h1 className="text-white text-center text-4xl mt-5">{selecionaAlbum.nome}</h1>
          
          <div className="bg-[#362D58] w-[1500px] rounded-xl w-full flex text-white p-5 mx-auto mt-5">
            <img className="rounded-xl w-96" src={selecionaAlbum.url_imagem} alt={selecionaAlbum.nome}/>

            <div className="p-2 w-[1250px] ml-4 rounded-xl bg-[#1b2021]">
              <p className="text-4xl text-justify">{selecionaAlbum.descricao}</p>
            </div>

          </div>
        </div>
      )}
    </div>

 );
}
export default Album;
