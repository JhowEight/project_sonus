function Artistas (aatr) {
    return ( 
        
        <div className="border-double w-40 ">
    <div className=" bg-zinc-50 p-5">
    <button> 
        <img src="https://placehold.co/100"/>
        <p> <b>{aatr.nome}</b> </p>
    </button>
    </div>
        </div>
     );
}

export default Artistas;
