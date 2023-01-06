import React from "react";
import { motion } from "framer-motion";

import './Experience.css';
import { useState } from "react";
import { useEffect } from "react";


function Experience({letters}){
    const [scaleLetter,setScaleLetter] = useState(0);
    const [infoLetter,setInfoLetter] = useState(letters[0]);
    return(
        <section id="experience">
            <div className="container-experience">
                {letters.map((letter)=><Letter letter={letter} setInfoLetter={setInfoLetter} setScaleLetter={setScaleLetter}/>)}
                <motion.div className="container-info-letter-background" initial={{scaleX:scaleLetter}} animate={{scaleX:scaleLetter}} transition={{duration:0.2}}>
                    <div className="container-info-letter">
                        <div className="container-info-letter-tint" style={{backgroundColor:infoLetter.letterColor}}>
                            <button onClick={()=>setScaleLetter(0)} >
                                <span>Voltar</span>
                            </button>
                            <h1>{infoLetter.position}</h1>
                            <h2>{infoLetter.office}</h2>
                            <h2>{infoLetter.period}</h2>
                            <p>{infoLetter.text}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Letter({letter,setInfoLetter,setScaleLetter}){
    const [position,setPosition] = useState(0);
    useEffect(() =>{
        const fetchTasks = async () => {
            setPosition(Math.floor(Math.random() *480));
        };
        fetchTasks();
    },[]);
    return(
        <>
            <motion.div className="container-letter" drag 
            dragConstraints={{ left: 20, right: 1030, top:5, bottom:480}} 
            transition={{type:"inertia",velocity: 0,mass:100,}} 
            dragTransition={{ restDelta: 1 , bounceDamping: 100}}
            style={{x:position, y:position}}>
                <div className="container-letter-background" 
                style={{backgroundColor:letter.letterColor}}>
                    <h1 className="letter-title" style={{color:letter.fontColor}}>
                        {letter.office}
                    </h1>
                    <button className="open-letter" onClick={()=>{setInfoLetter(letter);setScaleLetter(1) }}>
                    </button>
                </div>
                
            </motion.div>
        </>

    );
}
export default Experience;