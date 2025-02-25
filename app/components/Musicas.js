import "./Musica.css"

function Musica(attr) {
    return (  


        <div className="musica  bg-[#362D58] rounded-xl text-white  ">

            <div >
            <button> <img src={attr.imagem}/>  </button>
            <h3> {attr.nomeMusica} <b/></h3>  
            <p>{attr.artista} </p> 
         
            
            </div>    
            <br/>
            
            

        </div>
    );
}

export default Musica;
