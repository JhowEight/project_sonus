function Musicas ( attr ) {
    return ( 
        <div className="flex w-60 pb-5">
    
<div className=" border-solid border w-60 rounded-xl bg-[#362D58] p-5">
    <div className="text-center">
<form action="">
    <button> 
        {/* <img src="https://placehold.co/200"/> */}
        <h2> <b>{attr.nome}</b> </h2>
    </button>
</form>
     </div>
</div>

        </div>
     );
}

export default Musicas ;