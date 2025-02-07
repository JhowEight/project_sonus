'use client'

import { useState } from "react";
import Cabecalho from "../components/Cabecalho";

function Perfil() {

    const [name,setName] = useState("Matheus");
    const [nickname,setNickname] = useState("Theu123");
    const [followers,setFollowers] = useState("25");
    const [follow,setFollow] = useState("30");


    return ( 

        <div>
            <hr/>
            <br/>
            <h2>Perfil</h2>
            <div className="flex">
                <br/>
                <img src="https://placehold.co/150" />
                <div>
                    <div className="ml-24 text-center">
                        <p>Nome: {name} </p>
                        <br/>
                        <br/>
                        <p>Nickname: {nickname} </p>
                        <br/>
                        <br/>
                        <p>Seguidores: {followers} </p>
                        <br/>
                        <br/>
                        <p>Seguindo: {follow} </p>
                    </div>
                </div>   
            </div>

            <br/>
            <br/>
            <br/>
            <h2>Playlists criadas</h2>

            <div className="flex justify-around">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="">
                        <p className="">Playlist 1</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-6">
                            <p className="mr-2">Playlist 2</p>
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
                <br/>
                <h2>Conquistas</h2>
            </div>
                
            <div className="justify-between flex">
                <br/>
                <img src="https://placehold.co/100"/>
                <div>
                    <div className="ml-8">
                        <p className="mr-6">Viciado em Recomendações </p>
                        <p className="mr-">Recomendou músicas para 20 amigos</p>
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
                            <p className="mr-6">Você mistura e experimenta recomendações de diferentes gêneros</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>


            <div className="justify-around flex">
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
                            <p className="mr-6">Recomendou 5 álbuns completos para os seus amigos</p>
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

            <div className="justify-around flex">
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
                            <p className="mr-6">Você criou sua primeira playlist</p>
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
                            <p className="mr-6">Rei da Curadoria</p>
                            <p className="mr-6">Recomendou músicas para 20 amigos</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>



            <div className="justify-around flex">
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

            <div className="justify-around flex">
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
                            <p className="mr-6">Conectou dois estilos musicais inesperados em uma playlist.</p>
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
        </div>

     );
}

export default Perfil;
