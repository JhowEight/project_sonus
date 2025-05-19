'use client'
import axios from "axios";

import { useEffect, useState } from "react";
 
function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [usuarios, setUsuarios] = useState([
        // { id: 0, email: "jhonatan@email.com", senha: "12345", nick: "Jhow" },
        // { id: 1, email: "maria.santos@email.com", senha: "m@r1a123", nick: "MariSun" },
        // { id: 2, email: "lucas.ferreira@email.com", senha: "lucas@321", nick: "Lukinha" },
        // { id: 3, email: "ana.paula@email.com", senha: "ana_p@ss", nick: "AnaP" },
        // { id: 4, email: "carlos.rocha@email.com", senha: "c4rl0s!", nick: "CRocha" },
        // { id: 5, email: "fernanda.melo@email.com", senha: "f3rnandaM", nick: "Fefe" },
        // { id: 6, email: "pedro.alves@email.com", senha: "p3dr0.alv", nick: "Pedrão" },
        // { id: 7, email: "juliana.costa@email.com", senha: "julianaC*", nick: "JuCosta" },
        // { id: 8, email: "rafael.lima@email.com", senha: "Rafa_987", nick: "Rafinha" },
        // { id: 9, email: "camila.silva@email.com", senha: "c4m!la_s", nick: "Cami" },
        // { id: 10, email: "gustavo.souza@email.com", senha: "gust@vo123", nick: "Guga" },
        // { id: 11, email: "beatriz.ribeiro@email.com", senha: "bia_456", nick: "Bia" },
        // { id: 12, email: "joao.pereira@email.com", senha: "joao_p@ss", nick: "JP" },
        // { id: 13, email: "vanessa.oliveira@email.com", senha: "v@n3ssa!", nick: "Vany" },
        // { id: 14, email: "eduardo.martins@email.com", senha: "eduM@r", nick: "Dudu" }



]);

    async function buscaUsuarios() {
        const res = await axios.get("http://localhost:4000/usuario")
        console.log(res.data)
        setUsuarios(res.data)
    }

    useEffect(()=> {
        buscaUsuarios()
    }, [] )

    function salvar(){
        {
            usuarios.map((u)=>{
            
            if(u.email == email && u.senha == senha){
                console.log(" Logado");
                u.senha = "";
                localStorage.setItem("usuario", JSON.stringify(u)); //Transforma objeto em texto pra ser guardado no storage local do navegador
                window.location.href="/";
            }}
        
        )};
    }

    return ( 
        
            <div className="flex justify-center" >
            <div className=" text-center border rounded-lg p-20 mt-20 size-80 bg-[#080808] text-slate-100 " >
            <h1 className="-mt-10 " >Login</h1>
            <input onChange={((e)=> setEmail(e.target.value) )} class=" bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="E-mail"/>
            <input onChange={((e)=> setSenha(e.target.value) )} class=" bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="Senha"/>
            <br/>
            <button onClick={()=> salvar()} type="button" class="focus:outline-none mt-5  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Logar</button>
            <br/>
            <br/>
            <label>Ainda não é usuário da SONUS?</label>
            <a className=" text-slate-100" href="./Cadastro_J" >Faça Cadastro</a>

        </div>
        </div>
        
     );
}

export default Login;