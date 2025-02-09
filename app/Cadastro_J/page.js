'use client'

import { useState } from "react";
 
function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function cadastrar(){
        console.log("E-mail cadastrado:"+email);
        console.log("Senha Cadastrada:"+senha);
    }

    return ( 
        
            <div className="flex justify-center items-center bg-gray-500 -my-2 -mx-2 " >
            <div className=" items-center border p-20 -my-2 -mx-2 mt-20 w-48 size-80 bg-[#080808] text-slate-100 " >
            <h1 className="-mt-10 " >Se Cadastre</h1>
            <input onChange={((e)=> setEmail(e.target.value) )} class=" bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="E-mail"/>
            <input onChange={((e)=> setSenha(e.target.value) )} class=" bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="Senha"/>
            <button onClick={()=> cadastrar()} value={email+senha} type="button" class="focus:outline-none mt-5  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Cadastrar</button>

        </div>
        </div>
        
     );
}

export default Cadastro;