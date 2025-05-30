import "./Musica.css"

function Musica(attr) {
    return (  


        <div className="musica  bg-[#362D58] rounded-xl text-white  ">

            <div >
            <button> <img className="w-60 rounded-xl"src={attr.imagem}/>  </button>
            <h3> {attr.nomeMusica} <b/></h3>
            
            </div>    
            <br/> 

        </div>
    );
}

export default Musica;
