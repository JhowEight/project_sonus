function Avaliacao() {
    return ( 

    <div>

        <div className="border-solid border w-1/6 bg-zinc-100 p-5">
            <div className="text-center">
                <img src="https://placehold.co/200"/>
                </div>
        </div>
        
        <div class="ia">
            <button><img src="https://placehold.co/200"/><p>Título da música</p> </button>
            <br/>
            <br/>
            <label></label>
        </div>

        <div class="ia">
            <p class="color">O que você achou da recomendação da música/do álbum?</p>

            <textarea id="story" name="story" rows="10" cols="53">
            </textarea>

            <button>Enviar avaliação</button>
        </div>

    </div>

    );
}

export default Avaliacao;