

function Artistas (attr) {
    return ( 
        
    <div className="flex w-60 bg-[#1b2021] ">
            <div className="artista rounded-xl bg-[#362D58] p-5 m-2">
                <button className=" rounded-xl bg-black text-white"> 
                <img className="rounded-xl w-40 cursor-pointer " src={"imagens/albuns sabbath/"+attr.imagem}/>
                <p> <b>{attr.nome}</b> </p>
                <p>{attr.ano}</p>
                </button>
            </div>
    </div>
     );
}

export default Artistas;
