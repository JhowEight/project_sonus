// 'use client'

// import { useState } from "react";

// function Suporte() {

//     const [email, setEmail] = useState("");
//     const [nome, setNome] = useState("");
//     const [mensagem, setMensagem] = useState("");

//     function salvar(e){
//       e.preventDefault();// Não fazer reload da pagina quando enviar
//         console.log("E-mail:"+email);
//         console.log("Nome:"+nome);
//         console.log("Mensagem:"+mensagem);
//     }

//     return ( 

//       <div>

//           <div className="min-h-screen flex items-center justify-center p-6">
//           <div className="max-w-3xl w-full bg-[#080808] text-slate-100 rounded-2xl shadow-lg p-6">

//                 <h1 className="text-3xl font-bold text-slate-100 mb-4">Suporte</h1>
//                 <p className="text-slate-100 mb-6">Estamos aqui para ajudar. Entre em contato conosco para qualquer dúvida ou problema.</p>
          
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-slate-100 font-medium">Nome</label>
//                 <input  onChange={((e)=> setEmail(e.target.value) )} type="text" className="w-full bg-transparent placeholder:text-slate-100 mt-2 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="Seu nome"/>
//               </div>
            
//               <div>
//                 <label className="block text-slate-100 font-medium">E-mail</label>
//                 <input onChange={((e)=> setNome(e.target.value) )} type="email" className="w-full bg-transparent placeholder:text-slate-100 mt-2 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" placeholder="@gmail.com"/>
//               </div>
            
//               <div>
//                 <label className="block text-slate-100 font-medium">Mensagem</label>
//                 <textarea onChange={((e)=> setMensagem(e.target.value) )} className="w-full bg-transparent placeholder:text-slate-100 mt-2 text-slate-100 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-100 shadow-sm focus:shadow" rows="4" placeholder="Digite sua mensagem"></textarea>
//               </div>
            
//               <button onClick={(e)=> salvar(e)} value={email+nome+mensagem} className=" w-full focus:outline-none mt-5  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Enviar</button>
//             </form>
            
//           </div>
//           </div>

//       </div>

//      );
// }

// export default Suporte;