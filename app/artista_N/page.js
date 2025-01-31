import Cabecalho from "../albuns_N/components/Cabecalho";
import Artistas from "./components/Artistas";

function Artista () {
    return ( 
        <div className="bg-zinc-500">
        <Cabecalho/>

        <Artistas nome="Black Sabbath"/>
        <Artistas nome="The Weeknd"/>
        <Artistas nome="Michael Jackson"/>
        <Artistas nome="Lady Gaga"/>
        <Artistas nome="Linkin Park"/>
        <Artistas nome="Travis Scott"/>
        <Artistas nome="Mayhem"/>
        <Artistas nome="Racionais"/>

        </div>
     );
}

export default Artista ;