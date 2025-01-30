function Contato() {
    return ( 
        <div>

<div>
       
       <p> <strong>Suporte da SONUS</strong> </p>
       <p>Entre em contato com nossa equipe</p>

   </div>

   <h3>Envie uma menssagem</h3>
   <p>Preencha o formulário abaixo para enviar menssagem para nós: </p>

   <form>

       <label>Nome completo</label>
       <br/>
       <input/>
       <br/>
       <br/>

       <label>

           Contato
           <br/>
           <input placeholder="Telefone ou e-mail"/>
           <br/>

       </label>

       <br/>

       <textarea rows="4" cols="50" placeholder="Digite sua menssagem aqui..." ></textarea>

       <br/>
       <br/>

           <button>Enviar menssagem</button>

   </form>

   <h3>Fale conosco</h3>
   <p>Você também pode falar diretamente conosco:</p>
   <label> <strong>E-mail:</strong> contato_suporte@gmail.com </label>

        </div>
     );
}

export default Contato