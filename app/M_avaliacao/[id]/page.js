'use client'

import Cabecalho from "../../components/Cabecalho";
import { useState } from 'react';

function Avaliacao(attr) {
    
    // const [star, setStar] = useState(0)
    // const [rate, setRate] = useState("Fenomenal!!! Um dos melhores álbuns de todos os tempos")

    const [avaliar, setAvaliar] = useState(
        {
            id: 0,
            image: "https://m.media-amazon.com/images/I/712Q7mruCZL._AC_SX425_.jpg",
            albumname: "Heaven and Hell",
            release: "25/04/1980",
            genre:"Heavy Metal",
            stars: "5",
            comment: "Incrível!!! Um dos melhores álbuns de rock de todos os tempos"
        }
    );

    const [album, setAlbum] = useState({});
    const [albuns, setAlbuns] = useState([
        {
            id: 0,
            image: "https://m.media-amazon.com/images/I/712Q7mruCZL._AC_SX425_.jpg",
            albumname: "Heaven and Hell",
            release: "25/04/1980",
            genre: "Heavy Metal",
            stars: "5",
            comment: "Incrível!!! Um dos melhores álbuns de rock de todos os tempos"
        },
        {
            id: 1,
            image: "https://m.media-amazon.com/images/I/71Q7MvP2HGL._AC_SX425_.jpg",
            albumname: "Back in Black",
            release: "25/07/1980",
            genre: "Rock",
            stars: "5",
            comment: "Um dos maiores clássicos do rock! Energia pura!"
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/I/81s5zSQwSXL._AC_SY679_.jpg",
            albumname: "The Dark Side of the Moon",
            release: "01/03/1973",
            genre: "Progressive Rock",
            stars: "5",
            comment: "Uma obra-prima do Pink Floyd, transcendendo gerações!"
        },
        {
            id: 3,
            image: "https://m.media-amazon.com/images/I/91cAyVhPzHL._AC_SY679_.jpg",
            albumname: "The Wall",
            release: "30/11/1979",
            genre: "Progressive Rock",
            stars: "5",
            comment: "A história contada de maneira épica. Um álbum conceitual imperdível."
        },
        {
            id: 4,
            image: "https://m.media-amazon.com/images/I/71zVYM8O3uL._AC_SY679_.jpg",
            albumname: "Master of Puppets",
            release: "03/03/1986",
            genre: "Heavy Metal",
            stars: "5",
            comment: "A verdadeira definição do thrash metal! Um álbum que marcou gerações."
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/I/51UODxMwLmL._AC_SY679_.jpg",
            albumname: "Rumours",
            release: "04/02/1977",
            genre: "Rock",
            stars: "5",
            comment: "A melodia e a harmonia desse álbum são inesquecíveis!"
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/I/71mfBpSy6wL._AC_SY679_.jpg",
            albumname: "Abbey Road",
            release: "26/09/1969",
            genre: "Rock",
            stars: "5",
            comment: "O ápice dos Beatles! Uma mistura de experimentalismo e harmonia perfeita."
        },
        {
            id: 7,
            image: "https://m.media-amazon.com/images/I/91a0McpXbJL._AC_SY679_.jpg",
            albumname: "Nevermind",
            release: "24/09/1991",
            genre: "Grunge",
            stars: "5",
            comment: "O álbum que revolucionou o rock nos anos 90! Nirvana para sempre."
        },
        {
            id: 8,
            image: "https://m.media-amazon.com/images/I/61J+xs9GEdL._AC_SY679_.jpg",
            albumname: "London Calling",
            release: "14/12/1979",
            genre: "Punk Rock",
            stars: "5",
            comment: "Um dos álbuns mais inovadores da história do punk! Puro espírito rebelde."
        },
        {
            id: 9,
            image: "https://m.media-amazon.com/images/I/71AoUkh1h2L._AC_SY679_.jpg",
            albumname: "The Joshua Tree",
            release: "09/03/1987",
            genre: "Rock",
            stars: "5",
            comment: "A combinação perfeita de música e poesia. U2 em sua melhor fase."
        },
        {
            id: 10,
            image: "https://m.media-amazon.com/images/I/81s6l24VuQL._AC_SY679_.jpg",
            albumname: "The Number of the Beast",
            release: "22/03/1982",
            genre: "Heavy Metal",
            stars: "5",
            comment: "O Iron Maiden criando sua identidade! Um álbum icônico e recheado de clássicos."
        }
    ]);

    useState(()=> {
        const idalbum = attr.params.id;
        albuns.map ((i)=> {
            if (i.id == idalbum){
                setAlbum(i)
            }
        })
    })
    

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

        <div className="my-24">
            <div className="flex justify-center text-center">
                <div>
                    <div className="box-border rounded-3xl p-8 bg-[#362D58] border-[3px] border-solid border-black mb-10">
                        <h2 className="text-slate-100 mb-8">Avalie a sua música / o seu álbum</h2>
                        <img className="rounded-3xl mb-4" src={avaliar.image} />
                        <p className="text-slate-100"><strong>ID: {album.id}</strong></p>
                        <p className="text-slate-100">Álbum: {album.albumname}</p>
                        <p className="text-slate-100">Lançamento: {album.release}</p>
                        <p className="text-slate-100">Gênero: {album.genre}</p>
                    </div>

                    <div className="box-border rounded-3xl p-4 bg-[#362D58] border-[3px] border-solid border-black mb-8">
                        <h3 className="text-center text-slate-100 mb-2 mt-2">Avaliação dos usuários</h3>
                        {/* Avaliação do usuário */}
                        <button onClick={() => setStar(1)} className="bg-[#362D58]">⭐</button>
                        <button onClick={() => setStar(2)} className="bg-[#362D58]">⭐</button>
                        <button onClick={() => setStar(3)} className="bg-[#362D58]">⭐</button>
                        <button onClick={() => setStar(4)} className="bg-[#362D58]">⭐</button>
                        <button onClick={() => setStar(5)} className="bg-[#362D58]">⭐</button>
                        <p className="text-slate-100 mt-2 mb-2">{avaliar.stars}</p>

                        <div className="flex flex-col justify-center items-center">
                            <p className="text-slate-100">O que você achou da recomendação da música / do álbum?</p>
                            <textarea id="story" name="story" rows="10" cols="54">{avaliar.comment}</textarea>
                            <button input onChange={(a)=> setRating(a.target.value)} value={rating.rate} onClick={()=> Rating()} className="bg-[#362D58] hover:bg-[#17223C] focus:outline-2 active:bg-[#17223C] cursor-pointer rounded-md border-black p-2 text-white mt-6">Enviar avaliação</button>    
                        </div>

                    </div>
                </div>
            </div>
                    

            <div className="flex justify-center">
                <div className="flex flex-col justify-center box-border rounded-3xl bg-[#362D58] border-[3px] border-solid border-black px-8">
                    <h3 className="text-center text-slate-100 mb-2">Avaliação dos administradores</h3>
                    <div className="flex justify-center">
                        {/* Avaliação dos administradores */}
                        <button onClick={() => setStar(1)} className="bg-[#362D58] w-9 h-6 my-2">⭐</button>
                        <button onClick={() => setStar(2)} className="bg-[#362D58] w-9 h-6 my-2">⭐</button>
                        <button onClick={() => setStar(3)} className="bg-[#362D58] w-9 h-6 my-2">⭐</button>
                        <button onClick={() => setStar(4)} className="bg-[#362D58] w-9 h-6 my-2">⭐</button>
                        <button onClick={() => setStar(5)} className="bg-[#362D58] w-9 h-6 my-2">⭐</button>
                    </div>

                    <p className="text-slate-100 block text-center mb-2">{avaliar.stars}</p>
                    <p className="text-slate-100">O que você achou da recomendação da música / do álbum?</p>
                    <textarea id="story" name="story" rows="10" cols="54"></textarea>
                    <button input onChange={(a)=> setRating(a.target.value)} value={rating.rate} onClick={()=> Rating()} className="bg-[#362D58] hover:bg-[#17223C] focus:outline-2 active:bg-[#17223C] cursor-pointer rounded-md border-black p-2 text-white mt-6 mb-4 mx-40">Enviar avaliação</button>
                </div>
            </div> 
        </div>
    );
}

export default Avaliacao;
