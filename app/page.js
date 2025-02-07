import Musica from "./components/Musicas";
import Noticias from "./components/Noticias";



export default function Home() {
  return (
 
    <div>


<h1 >Seus amigos vão gostar disso!!</h1>

<div className="musica bg-zinc-80 gap-5 rounded-xl">

<Musica nomemusica="BAD" comentario=" Michael Jackson " src="bad.jpg"/> 
<Musica nomemusica="aioaruno" comentario=" THE WEEKND" src="THE WEEKND.jpg"/>
<Musica nomemusica="Heaven in hell" comentario="Black Sabbath" src="heaven in hell.jpg"/>
<Musica nomemusica="siga e frente" comentario="Carreta Furacão"/>
<Musica nomemusica="the scotts" comentario="Travis Scott" src="travis.jpg"/>
<Musica nomemusica="Menino de rua" comentario="Pépe Moreno"/>

<p>oi</p>


</div>

<br/>
<hr/>

    <div>
      <Noticias/>
    </div>

    </div>
  );
}
