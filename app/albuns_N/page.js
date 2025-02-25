'use client'

import { useState } from "react";
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

    return (

        <div>
            <h1 className="text-white"> Heaven and Hell </h1>
            <div className="bg-[#362D58] w-[1500px] rounde-xl w-full flex text-white p-5 ">

                <img className=" rounded-xl w-96" src="imagens/albuns sabbath/heaven and hell.jpg"/>

                <div className="p-2 w-[1250px] ml-4 rounded-xl bg-[#1b2021]">

                    <p className="text-4xl text-justify">Lançado em 25 de abril de 1980, Heaven and Hell marcou uma nova era para o Black Sabbath, sendo o primeiro álbum com Ronnie James Dio nos vocais, após a saída de Ozzy Osbourne. Com uma abordagem mais melódica e épica, o disco trouxe um novo fôlego para a banda, consolidando-se como um dos maiores clássicos do heavy metal.</p>
                
                </div><button className=" ml-2 text-4xl cursor-pointer mr-1 rounded-lg w-64 text-white bg-[#1b2021]" href="./M_avaliacao/[id]/0">Avalie o albúm</button>
            </div>

            <br/>

            

            <div className=" text-white">

                {
                    <ul className="list-none"> 
                      
                       

                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg   text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Neon Knights <strong> 3:51 </strong> </b>
                    </button>
                    </li>
                  
                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Children of the Sea <strong> 5:34 </strong> </b>
                    </button>
                    </li>

                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg  text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Lady Evil <strong> 4:26 </strong> </b>
                    </button>
                    </li>
                  
                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg  text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Heaven and Hell <strong> 6:59 </strong> </b>
                    </button>
                    </li>
                  
                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Wishing Well <strong> 4:07 </strong> </b>
                    </button>
                    </li>
                  
                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Die Young <strong> 4:41 </strong> </b>
                    </button>
                    </li>
                  
                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Walk Away <strong> 4:26 </strong> </b>
                    </button>
                    </li>
                  
                    <li><button className="text-2xl cursor-pointer mr-1 rounded-lg text-white bg-[#362D58]">
                      <img className="w-16 mr-2" src="imagens/albuns sabbath/heaven and hell.jpg"></img> 
                      <b> Lonely Is the Word <strong> 5:53 </strong> </b>
                    </button>
                    </li>

                  </ul>
                }

            </div>

        </div>



 );
}
export default Album;
