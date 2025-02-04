import './App.css';
import Navbar from '../src/components/pages/Navbar';
import { Banner } from '../src/components/pages/Banner';
import Tagline from '../src/components/pages/Tagline';
import { About } from './components/pages/About';
import { Settings } from './components/pages/Settings';
import { Projects } from './components/pages/Projects';
import { Footer } from './components/pages/Footer';
import  Contact  from './components/pages/Contact';
import { useState } from "react";

const translations = {
  pt: {
    navbar: {
      logo: "/KETHELYN/",
      home: "Início",
      Journey: "Jornada",
      About: "Sobre",
      habilid: "Habilidades",
      project:"Projetos",
      contact: "Contato",
      btn:"vamos conversar",
    },
    banner:{
      welcome: "Bem vindo ao meu portfólio",
      developer: "Desenvolvedora",
      content: `Transformo suas ideias em projetos reais por meio de código. 
      Vamos trabalhar juntos para tirar sua visão do papel`,
    },
    tagline: [
        { key: 1, 
          date: "2021", 
          title: "Início na Programação", 
          description: `Comecei a estudar Python com o 
          Professor Gustavo Guanabara(curso em vídeo)`,
          image: "/assets/img/python.png",
          },
        { key: 2, 
          date: "2022", 
          title: "Criação de sites", 
          description: `Nesse ano aprendi a usar HTML, CSS e JavaScripts,
          e já comecei a fazer meus primeiros sites`,
          image:"/assets/img/html.png"},
        { key: 3, 
          date: "2023", 
          title: "Entrei na Faculdade",
          description: `Entrei na faculdade Cruzeiro do Sul 
          no curso Engenharia da computaçõa`,
          image:"/assets/img/diploma.png", },
        { key: 4, 
          date: "2023", 
          title: "Novos aprendizados em Back-end!",
          description: `Estudei Django e React, aprendi muito sobre o Back-end e banco de dados`,
          image:"/assets/img/django.png", },
        { key: 5, 
          date: "2025", 
          title: "A procura de um estagio!", 
          description: `Estou procurando uma empresa com vontade de crescer cada 
          vez mais e inovar o mundo da tecnologia! E ai vamos trabalhar juntos?`,
          image:"/assets/img/estagio.png",},
      ],
    DownloadButton:"📄 Baixar Currículo",

    About:{
      name:"KETHELY CAVALARI",
      about: `Sou um desenvolvedor Full-Stack apaixonado por programação, com mais de dois anos de experiência criando projetos diversos.
                Atualmente, estudo Engenharia da Computação na Cruzeiro do Sul e estou sempre buscando aprimorar minhas habilidades, 
                explorando novas tecnologias e desafios.

                Meu objetivo é atuar profissionalmente com aquilo que mais gosto: programação e desenvolvimento de sistemas. 
                Estou aberto a novas oportunidades e sempre em busca de aprendizado e inovação.`,
      habilid: "Principais Habilidades",
      p1: "Criação de APIs e sistemas dinâmicos",
      p2:"Gerenciamento de banco de dados",
      p3:"Hospedagem e deploy de aplicações",
      p4:"Animações e interatividade com CSS e JavaScript",},
    Settings:"HABILIDADES",
    Projects:{
      project: "Projetos",
      subscrib: "Resumo dos meus projetos e os mais relevantes no momento",
      everyone: "Todos",
      subscrib1: `Site de concientização da vacina, com sistema de login, marcação de vacinação e lembrete via e-mail`,
      subscrib2: `Blog de postagens, com sistema de login, perfil, foto de perfil, 
      postagem, data da postagem, sem contar que os outros usuarios podem ver seus posts`,
      subscrib3: `Banco feito com apenas Python, com as seguintes funções, depósito, saque, extrato, 
      criar usuário, criar conta corrente e listar suas contas.`,
      subscrib4: `Sistema de biblioteca com funcinalidade de listar livros, cadastrar livros, atualizar livros e deletar livros`,
      subscrib5: `Sistema de lava rápido com cadastro de carros, cor, placa, modelo, tipo de serviço, 
      listagem de carros e validação de placa única`,
  },
    Contact:{
      title:"Envie uma Mensagem",
      name:"nome",
      lastname:"Sobre nome",
      email:"E-mail",
      phone:"Telefone",
      message:"Sua mensagem",
      contact: "Contato",
      btn:"Enviar",
    }
  },

  en: {
    navbar: {
      logo: "/KETHELYN/",
      home: "Home",
      Journey: "Journey",
      About: "About",
      habilid: "Skills",
      project:"Project",
      btn:"let's Connect",
    },
    banner:{
      welcome: "Welcome to my Website",
      developer: "Developer",
      content:`I turn your ideas into real projects through code. 
      Let's work together to bring your vision to life`,
    },
    tagline: [
      { key: 1, 
        date: "2021", 
        title: "Start in Programming", 
        description: `I started studying Python with Professor Gustavo Guanabara (Curso em vídeo)`,
        image: "/assets/img/python.png",},
      {key: 2, 
        date: "2022", 
        title: "Website creation", 
        description: `This year I learned how to use HTML, CSS and JavaScripts,
        and I've already started making my first websites.`,
        image:"/assets/img/html.png"},
      { key: 3, 
        date: "2023", 
        title: "I entered college",
        description: `I entered Cruzeiro do Sul College
        in the Computer Engineering course`,
        image:"/assets/img/diploma.png", },
      { key: 4, 
        date: "2023", 
        title: "New learnings in Back-end!",
        description: `I studied Django and React, learned a lot about the Back-end and database`,
        image:"/assets/img/django.png", },
      { key: 5, 
        date: "2025", 
        title: "Looking for an internship!", 
        description: `I'm looking for a company that wants to grow more and more 
        and innovate the world of technology! Let's work together!`,
        image:"/assets/img/estagio.png",
      },
    ],
    DownloadButton:"📄 Download Resume",
    About:{
      name:"KETHELY CAVALARI",
      about: `I am a Full-Stack developer passionate about programming, with more than two years of experience creating diverse projects.
              Currently, I am studying Computer Engineering at Cruzeiro do Sul and I am always looking to improve my skills,
              exploring new technologies and challenges.

              My goal is to work professionally with what I like the most: programming and systems development.
              I am open to new opportunities and always looking for learning and innovation.`,
      habilid: "Key Skills",
      p1: "Creation of APIs and dynamic systems",
      p2:"Database Management",
      p3:"Application hosting and deployment",
      p4:"Animations and interactivity with CSS and JavaScript",
    },
    Settings:"SKILLS",
    Projects:{
        project: "Projects",
        subscrib: "Summary of my projects and the most relevant ones at the moment",
        everyone: "everyone",
        subscrib1: `Vaccine awareness website, with a login system, vaccination appointment and reminder via email`,
        subscrib2: `Blog posts, with login system, profile, profile picture, post,
        date of posting, not to mention that other users can see your posts`,
        subscrib3: `Bank made with only Python, with the following functions, deposit, withdrawal,
        statement, create user, create checking account and list your accounts`,
        subscrib4: `Library system with functionality to list books, register books, update books and delete books`,
        subscrib5: `Car wash system with car registration, color, license plate, model, type of service, 
        car listing and single license plate validation.`,
    },
    Contact:{
      title:"Send a Message",
      name:"First Name",
      lastname:"Last Name",
      email:"E-mail",
      phone:"Your Phone",
      message:"Your Message",
      btn:"Send"
    }
  }
};

function App() {
  const [language, setLanguage] = useState("pt");

  const changeLanguage = (lang) => {
    console.log("Mudando para:", lang); 
    setLanguage(lang);
  };

  return (
    <div className="App">
      {/* Passando a função changeLanguage para a Navbar */}
      <Navbar texts={translations[language].navbar} 
        changeLanguage={changeLanguage}
        language={language} />
      <Banner texts={translations[language].banner} 
      language={language} 
      translations={translations}/>
      <Tagline timeline={translations[language].tagline} />
      <About texts={translations[language].About}/>
      <Settings texts={translations[language].Settings}/>
      <Projects texts={translations[language].Projects}/>
      <Contact texts={translations[language].Contact}/>
      <Footer />
    </div>
  );
}

export default App;
