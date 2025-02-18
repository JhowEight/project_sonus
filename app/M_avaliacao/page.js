'use client'

import Cabecalho from "../components/Cabecalho";
import { useState } from 'react';

function Avaliacao() {
    
    // const [star, setStar] = useState(0)
    // const [rate, setRate] = useState("Fenomenal!!! Um dos melhores álbuns de todos os tempos")

    const [avaliar, setAvaliar] = useState(
        {
            id: 0,
            image: "https://m.media-amazon.com/images/I/712nD2NH-zL._AC_SY355_.jpg",
            albumname: "Paranoid",
            release: "18/09/1970",
            genre:"Heavy Metal",
            stars: "5",
            comment: "Incrível!!! Um dos melhores álbuns de rock de todos os tempos"
        }
    );
    

    const [rating, setRating]= useState({
        star: 0,
        // rate: avaliar.comment
    })

    function setStar(pstar){
        const u = {
            star: pstar,
            rate: rating.rate
        }

        setStar(u)
    }

    function setRate(prate){
        const u = {
            star: rating.star,
            rate: prate
        }

        setRate(u)
    }

    function Rating(){
        console.log("Comentário:"+rate)
        console.log("Estrelas: "+star)
        setRate()
    }
    
    return ( 

        <div>
            <hr/>
            <br/>
            <br/>  

            <div className="flex justify-center">
                <div className="text-center">
                    <div className="box-border rounded-3xl bg-purple-800 mx-4 my-4">
                        <h2 className=" text-center text-slate-100">Avalie a sua música / o seu álbum</h2>
                        <img src={avaliar.image}/> 
                        <br/>
                        <br/>
                        <p className="text-slate-100">Álbum: {avaliar.albumname} </p>
                        <p className="text-slate-100">Lançamento: {avaliar.release} </p>
                        <p className="text-slate-100">Gênero: {avaliar.genre} </p>

                        <div>
                            <button onClick={()=>setStar(1)}>⭐</button>
                            <button onClick={()=>setStar(2)}>⭐</button>
                            <button onClick={()=>setStar(3)}>⭐</button>
                            <button onClick={()=>setStar(4)}>⭐</button>
                            <button onClick={()=>setStar(5)}>⭐</button>
                            <p className="text-slate-100">{avaliar.stars}</p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                         
                </div>
            </div>
                    
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                <div className="flex justify-center">
                    <p className="text-slate-100">O que você achou da recomendação da música / do álbum?</p>
                </div>

                <div className="flex justify-center">
                    <textarea id="story" name="story" rows="10" cols="50">{avaliar.comment}</textarea>
                </div>    
            </div>

            <div className="flex justify-center">
                <br/>
                <br/>
                <button input onChange={(a)=> setRating(a.target.value) } value={rating.rate} onClick={()=> Rating()} className="bg-purple-800 hover:bg-purple-950 focus:outline-2 active:bg-purple-900 cursor-pointer rounded-md border-none mt-5 p-2 text-white">Enviar avaliação</button>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default Avaliacao;
