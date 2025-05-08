import React, { useEffect, useState } from 'react'
import hamburger from '../assets/hamburger.svg'


const Headers = ({aboutMeRef,skillsRef,certificateRef,projectsRef,careerRef}:{
    aboutMeRef: React.RefObject<HTMLDivElement | null>,
    skillsRef: React.RefObject<HTMLDivElement | null>,
    certificateRef: React.RefObject<HTMLDivElement | null>,
    projectsRef: React.RefObject<HTMLDivElement | null>,
    careerRef: React.RefObject<HTMLDivElement | null>
}) => {
    const [toggleOn,setToggleOn]=useState<boolean>(false)
   // 클릭 시 해당 섹션으로 스크롤 이동
   const handleScrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" }); 
   
  };
    return (
        <header>
            <div className="header_inner">
                <div className="logo">HyeJung's Portfolio</div>
                <ul className="gnb">
                    <li onClick={() => handleScrollToSection(aboutMeRef)}>
                        <a className="btn_aboutme">About me</a>
                    </li>
                    <li onClick={() => handleScrollToSection(skillsRef)}>
                        <a className="btn_skills">Skills</a>
                    </li>
                    <li onClick={() => handleScrollToSection(certificateRef)}>
                        <a className="btn_certificate">Certificate & Education</a>
                    </li >
                    <li onClick={() => handleScrollToSection(projectsRef)}>
                        <a className="btn_projects">Projects</a>
                    </li>
                    <li onClick={() => handleScrollToSection(careerRef)}>
                        <a className="btn_career">Career</a>
                    </li>
                </ul>
                <div className="mobile_menu" onClick={()=> setToggleOn(!toggleOn)}>
                    <img src={hamburger} alt="" />
                </div>
                <ul className={`mobile_gnb ${toggleOn ? 'on':''}`}>
                <li onClick={() => {handleScrollToSection(aboutMeRef);setToggleOn(!toggleOn)}}>
                        <a className="btn_aboutme">About me</a>
                    </li>
                    <li onClick={() => {handleScrollToSection(skillsRef); setToggleOn(!toggleOn)}}>
                        <a className="btn_skills">Skills</a>
                    </li>
                    <li onClick={() => {handleScrollToSection(certificateRef); setToggleOn(!toggleOn)}}>
                        <a className="btn_certificate">Certificate & Education</a>
                    </li >
                    <li onClick={() => {handleScrollToSection(projectsRef); setToggleOn(!toggleOn)}}>
                        <a className="btn_projects">Projects</a>
                    </li>
                    <li onClick={() => {handleScrollToSection(careerRef); setToggleOn(!toggleOn)}}>
                        <a className="btn_career">Career</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Headers