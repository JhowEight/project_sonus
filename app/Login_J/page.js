'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [usuarios, setUsuarios] = useState([]);

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
                u.email = "";
                localStorage.setItem("usuario", JSON.stringify(u)); //Transforma objeto em texto pra ser guardado no storage local do navegador
                window.location.href="/";
            }}
        
        )};
    }

    return (
        <div className="flex justify-center">
            <div className="text-center border rounded-lg p-20 mt-20 size-80 bg-[#080808] text-slate-100">
                <h1 className="-mt-10">Login</h1>

                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" 
                    placeholder="E-mail"
                />

                <input 
                    onChange={(e) => setSenha(e.target.value)} 
                    type="password" 
                    className="bg-transparent placeholder:text-slate-100 mt-5 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" 
                    placeholder="Senha"
                />

                <br/>

                <button 
                    onClick={salvar} 
                    type="button" 
                    className="focus:outline-none mt-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                    Logar
                </button>

                <br/>
                <br/>

                <label>Ainda não é usuário da SONUS?</label>
                <a className="text-slate-100" href="./Cadastro_J">Faça Cadastro</a>
            </div>
        </div>
    );
}

export default Login;
