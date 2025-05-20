'use client'

function SubCabecalho() {

  return (
    <div className="flex items-center rounded-lg p-2 my-1 bg-[#362D58] text-slate-100">
      <div className="flex w-full justify-around space-x-4 mr-5">
        <a
          className="px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl"
          href="./artista_N"
        >
          Artistas
        </a>
        <a
          className="px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl"
          href="./albuns_N"
        >
          Albuns
        </a>
      </div>
    </div>
  );
}

export default SubCabecalho;
