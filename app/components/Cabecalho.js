'use client'

import { useState, useEffect } from "react";

function Cabecalho() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = JSON.parse (localStorage.getItem("usuario"));
    if (storedLogin.id != undefined) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    window.location.href="/Login_J";
  };

    const encaminhaPerfil = () => {
    window.location.href="/M_perfil";
  };

  return (
    <div>
      <div className="flex items-center rounded-lg p-8 bg-[#362D58] text-slate-100">
        <a href="/" className="no-underline text-5xl text-slate-100">
          <strong>sonus</strong>
        </a>

        <div className="flex w-full justify-end space-x-4 mr-5">
          {!isLoggedIn ? (
            <>
              <a
                onClick={handleLogin}
                className="px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl cursor-pointer"
                href="./Login_J"
              >
                Login
              </a>
              <a
                className="px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl"
                href="./Cadastro_J"
              >
                Cadastrar
              </a>
            </>
          ) : (
            <a
              onClick={encaminhaPerfil}
              className="px-6 py-3 bg-[#17223C] no-underline text-slate-100 rounded-xl"
              href="./M_perfil"
            >
              Perfil
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cabecalho;
