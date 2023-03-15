import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/pages/style.css";
import { Home } from "../src/pages/home";
import { Aeroporto } from "./pages/passageiro";
import { AeroportoVer } from "./pages/verUsuario";
import { Header } from "./pages/header";
import { NovoPassageiro } from "./pages/criarPassageiro";
import { AtualizarPassageiro } from "./pages/atualizarPassageiro";
import { Companhia } from "./pages/companhia";
import {CompanhiaVer} from "./pages/verCompanhia";
import {AtualizarCompanhia} from "./pages/atualizarCompanhia";
import {NovaCompanhia} from "./pages/criarCompanhia";

function App() {
  return (
      <div className="elementos">
      <Header />
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aeroporto" element={<Aeroporto />} />
            <Route path="/companhiaAerea" element={<Companhia/>}/>
            <Route path="/companhia/:id" element={<CompanhiaVer/>}/>
            <Route path="/aeroporto/:id" element={<AeroportoVer />} />
            <Route path='/usuario-criar' element={<NovoPassageiro />} />
            <Route path="/atualizar/:id" element={<AtualizarPassageiro/>} />
            <Route path="/novaComp" element={<NovaCompanhia/>} />
            <Route path="/atualizarComp/:id" element={<AtualizarCompanhia/>} />
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
