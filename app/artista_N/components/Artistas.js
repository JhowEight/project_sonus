

function Artistas (attr) {
    return ( 
        
    <div className="flex w-60 pb-5">
            <div className="artista rounded-xl bg-violet-700 p-5">
                <button className=" bg-black text-white"> 
                <img className="w-40 " src={"imagens/albuns sabbath/"+attr.imagem}/>
                <p> <b>{attr.nome}</b> </p>
                <p>{attr.ano}</p>
                </button>
            </div>
    </div>
     );
}

export default Artistas;
