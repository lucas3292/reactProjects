import React, { useEffect, useState } from "react";
import {motion, AnimatePresence, LayoutGroup, useScroll} from "framer-motion";

import './Home.css';

function Home({selectMenu,navigate}){ 
    const [clickBT,setClickBT] = useState(false);
    const [opacityVal,setOpacityVal] = useState(0.1);
    const addOpacity =()=>{
        if(opacityVal < 1){
            const val = opacityVal+0.5
            setOpacityVal(val)
        }else{
            const val = opacityVal-0.5
            setOpacityVal(val)
        }
        
    };
    return(
        <AnimatePresence exitBeforeEnter>
            <motion.div className="container-home"  key={selectMenu.id} initial={{opacity:0, x:0}} animate={{ opacity: 1}} exit={{x:-100, opacity: 0}} >
                 <motion.h1>
                    {selectMenu.title}
                </motion.h1>
                 <p>
                    {selectMenu.text}
                </p>
                 <button onClick={()=>{setClickBT(!clickBT), addOpacity()}}>
                    <a href="#about">
                        Saiba mais!
                    </a>
                </button>
            </motion.div>
        </AnimatePresence>
    );
}

export default Home;