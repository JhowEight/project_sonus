import "./Cabecalho.css"

function Cabecalho() {
    return ( 
        <div className="Cabecalho -my-2 -mx-2 bg-[#362D58] text-slate-100 "  >
             
            <h1>  SONUS </h1>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 " href="#" >Início</a>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 " href="#" >Entrar</a> 
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 " href="#">Cadastrar</a>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 " href="#" > Perfil </a>
            <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 " href="#" >Contato</a>
            
        </div>
     );
}

export default Cabecalho;