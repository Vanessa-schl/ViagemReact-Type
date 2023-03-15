import { useState } from "react";
import "../pages/style.css";

export function Header() {
  return (
    <div>
        <header className='header'>
    <div className='app'>
      <div className='paginas'>
        <a className='homeInicial' href="/home">Home</a>
        <a className='aeroportoInicial' href="/aeroporto">Usuarios</a>
        <a className="companhia" href="/companhiaAerea">Companhia Aerea</a>
      </div>
    </div>
    </header>
    </div>
  )
}