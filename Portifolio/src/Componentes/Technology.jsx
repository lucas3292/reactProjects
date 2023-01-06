import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import "./Technology.css"

function Technology({technologies}){
    const arrayTechnologiesEdit = [];
    const createNewArray = ()=>{
        var size = 5; 
        for (var i=0; i<technologies.length; i+=size) {
            arrayTechnologiesEdit.push(technologies.slice(i,i+size));
        }
    };
    const [sizeArray,setSizeArray] = useState(technologies.length);
    return(
        <section id="tecnology">
            <div className="container-technology">
                <div className="fix"></div>
                <ul className="drawer-matrix-container" key={"works"}>
                    {createNewArray()}
                    {arrayTechnologiesEdit.map((technologies)=><ArrayDrawer  key={technologies[0].id} arrayDrawer={technologies} sizeArray={sizeArray}/>)}
                </ul>
                <NewDrawers/>
            </div>
        </section>
    );
}

function ArrayDrawer({arrayDrawer, sizeArray}){
    console.log(Math.floor(100/arrayDrawer[0].id));
    return(
        <li style={{zIndex:Math.floor(100/arrayDrawer[0].id)}}>
            <ul className="vector-container-drawers">
                {arrayDrawer.map((technology)=><Drawer key={technology.id} technology={technology} sizeArray={sizeArray}/>)}
            </ul>
        </li>
    );
}

function Drawer({technology, sizeArray}){
    const [selectTechnology,setSelectTechnoly] = useState(false);
    const getHeight = ()=>{
        if(selectTechnology){
            if(technology.id >= sizeArray){
                return 250;
            }
            return 350;
        }else{
            return 0;
        }
    };
    const [drawerWidth,setDrawerWidth] = useState()
    return(
        <li className="technology-drawer-background-container" 
        style={{width: technology.id >= sizeArray ? ("100%"):("20%")}}>
            <div className="container-technology-drawer">
                <motion.div className="technology-text-container" 
                initial={{height:0}} 
                animate={{height:getHeight()}} 
                transition={{duration:0.5}}>
                    <h1>{technology.title}</h1>
                    <p>
                        {technology.text}
                    </p>
                </motion.div>
                <motion.div className="container-design-technology-drawers" 
                onClick={()=>setSelectTechnoly(!selectTechnology)}
                style={{height:technology.id >= sizeArray ? ("140px"):("90px")}}>
                    <div style={{display:"flex", marginTop:technology.id >= sizeArray ? ("30px"):("10px")}}>
                        <div className="container-technology-doorknob"></div>
                        <div className="container-technology-doorknob"></div>
                    </div>
                    <h1 style={{fontSize: technology.id >= sizeArray ? ("40px"):("30px")}}>{technology.title}</h1>
                </motion.div>
            </div>
        </li>
    );
}

function NewDrawers(){
    return(
        <div className="container-new-drawers">
            <div className="container-design-new-drawers" >
                <div className="container-design-new-drawers-doorknob"></div>
                <h1>Em Breve</h1>
            </div>
            <div className="container-design-new-drawers" >
                <div className="container-design-new-drawers-doorknob"></div>
                <h1>Em Breve</h1>
            </div>
        </div>
    );
    
}
export default Technology;