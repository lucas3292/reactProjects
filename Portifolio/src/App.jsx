import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import './App.css'

import Header from './Componentes/Header'
import About from './Componentes/About'
import Technology from './Componentes/Technology'
import Experience from './Componentes/Experience'
import Projects from './Componentes/Projects'
import Footer from './Componentes/Footer'
import Test from './Componentes/Test'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [postsAbout, setPostsAbout] = useState([
    {
      id: "1",
      linkImage: "https://64.media.tumblr.com/41e5d3676130da20d8c4c43e51bdf7d3/tumblr_psp532Yfiu1saz98mo1_1280.jpg",
      title: "Objetivo Profissional",
      text: "Meu foco atual é conseguir uma vaga como desenvolver de softwarer web, exercendo o papel desenvolvedor fullstack, porém estou aberto a outras propostas na área de desenvolvimeto também. Além de contribuir com meus conhecimentos, também procuro adquirir novos conhecimentos e melhorar os que ja possuo, exercento minha profissão" 
    },
    {
      id :"2",
      linkImage: "https://static-cdn.jtvnw.net/jtv_user_pictures/3baadc42-f1ad-4c52-b536-c25f5e4bdeb1-profile_image-300x300.png",
      title: "Biografia",
      text: "Bem, minha história como programador começou quando tentava desenvolver meus primeiros jogos com Construct 2 no auge da minha adolescência (16 anos). Alguns anos mais tarde iniciei minha jornada na faculdade cursando Licenciatura em Computação na UEA. Iniciei esse período de estudos focado na área de robótica educacional, participando de um grupo de pesquisa com enfoque na aréa assim como também passei a publicar e apresentar artigos sobre o mesmo. Participei de 2 projetos de Iniciação Científica. Estágiei como professor de Pensamento Educacional, mais tarde como Desenvolvedor de Software e Desenvolvedor de Software Jr." 
    },
  ]);
  const [postsTechnology, setPostsTechnology] = useState([
    {
      id: "1",
      title: "ReactJS",
      text: "Desenvolvimento Web utilizando a biblioteca  ReactJS como principal ferramenta para Front-End. Quanto ao ReactJS possuo habilidades com ferramentas e recursos internos como: Hooks, Props, Proxy Server, PropTypes, TypeScript, React Redux, React Router, ESlint e etc." 
    },
    {
      id: "2",
      title: "Arduino",
      text: "Desenvolvimento de protótipos e sistemas utilizando arduino como principal ferramenta para a automatização a placa Arduino. Possuo conhecimento desde a parte de montagem da circuitos quanto a próprio processo de desenvolvimento dos algoritmos. Utilizando HC-06 (módulo bluetooth) quanto ESP-01 (módulo wireless) para controle de alguns sistemas de aumação." 
    },
    {
      id: "3",
      title: "IA",
      text: "Desenvolvimento de projetos de visão computacional utilizando Redes Neurais Convolucionais (CNN) para detecção e reconhecimento de faces humanas. Desenvolvimento de sistemas de recomendações baseados em filtragem colaborativa e em conteúdo. Tods algoritmos foram escritos em Python." 
    },
    {
      id: "4",
      title: "BlockChain",
      text: "Desenvolvimento da estruturação e conceituação de um sistema blockchain. Foi utilizados ferramentas como o Ganache como blockchain local para desenvolvimento de constratos inteligentes para Ethereum, MyEtherWallet para criação de uma Wallet Ethereum, e por fim o desenvolvimento do SmartContract utilizando Solidity." 
    },{
      id: "5",
      title: "Docker",
      text: " Configuração de imagens Docker e gerencimento das mesmas." 
    },{
      id: "6",
      title: "DJango",
      text: " Desenvolvimento de sistemas web simples utilizando o framework Django estruturado em MVT." 
    },{
      id: "7",
      title: "Flask",
      text: " Desenvolvimento de APIs e de microoserviços utilizando utilizando o microoframework Flask." 
    },
    {
      id: "8",
      title: "React Native",
      text: "Desenvolvimento de aplicativos simples para Android utilizando recursos disponíveis do aparelho Android como o GPS, Câmera, Galeria e etc. Em alguns desses aplicativos foi necessário estabelecer comunicação com apliativos externos como WhatsApp e Gmail. Ambos aplicativos foram escritos em JavaScript utilizando o framework multiplataforma React Native." 
    }, 
    {
      id: "9",
      title: "Android",
      text: "Desenvolvimento de sistemas para aparelhos Androids. Desenvolvimento de uma Game Engine utilizando Java em conjunto com  a plataforma LibGDX. Densenvolvimentos de jogos com Unity e Construct. Desenvolvimentos de sistemas para o controle de autações com Arduino via Bluetooth." 
    },
    {
      id: "10",
      title: "Unity 3D",
      text: "Desenvolvimento de jogos em 2D e 3D para plataformas Android, IOS , Windows e Linux. Conhecimento que abrenge desde a parte de criação de StoryBoards ao produto final. Comhecimento em desenvolvimento de mecânicas 2D e 3D assim como a implementação dos mesmos. Participação tanto na parte de desenvolvimento algoritmo quanto na parte de concebimento da participação artística." 
    },
    {
      id: "11",
      title: "PostgreSQL",
      text: " Utilização do SGB PostgreSQL como gerenciador de banco de dados. Entendimento desde os conceitos básicos de Banco de dados (escrita de diagrama, mapeamento do diagrama e normalização ) quanto a estruturação do banco. Implementação  das querrys no backemd das aplicações." 
    },
    {
      id: "12",
      linkImage: "url(https://wallpaperboat.com/wp-content/uploads/2020/05/neon-city-07.jpg)",
      title: "MySQL",
      text: " Utilização do SGB MySQL como gerenciador de banco de dados. Entendimento desde os conceitos básicos de Banco de dados (escrita de diagrama, mapeamento do diagrama e normalização ) quanto a estruturação do banco. Implementação  das querrys no backemd das aplicações." 
    },
    {
      id: "13",
      title: "Linux",
      text: " Preparação da ambientação para homolagação dos sistemas no Linux. Configuração de containers Docker. Comandos Linux." 
    },
    {
      id: "14",
      title: "Git",
      text: " Utilização de plataformas Git como o GitHub, GitFlow e Bitbucket para versionamento e gerenciamento de projetos. Conhecimento de comandos Git assim como estruturação de projetos." 
    },
    {
      id: "15",
      title: "Windows",
      text: " Preparação da ambientação para homolagação dos sistemas no Windows. Configuração de containers Docker. Criação de rotinas para Windows. Comandos CMD/DOS. Criação de scripts para autmatização com .BAT." 
    },
    {
      id: "16",
      title: "Linguagens de Programação",
      text: "Possuo experiência nas seguintes linguaguens de programação: Java, JavaScript, C/C++, C#, Python, Solidy. Ainda possuo experiencias nas seguintes linguagens que não são necessariamente classificadas como linguagens de programação: HTML5,CSS3,SQL e TypeScript." 
    },
  ]);
  const [postsExperience,setPostExperience] = useState([
    {
      id: "1",
      linkImage : "https://th.bing.com/th/id/OIP.BDVY5oBWI0uYsQjb9th-igHaHa?pid=ImgDet&rs=1",
      position: "Desenvolvedor de Softwarer Jr.",
      office: "Universidade do Estado do Amazonas",
      period: "2021-2022",
      text: "Este se trata de um projeto P&D financiada pela motorola em conjunto com uma unidade da Universidade do Estado do Amazonas (UEA) de Parintis-AM. O projeto consistia no desenvolvimento inicial de uma Game Engine para aparelhos Androids da Motorola. Foi utlizado Java para o desenvolvimento do sistema. Consequentemente foi utilizado a estrutura de desenvolcimento de jogos multiplataforma libGDX como principal ferramenta para o desenvolvimento do sistema. Atuei principalmente no desenvolvimento das estruturas dos gêneros de jogos disponiveis na plataforma e como suporte para o resto do projeto.",
      letterColor:"rgb(0, 255, 64, 0.212)",
      fontColor:"rgb(23, 68, 34)"
    },
    {
      id: "2",
      position: "Estágio em Desenvolvimento de Software",
      office: "RedMaxx ",
      period:"06-2020 á 09-2021",
      text: "Atuei como desenvolver Python, criando e personalizando módulos para a plataforma ODDO (plataforma ERP com CRM). Atuei também com desenvolvimento de aplicações BI e DashBoards (Qlik Sense, Qlik View, ClicData, Elasticsearch). Gerenciei containers com Docker. desenvolvi também algoritmos de WebScraping utilzan Selenium, BeautifulSoup e Python para raspagem de dados de páginas web. Realizei também tratamento e filtragem de dados utilizando Pandas e Python. Atuei também como desenvolvedor de formulários web utilizando VueJS,NodeJS e MySQL. Durante o período de estágio foi utilizado Scrum como framework para desenvolvimento e gerenciamento de atividades.",
      letterColor:"rgb(170, 226, 16, 0.527)",
      fontColor:"rgb(87, 117, 6)"
    },
    {
      id: "3",
      position: "Estágio em Docência na Aréa de Pensamento Computacional ",
      office: "Instituição Século XXI",
      period:"06-2019 á 12-2020",
      text: "Exerci o papel de professor de pensamento computacional. Atuei em todos os anos do ensino básico, desde o maternal até o ensino médio. Atuava principalmente introduzindo conceitos de programação utilizando Arduino e Scratch. Durante o período desenvolvi materiais pedagógicos como: jogos digitais utilizando Game Engines como o Construct 2 e o Unity 3D e automatos utilizando LEGO Mindstorm e Arduino. Aprendi a manipular Impressoras 3D assim como fabricar desenshor 3D com Tnkercad. Aprendi também a manipular a Máquina de Corte e Gravação a Laser.",
      letterColor:"rgba(255, 8, 0, 0.445)",
      fontColor:"rgb(97, 7, 6)"
    },
    {
      id: "4",
      position: "Pesquisador Voluntário ",
      office: "GERE",
      period:"08-2018 á 06-2020",
      text: "Atuei como pesquisador na aréa de Robótica Educacional e automação. Montei e aprendi sobre circuitos elétricos e sobre componentes eletrônicos. Denvolvia também os algoritmos para o controle de sistemas embarcados como Arduino e PICs. Desenvolvi durante esse tempo trbalhos que envolviam a captação de informação através de sensores e reações a essas infomações. Desenvolvi tambem aplicativos Android que se comunicava com esses sistemas embarcados através via Bluetooth e Wif. Durante esse período trabalhei também como editor de videos para o Youtube utiliando SonyVegas, Audacity e outros. Realizei oficinas de Robótica Educacional e desenvolvimento de jogos. Por último publiquei artigos científicos sobre os projetos desenvolvidos e sobre as oficinas ministradas.",
      letterColor:"rgb(0, 255, 255, 0.445)",
      fontColor:"rgb(0, 129, 129)"
    },
    {
      id: "5",
      position: "Bolsista de Iniciação Científica",
      office: "PROGEX",
      period:"08-2019 á 08-2020",
      text: "Atuei como ministrante de oficinas de Robótica Educacional com foco na placa Arduino. Escrevi e apresentei artigos sobre as experiências das oficinas.",
      letterColor:"rgb(238, 255, 0, 0.445)",
      fontColor:"rgb(135, 145, 6)"
    },
  ]);
  const [projectsIa, setProjectsIa] = useState([
    {
      id: "1",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
    {
      id: "2",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
    {
      id: "3",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
    {
      id: "4",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
    {
      id: "5",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
  ]);
  const [projectsWeb, setProjectsWeb] = useState([
    {
      id: "1",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Portifolio ReactJS",
      text: "Portfólio que contempla minhas aréas de conhecimento e experiências. Desenvolvido utilizando ReactJS, HTML5, CSS3 e outras ferramentes."
    },
    {
      id: "2",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
    {
      id: "3",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
    {
      id: "4",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
    {
      id: "5",
      linkImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0e3fd78476003.5ca5d1940a8de.png",
      title: "Em Breve",
      text: ""
    },
  ]);
  const [sessionProject,setSessionProject] = useState([
    {
      id: "1",
      linkImage: "url(https://rhamapush.files.wordpress.com/2019/05/internet.jpg)",
      title: "WEB",
      projects: projectsWeb,
    },
    {
      id: "2",
      linkImage: "url(https://rhamapush.files.wordpress.com/2019/05/internet.jpg)",
      title: "IA",
      projects: projectsIa,
    },
  ]);
  
  return (
    <DndProvider backend={HTML5Backend}>
      <AnimatePresence>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header/>
                <main >
                  <About posts={postsAbout}/>
                  <Technology technologies={postsTechnology}/>
                  <Experience letters={postsExperience}/>
                  <Projects projects={sessionProject}/>
                </main>
              <Footer/>
            </>
          }>
          </Route>
          <Route path='/test' element={
            <>
              <Test/>
            </>
          }></Route>
        </Routes>
      </Router> 
      </AnimatePresence>
    </DndProvider>
  );
}

export default App
