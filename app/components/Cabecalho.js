
function Cabecalho() {
    return ( 
        <div className="flex items-center rounded-lg p-8  bg-[#362D58] text-slate-100">
            <a href="/" className=" no-underline text-5xl text-slate-100" > <strong>sonus</strong></a>
            <div className="flex w-full justify-end space-x-4 mr-5">

                <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100  rounded-xl" href="./Login_J" >Login</a> 
                <a className=" px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl" href="./Cadastro_J">Cadastrar</a>
                
            </div>

        </div>
     );
}

export default Cabecalho;