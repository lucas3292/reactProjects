import React, { useState } from "react";
import { useRef } from "react";
import {motion, useScroll, useSpring} from "framer-motion";
import './About.css'

function About({posts}){
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"]
    });
    const draw = {
        hidden: { pathLength: 0, rotate: 270, }
    };
    const [idPost, setIdPost] = useState(0);
    return(
        <section id="about" ref={ref}>
            <div className="container-page-about" >
                <div className="container-image-about" >
                    <motion.svg
                    style={{  
                        width: "100%",
                        height:"420px"
                    }}
                    viewBox="0 0 300 420"
                    initial="hidden"
                    >
                        <motion.ellipse
                        cx="50%" cy="50%" rx="67.2%" ry="36.2%"
                        stroke="rgb(243, 180, 85)"
                        variants={draw}
                        custom={0}
                        style={{ 
                            pathLength:useSpring(scrollYProgress, {
                                stiffness: 60,
                                damping: 30,
                                restDelta: 0.02,
                            })
                        }}
                        />
                    </motion.svg>
                    <img src={posts[0].linkImage} 
                        alt="" 
                        width="300"
                        height="400"
                    />
                </div>
                <div className="container-info-post">
                    <div className="container-btns">
                        {posts.map((post)=>
                        <button 
                        key={post.id} 
                        onClick={()=>{setIdPost(post.id-1)}}  
                        style={{backgroundColor:idPost==post.id-1 ? ("rgb(243, 180, 85)"):("aliceblue")}}
                        >
                        </button>)}
                    </div>
                    <TextAbout post={posts[idPost]}/>
                </div>
                
            </div>
        </section>
    );
}

function TextAbout({post}){
    const [ravenAni,setRavenAni] = useState(false);
    const [gifRaven,setGifRaven] = useState(["/src/assets/raven1.gif","/src/assets/raven2.gif"]);
    const [gifCat,setGifCat] = useState("/src/assets/cat1.gif");
    return(
        <div className="container-text-about" 
        onMouseOver={()=> {setMouseOverContainer(1)}} 
        onMouseOut={()=>{setMouseOverContainer(0)}}>
            <motion.div key={post.id} className="container-gif" 
            initial={{opacity:0, transition:{delay:0}}} 
            animate={{opacity:1, transition:{delay:1}}}
            exit={{opacity:0, transition:{delay:0}}}>
                {post.id === "1" ? (
                    <>
                        <motion.img
                        className="raven"
                        src={gifRaven[0]}
                        alt=""
                        width="50"
                        height="50" 
                        initial={{x:0, y:0}}
                        animate={()=>{return ravenAni ? ({x:0,y:-30, transition:{duration:0.3,delay:0.4}}):({x:0,y:0,transition:{duration:0.2,delay:0}})}}
                        />
                        <motion.img 
                        className="raven"  
                        style={{marginLeft:"65px"}}
                        src={gifRaven[1]}
                        alt=""
                        width="50"
                        height="50"
                        initial={{x:0, y:0, rotateY:180}}
                        animate={()=>{return ravenAni ? ({x:10,y:-30,transition:{duration:0.3,delay:0.4}}):({x:0,y:0,transition:{duration:0.2,delay:0}})}}
                        />
                    </>
                ):(null)}
                
            </motion.div>
            <motion.h1 
            key={post.id+2}
            onMouseOver={()=> {setGifRaven(["/src/assets/raven3.gif","/src/assets/raven3.gif"]); setRavenAni(true)}} 
            onMouseOut={()=>{setGifRaven(["/src/assets/raven1.gif","/src/assets/raven2.gif"]); setRavenAni(false)}}
            initial={{x:950}} 
            animate={{x:1}} 
            transition={{duration:1}}>
                {post.title}
            </motion.h1>
            <div className="split-bar"></div>
            <motion.p 
            key={post.id+3}
            className="text-about" 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{delay:1,duration:0.5}}>
                {post.text}
            </motion.p>
            {post.id != "1" ? (
                <motion.img  
                src={gifCat}
                alt=""
                width="60"
                height="60" 
                onMouseOver={()=> {setGifCat("/src/assets/cat2.gif")}} 
                onMouseOut={()=>{setGifCat("/src/assets/cat1.gif")}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:0.5}}
                style={{margin:"1%"}}
                />
            ):(null)}
        </div>
    );
}

export default About;