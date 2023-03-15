import { useState } from "react";
import "../pages/style.css";

export function Home() {
  return (
    <div>
        <main>
          <div className="mainInicial">
            <h1 className="textoInicial">Ficamos felizes em ver você a bordo!</h1>
            <img src="./src/imagens/fundo.jpg" className="fundoInicial" />
          </div>
      </main>
    </div>
  );
}
