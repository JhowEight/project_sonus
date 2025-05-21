'use client'

import { useEffect, useState } from "react";

function Perfil() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuario"));
    setUser(data);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/"; // ou "/" se quiser redirecionar pra home
  };

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="box-border rounded-3xl bg-[#080808] py-8 px-6 text-center">
        <h2 className="my-8 text-slate-100 text-3xl">Perfil</h2>
        <img src="https://placehold.co/200" className="mx-auto rounded-full" />
        <p className="text-slate-100 mt-10 px-10 py-2">
          Nickname: <strong>{user?.nickname}</strong>
        </p>
        <a
          onClick={handleLogout}
          className="px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl"
          href="/"
        >
          Sair
        </a>
      </div>
    </div>
  );
}

export default Perfil;
