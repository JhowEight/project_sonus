import Cabecalho from "../components/Cabecalho";

function Avaliacao() {
    return ( 

    <div>
        <hr/>
        <br/>
        <br/>  

        <h2 className="text-center">Avalie a sua música / o seu álbum</h2>
        <div className=" flex justify-center">
            <div>
                <img src="https://placehold.co/200"/> 
                <br/>
                <br/>
                <p>Título da música / do álbum</p>
            </div>
        </div>
       
        <br/>
        <br/>
        <br/>

        <div>
            <div className="flex justify-center">
                <p>O que você achou da recomendação da música / do álbum?</p>
            </div>

            <div className="flex justify-center">
                <textarea id="story" name="story" rows="10" cols="53"></textarea>
            </div>    
        </div>

        <div className="flex justify-center ">
            <br/>
            <button>Enviar avaliação</button>
        </div>

    </div>

    );
}

export default Avaliacao;
