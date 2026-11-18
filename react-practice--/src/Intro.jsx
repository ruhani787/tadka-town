import React from "react";
import Section1 from "./section1";
function Intro() {
  return (
    <div>
      <div className="text-center mt-35 justify-items-center ">
        <h1>Introduction</h1>
        <p className="w-200">
          Hello! I'm Ruhani,a passionate and dedicated aspiring software
          developer with a strong interest in web development ,artificial
          intelligence,data science,and cyberesecurity. I completed my bachelor
          of Vocation{" "}
          <span className="bg-yellow-200 rounded">
            {" "}
            (B.Voc.) in software development
          </span>{" "}
          and am currently pursuing my{" "}
          <span className="bg-yellow-200 rounded">
            M.Sc. in artificial intelligence and data science{" "}
          </span>
          from sri guru teg bahadur khalsa collage,Anandpur Sahib. I enjoy
          designing and developing responsive,user-friendly websites using
          HTML,CSS, JavaScript,react,and python.i belive in continuous learning
          and regularly improve my skills by building projects,exploring new
          technologies,and solving programing challenges. Along with a web
          development,i am also learning cyber security,which has strengthened
          my understanding of digital security and safe computing practice.my
          aim is to combin my knowledge of software development,AI,data
          sciencex,and cybersecurity to build innovative and secure
          applications. I am a quick learner ,a hardworking individual , and
          always eager to take on new challenges that help me grow both
          personally and professionaly . my long term goal is to became a
          skilled full stack developer and AI professional while contributing to
          imactful real world projects.
        </p>
      </div>
      {/* profile section  */}
      <div className="bg-[#66ae66] h-150 mt-15 content-center flex ">
        <Section1 
          img1="/photo4.webp"
          img2="/photo3.webp"
          name="ruhani"
          work="Teacher"
          details=" Amet consectetur adipisicing elit. Voluptatum, sapiente maiores repellat nulla nam consectetur corrupti. Nulla quaerat architecto nobis!"/>
        <Section1
          img1="/photo.jpg"
          img2="/photo2.jpg"
          name="jenny"
          work="Photographer"
          details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sapiente maiores repellat nulla nam consectetur corrupti. Nulla quaerat architecto nobis!"
        />
        <Section1
         img1="/photo3.webp"
          img2="/photo4.webp"
          name="jiya"
          work="chef"
          details="  Dolor sit amet consectetur adipisicing elit. Voluptatum, sapiente maiores repellat nulla nam consectetur corrupti. Nulla quaerat architecto nobis!" />
      </div>
      {/* transition practice  */}
      <div>
        <button className="m-20 bg-amber-300 p-2 transition duration-1000 hover:scale-210 hover:rotate-60 hover:opacity-50 hover:animate-bounce">
          Click me
        </button>
      </div>
      {/* responsive practice  */}
      <div>
        <div className="h-50 w-50 m-20 border-2 bg-amber-600 md:bg-amber-950 sm:bg-amber-100"></div>
      </div>
     
    </div>
  );
}

export default Intro;
