import {  motion, Reorder,useTransform,useMotionValue } from "framer-motion";
import React from "react";
import { useState } from "react";
import './Test.css'


function Test(){
    return(
        <div style={{width:"100%", backgroundColor: "blue", height:"600px", position:"unset"}}>
            <motion.div className="container-card" drag="x" dragConstraints={{ top:-50, bottom:-50, left: -200, right: 200 }}>
                <motion.div className="container-card" drag="y" dragConstraints={{ top:-50, bottom:-50, left: -200, right: 200 }}>

                </motion.div>
            </motion.div>
        </div>
    );
}

export default Test;