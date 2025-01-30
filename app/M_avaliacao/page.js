function Avaliacao() {
    return ( 

    <div className="">

        

        <br/>
        <br/>  

        <div className="border-solid border size-36">
            <div>
                <img src="https://placehold.co/200"/> 
                <br/>
                <br/>
            </div>
        </div>
        <p>Título da música/do álbum</p>
        
        <br/>
        <br/>
        <br/>

    <div>
            <p>O que você achou da recomendação da música/do álbum?</p>

            <textarea id="story" name="story" rows="10" cols="53">
            </textarea>

            <button>Enviar avaliação</button>
        </div>

    </div>

    );
}

export default Avaliacao;