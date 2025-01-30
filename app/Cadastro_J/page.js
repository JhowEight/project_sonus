import Menu from "./components/Menu";

function Cadastro() {
    return ( 
        <div>

        <Menu/>

            <h1>Crie sua Conta SONUS</h1>
        <p>Crie uma conta para ficar por dentro de tudo sobre o mundo das músicas!</p>
        <p>Você já tem uma conta? acesse seu painel: <a href="J_entrar.html" >clique aqui</a> </p>

        <form/>
        
        <br/>
        <br/>
        <label>Data de nascimento</label>
        <br/>
        <input type="date" />
        <br/>
        <br/>
        <label>Nickname</label>
        <br/>
        <input/>
        <br/>
        <br/>
        <label>Telefone</label>
        <br/>
        <input/>
        <br/>
        <br/>
        <label><strong>Escolha alguns tipos músicais do seu gosto:</strong></label>
        <br/>
        <input type="radio"/>
        <label>Rock</label>
        <input type="radio"/>
        <label>Funk</label>
        <input type="radio"/>
        <label>Rap</label>
        <input type="radio"/>
        <label>Sertanejo</label>
        <input type="radio"/>
        <label>Trap</label>
        <br/>
        <br/>
        <input type="radio"/>
        <label>Pagode</label>
        <input type="radio"/>
        <label>Gospel</label>
        <input type="radio"/>
        <label>Blues</label>
        <input type="radio"/>
        <label>Jazz</label>
        <input type="radio"/>
        <label>Forró</label>
        <br/>
        <br/>
        <input type="radio"/>
        <label>Pop</label>
        <input type="radio"/>
        <label>Samba</label>
        <input type="radio"/>
        <label>Eletrônica</label>
        <input type="radio"/>
        <label>Clássica</label>
        <input type="radio"/>
        <label>Country</label>
        <br/>
        <br/>
        <label><strong>Dados de login</strong></label>
        <br/>
        <label>E-mail</label>
        <br/>
        <input/>
        <br/>
        <br/>
        <label>Senha</label>
        <br/>
        <input/>
        <br/>
        <br/>
        <input type="checkbox" />
        <label>Quero receber recomendações no meu email, e informações importantes</label>
        <br/>
        <br/>
        <button>Salvar e continuar</button>

    <form/>
        </div>
     );
}

export default Cadastro;