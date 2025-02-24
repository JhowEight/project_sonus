
function Cabecalho() {
    return ( 
        <div className="Cabecalho -my-2 -mx-2 bg-[#362D58] text-slate-100 "  >
             
            <h1>  SONUS </h1>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl" href="/" >Início</a>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100  rounded-xl" href="./Login_J" >Login</a> 
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl" href="./Cadastro_J">Cadastrar</a>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl" href="./M_perfil" > Perfil </a>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl" href="./artista_N" > Artistas </a>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl" href="./albuns_N" > Albums </a>
            
        </div>
     );
}

export default Cabecalho;