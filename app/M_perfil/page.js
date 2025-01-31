import Menu_Avaliacao from "../M_avaliacao/components/Menu_Avaliacao";

function Perfil() {
    return ( 

        <div>

            <Menu_Avaliacao/>
            <hr/>
            <br/>
            <h2>Perfil</h2>
                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/150" />
                    <div>
                       <div className="ml-24">
                            <p>Nome:</p>
                            <p>Nickname:</p>
                            <p>E-mail:</p>
                            <br/>
                            <br/>
                        </div>
                    </div>   
                </div>

                <div>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Conquistas</h2>
                </div>
                
                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div> 
                        <div className="ml-16"> 
                        <p>Viciado em Recomendações</p>
                        <p>Você recomendou músicas para 20 amigos</p>
                        <br/>
                        <br/>
                        </div>  
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div >
                        <div className="ml-16">
                            <p>Avaliando Álbuns</p>
                            <p>Avaliou seu primeiro álbum</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                        <div>
                            <div className="ml-16">
                            <p>Alquimista da Música</p>
                            <p> Você mistura e experimenta recomendções de diferentes gêneros</p>
                            <br/>
                            <br/>
                            </div>
                        </div>
                </div>

                <div className="flex">
                    <br/>
                    <img src="https://placehold.co/100"/>
                    <div>
                        <div className="ml-16">
                            <p>Explorador Sonoro</p>
                            <p>Você sempre recomenda novas músicas e estilos</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
        </div>

     );
}

export default Perfil;
