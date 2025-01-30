import Musica from "./components/Musicas";
import Noticias from "./components/Noticias";


export default function Home() {
  return (
 <div>
    
<h1>Seus amigos vão gostar disso!!</h1>

<div className="border-solid border w-1/5 bg-zinc-50 p-5 ">

<Musica/>

</div>

<div>

  <Noticias/>

</div>




    </div>
  );
}
