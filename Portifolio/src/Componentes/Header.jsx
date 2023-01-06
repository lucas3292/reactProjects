import React, { useState } from "react";
import { useNavigate } from "react-router";
import {AiOutlineLinkedin,AiOutlineGithub,AiOutlineWhatsApp} from "react-icons/ai";
import {motion} from "framer-motion"
import Home from "./Home";

import './Header.css'

function Header(){
    const navigate = useNavigate();
    const [selectMenu,setSelectMenu] = useState({
        id: "1",
        idName: "Sobre",
        title: "Bem Vindos (as)",
        text: "Desde já é um prazer receber você visitante, espero que aprecie e contribua com vossas sugestões.",
        linkPage: "/about",
    });

    return(
        <header>
            <motion.div className="container-menu">
                <div className="container-icons">
                    <a className="icons" href="https://github.com/lucas3292?tab=repositories">
                        <AiOutlineGithub size={30}/>
                    </a>
                    <a className="icons" href="https://www.linkedin.com/in/lucas-nascimento-960342184/">
                        <AiOutlineLinkedin size={30}/>
                    </a>
                    <a className="icons" href="https://wa.me/+5592984304444?text=Ol%C3%A1,%20como%20posso%20ajudar?">
                        <AiOutlineWhatsApp size={30}/>
                    </a>
                </div>
                <nav className="container-menu-itens">
                    <ul className="container-menu-itens">
                        <li className="item" >
                            <a href="#about">
                                Sobre
                            </a>
                        </li>
                        <li className="item" >
                            <a href="#tecnology" >
                                Tecnologias
                            </a>
                        </li>
                        <li className="item" >
                            <a href="#experience" >
                                Experiencias
                            </a>
                        </li>
                        <li className="item">
                            <a href="#projects" >
                                Projetos
                            </a>
                        </li>
                    </ul>
                </nav>
            </motion.div>
            <div className="container-header" layout>
                <div className="container-header-transparent-background">
                    <Home selectMenu={selectMenu} navigate={navigate}/>
                </div>
            </div>
        </header>
    );
}

export default Header;