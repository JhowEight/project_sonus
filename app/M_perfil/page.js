'use client'

import { useState } from "react";
import Cabecalho from "../components/Cabecalho";

function Perfil() {

    const [name] = useState("Matheus")
    const [nickname] = useState("Theuz123");
    const [followers] = useState("25");
    const [follow] = useState("30");

    const user = {
        id: 0,
        pname: "Matheus",
        pnickname: "Theuz123",
        pfollowers: "25",
        pfollow: "30"
    }

    
//  const [variável] = useState({}); ==> Quando tem que por um objeto anônimo, se coloca uma chave ({}) vazia para atribuir um valor.

    return ( 

        <div>
            <hr/>
            <br/>
            <h2 className="text-slate-100">Perfil</h2>
            <div className="flex">
                <br/>
                <img src="https://placehold.co/150" />
                <div>
                    <div className="ml-24 text-center">
                        {/* Quando se cria um variável dentro do objeto se referencia à eles como: objeto.variável */}
                        <p className="text-slate-100">Nome: {name} </p>
                        <br/>
                        <br/>
                        <p className="text-slate-100">Nickname: {nickname} </p>
                        <br/>
                        <br/>
                        <p className="text-slate-100">Seguidores: {followers} </p>
                        <br/>
                        <br/>
                        <p className="text-slate-100">Seguindo: {follow} </p>
                    </div>
                </div>   
            </div>

            <br/>
            <br/>
            <br/>
            <h2 className="text-slate-100">Playlists criadas</h2>
            
            <br/>
            <br/>
            <br/>
            <div className="flex justify-around text-slate-100">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6">Playlist 1</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Playlist 2</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Playlist 3</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Playlist 4</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

            </div>


            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2 className="text-slate-100">Conquistas</h2>
            </div>

            <br/>
                <br/>
                <br/>
                <br/>
                
            <div className="justify-between flex text-slate-100">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6">Viciado em Recomendações </p>
                        <p className="mr-6">Recomendou músicas para mais de 20 amigos</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Avaliando Álbuns</p>
                            <p className="mr-6">Avaliou seu primeiro álbum</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Alquimista da Música</p>
                            <p className="mr-6">Você mistura e experimenta recomendações de vários gêneros</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="justify-around flex text-slate-100">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6">Explorador Sonoro</p>
                        <p className="mr-6">Sempre recomenda novas músicas e estilos</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Curador de títulos</p>
                            <p className="mr-6">Recomendou 5 álbuns para os seus amigos</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Desbravador Musical</p>
                            <p className="mr-6">Ouviu músicas de 20 artistas de diferentes países</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="justify-around flex text-slate-100">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6">Compartilhando Melodias</p>
                        <p className="mr-6">Compartilhou 10 músicas em suas redes sociais</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Mestre dos Sons</p>
                            <p className="mr-6">Você criou sua primeira playlist de músicas</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Explorador de Estilos</p>
                            <p className="mr-6">Explorou músicas de diferentes décadas e estilos musicais.</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="justify-around flex text-slate-100">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6">Mixando Mundos</p>
                        <p className="mr-6">Misturou e experimentou recomendações de diferentes gêneros</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Curador de Sons</p>
                            <p className="mr-6">Sempre recomenda novas músicas e estilos</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Influenciador de Álbuns</p>
                            <p className="mr-6">Recomendou 5 álbuns completos para os seus amigos</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="justify-around flex text-slate-100">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6">Viajante das Melodias</p>
                        <p className="mr-6">Ouviu músicas de 20 artistas de diferentes países</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Conectando Gêneros</p>
                            <p className="mr-6">Juntou dois estilos musicais inesperados em uma playlist.</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6">Mestre das Descobertas</p>
                            <p className="mr-6">Encontrou e compartilhou uma música inédita ou pouco conhecida com seus amigos.</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>

            {/* <div className="justify-around flex">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6"></p>
                        <p className="mr-6"></p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6"></p>
                            <p className="mr-6"></p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-8">
                            <p className="mr-6"></p>
                            <p className="mr-6"></p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            
            Para as div's uma do lado da outra
            */}

            <br/>
            <br/>
        </div>
     );
}

export default Perfil;
