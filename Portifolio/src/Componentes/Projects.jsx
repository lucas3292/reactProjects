import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai";

import './Projects.css'
import { useEffect } from "react";

function Projects({projects}){
    const [idProject, setIdProject] = useState(0);
    const [projectsSelect,setProjectsSelect] = useState(projects[idProject].projects);
    const [indiceProjects,setIndiceProjects] = useState([0,4]);
    const [vectorScrolling, setVectorScrolling] = useState([1300,-1300]);
    useEffect(() => {
        setProjectsSelect(projects[idProject].projects);
        console.log(projectsSelect[0].title);
        console.log(idProject);
   
      }, [idProject]);
    console.log(projectsSelect.length);
    const nextProjects = ()=>{
        if(indiceProjects[1]<projectsSelect.length){
            setVectorScrolling([1300,1300])
            setIndiceProjects([indiceProjects[0]+5, indiceProjects[1]+4]);
        }
    }
    const beforeProjects = ()=>{
        if(indiceProjects[0]>0){
            setVectorScrolling([-1300,-1300])
            setIndiceProjects([indiceProjects[0]-5, indiceProjects[1]-4]);
        }
    }
    return(
        <section id="projects">
            <div className="projects-container">                
                <div className="projects-menu-container">
                    {projects.map((projectMenu)=><ProjectMenu 
                                                key={projectMenu.id} 
                                                project={projectMenu} 
                                                setIdProject={setIdProject} 
                                                idProject={idProject}
                                                setIndiceProjects={setIndiceProjects}
                                                setVectorScrolling={setVectorScrolling}
                                                />)}
                </div>
                <div className="project-description-container">
                    <motion.div className="project-title-container"
                    key={projects[idProject].title}
                    initial={{opacity:0}}
                    animate={{opacity:1}}>
                        <h1>
                            {projects[idProject].title}
                        </h1>
                    </motion.div>
                    <div className="container-projects-developed">
                        <motion.div className="left-button-container" 
                        initial={{opacity:0}} 
                        animate={{opacity:1}}>
                            <motion.button 
                            onClick={()=>{beforeProjects()}} 
                            whileHover={{scale:indiceProjects[0]==0 ? (1):(1.1)}}
                            style={{background:indiceProjects[0]==0 ? ("rgb(175, 175, 177)"):("aliceblue")}}>
                                <AiFillCaretLeft size={30} style={{marginTop:"8%"}}/>
                            </motion.button>
                        </motion.div>
                        <motion.div className="projects-card-container"  
                        key={idProject}
                        initial={{x:1300}} 
                        animate={{x:0}} 
                        transition={{duration:0.5}}>
                            <AnimatePresence>
                            {projectsSelect.map((project)=>{
                                if(project.id >= indiceProjects[0] && project.id <= indiceProjects[1]){
                                    return <ProjectInfo key={project.id} project={project} vectorScrolling={vectorScrolling}/>
                                }
                            })}
                            </AnimatePresence>
                        </motion.div>
                        <motion.div className="right-button-container"
                        initial={{opacity:0}} 
                        animate={{opacity:1}}>
                            <motion.button 
                            onClick={()=>{nextProjects()}}
                            whileHover={{scale: indiceProjects[1]>projectsSelect.length ? (1):(1.1)}}
                            style={{backgroundColor: indiceProjects[1]>projectsSelect.length ? ("rgb(175, 175, 177)"):("aliceblue")}}>
                                <AiFillCaretRight size={30} style={{marginTop:"8%"}}/>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectMenu({project, setIdProject, idProject, setIndiceProjects,setVectorScrolling}){
    return(
        <div className="projects-menu-card">
            <button 
            onClick={()=>{setIdProject(project.id-1); setIndiceProjects([0,4]),setVectorScrolling([1300,-1300 ])}} 
            style={{backgroundColor:idProject==project.id-1 ?("rgb(243, 180, 85)"):("#222"),
                color:idProject==project.id-1 ?("#222"):("aliceblue")}}>
                {project.title}
            </button>
        </div>
    );
}

function ProjectInfo({project,vectorScrolling}){
    return(
        <motion.div className="design-card-container" 
        style={{backgroundColor:project.id%2==0 ? ("aliceblue"):("rgb(243, 180, 85)")}}
        key={project.id}
        initial={{x:vectorScrolling[0],transition:{duration:0}}} 
        animate={{x:0,transition:{duration:0.5,delay:0.5}}}
        exit={{x:vectorScrolling[1],transition:{duration:0.5}}}
        whileHover={{border:"3px solid rgb(245, 220, 111)" ,scale:1.02, transition:{delay:"0.05"}}}>
            <div className="image-container">
                <img src={project.linkImage} alt="" width="230" height="230" />
            </div>
            <h1>{project.title}</h1>
            <h2>{project.text}</h2>
        </motion.div>
    );
}
export default Projects;