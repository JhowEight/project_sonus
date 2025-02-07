import "./Musica.css"

function Musica(attr) {
    return (  


        <div className="musica border-solid bg-purple-800 rounded-xl">

            <div>
            <button> <img src={"imagens/"+attr.src}/>  </button>
            <h3> {attr.nomemusica} <b/></h3>  
            <p>{attr.comentario} </p> 
         
            
            </div>    
            <br/>
            
            

        </div>
    );
}

export default Musica;
