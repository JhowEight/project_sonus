'use client'

import axios from "axios";

import { useState } from "react";
 
function Cadastro() {

     const [email, setEmail] = useState("");
     const [senha, setSenha] = useState("");
     const [nickname, setNickname] = useState("");

     async function salvar(){
        if(email != "" && senha != "" && nickname != ""){
            console.log("E-mail cadastrado:"+email);
            console.log("Senha Cadastrada:"+senha);
            console.log("Nick Cadastrado:"+nickname);

            const res = await axios.post('http://localhost:4000/usuario',{
                email: email,
                senha: senha,
                nickname: nickname
            })
            console.log(" Cadastrado ");
            setSenha("");
            setEmail("");
            setNickname("");
            localStorage.setItem("usuario", JSON.stringify(res.data)); //Transforma objeto em texto pra ser guardado no storage local do navegador
            window.location.href="/Login_J";
        }

    }


    return ( 
        
            <div className="flex justify-center " >
            <div className=" border text-center rounded-lg p-20 mt-20 size-80 bg-[#080808] text-slate-100 " >
                
            <h1 className="-mt-10 " >Se Cadastre</h1>
            <input onChange={((e)=> setEmail(e.target.value) )} class=" bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="E-mail"/>
            <input onChange={((e)=> setSenha(e.target.value) )} type="password" class=" bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="Senha"/>
            <input onChange={((e)=> setNickname(e.target.value) )} class=" bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="Nickname"/>
            <br/>
            <button onClick={()=> salvar()} type="button" class="focus:outline-none mt-5  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Cadastrar</button>
            <br/>
            <br/>
            <label>Já é usuário da SONUS?</label>
            <a className=" text-slate-100" href="./Login_J" >Faça Login</a>
            

            </div>  
            </div>
            
     );
}

export default Cadastro;