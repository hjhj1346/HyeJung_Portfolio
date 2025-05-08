import React, { useEffect, useState } from 'react'
import ic_name from '../assets/ic_name.png'
import ic_birth from '../assets/ic_birth.png'
import ic_address from '../assets/ic_address.png'
import ic_tel from '../assets/ic_tel.png'
import ic_email from '../assets/ic_email.png'
import ic_school from '../assets/ic_school.png'
import link from '../assets/link.png'
import frontend2 from '../assets/frontend2.png'
import tools from '../assets/tools.png'
import SuwonPj from '../components/projects/SuwonPj'
import SeongbukPj from '../components/projects/SeongbukPj'
import DonguramiPj from '../components/projects/DonguramiPj'
import EnergyPj from '../components/projects/EnergyPj'
import GwangsanPj from '../components/projects/GwangsanPj'
import DobanjangPj from '../components/projects/DobanjangPj'
import nubiz from '../assets/nubiz.png'
import pageUp from '../assets/page-up.svg'
const Mainpage = ({ aboutMeRef, skillsRef, certificateRef, projectsRef, careerRef }: {
  aboutMeRef: React.RefObject<HTMLDivElement | null>,
  skillsRef: React.RefObject<HTMLDivElement | null>,
  certificateRef: React.RefObject<HTMLDivElement | null>,
  projectsRef: React.RefObject<HTMLDivElement | null>,
  careerRef: React.RefObject<HTMLDivElement | null>
}) => {
  const [activeTab, setActiveTab] = useState<string>('1');

  return (
    <div>
      <article className="visual">
        <div className="visual_inner">
          <div className="visual_tit">
            - 김혜정 -
            <br />
            경력 웹 프론트 개발자 포트폴리오
          </div>
          <hr className="visual_divider" />
          <div className="visual_des">
            안녕하세요.
            <br />
            React 웹 개발자, 김혜정입니다.
          </div>
          {/* <div className="btn_more">더 알아보기 ↓</div> */}
        </div>
      </article>
      <article className="aboutme" ref={aboutMeRef}>
        <div className="aboutme_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              <img src="images/link.png" alt="" />
            </div>
            <div className="comm_tit_txt">ABOUT ME</div>
          </div>
          <ul className="info">
            <li className="name">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_name} alt="" />
                </div>
                <div className="txt">
                  <h4>이름</h4>
                  <p>김혜정</p>
                </div>
              </div>
            </li>
            <li className="birth">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_birth} alt="" />
                </div>
                <div className="txt">
                  <h4>생년월일</h4>
                  <p>94.01.29</p>
                </div>
              </div>
            </li>
            <li className="address">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_address} alt="" />
                </div>
                <div className="txt">
                  <h4>주소</h4>
                  <p>서울특별시 금천구 범안로 12길, 63-6</p>
                </div>
              </div>
            </li>
            <li className="tel">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_tel} alt="" />
                </div>
                <div className="txt">
                  <h4>연락처</h4>
                  <p>010-8585-6972</p>
                </div>
              </div>
            </li>
            <li className="email">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_email} alt="" />
                </div>
                <div className="txt">
                  <h4>이메일</h4>
                  <p>hjhjkk1346@gmail.com</p>
                </div>
              </div>
            </li>
            <li className="school">
              <div className="info_inner">
                <div className="img">
                  <img src={ic_school} alt="" />
                </div>
                <div className="txt">
                  <h4>학력</h4>
                  <p>광주대학교 식품영양학과(졸업)</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <article className="skills" ref={skillsRef}>
        <div className="skills_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              {/* <img src={link} alt="" /> */}
            </div>
            <div className="comm_tit_txt" style={{ borderBottomColor: '#000000' }}>SKILLS</div>
          </div>
          <ul className="skill_info">

            <li>
              <div className="skill_tit">Frontend</div>
              <img src={frontend2} alt="" />
            </li>
            <li>
              <div className="skill_tit">Tools</div>
              <img src={tools} alt="" />
            </li>
          </ul>
        </div>
      </article>
      <article className="certificate" ref={certificateRef}>
        <div className="certificate_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              {/* <img src="images/link2.png" alt="" /> */}
            </div>
            <div className="comm_tit_txt" style={{ color: '#ffffff', borderBottomColor: '#6c757d' }}>CERTIFICATE & EDUCATION</div>
            {/* <div className="comm_tit_txt" style={{ color: '#ffffff', borderBottomColor: '#6c757d' }}>자격증 & 교육</div> */}
          </div>
          <ul className="certificate_list">
            <li>
              <h3>컴퓨터 활용 능력 2급</h3>
              <h4>대한상공회의소</h4>
              <p>2020.10.13</p>
            </li>
            <li>
              <h3>K-디지털 빅데이터 분석서비스 개발자 과정</h3>
              <h4>광주 스마트 인재 개발원</h4>
              <p>2021.11 ~ 2022.04</p>
            </li>
            {/* <li>
              <h3>SQL 개발자 (SQLD)</h3>
              <h4>한국데이터산업진흥원</h4>
              <p>2023.04.14</p>
            </li> */}
          </ul>
        </div>
      </article>
      <div className="project-container" ref={projectsRef}>
        {/* 탭 버튼 */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "1" ? "active" : ""}`}
            onClick={() => setActiveTab("1")}
          >
            Project01
          </button>
          <button
            className={`tab ${activeTab === "2" ? "active" : ""}`}
            onClick={() => setActiveTab("2")}
          >
            Project02
          </button>
          <button
            className={`tab ${activeTab === "3" ? "active" : ""}`}
            onClick={() => setActiveTab("3")}
          >
            Project03
          </button>
          <button
            className={`tab ${activeTab === "4" ? "active" : ""}`}
            onClick={() => setActiveTab("4")}
          >
            Project04
          </button>
          <button
            className={`tab ${activeTab === "5" ? "active" : ""}`}
            onClick={() => setActiveTab("5")}
          >
            Project05
          </button>
          <button
            className={`tab ${activeTab === "6" ? "active" : ""}`}
            onClick={() => setActiveTab("6")}
          >
            Project06
          </button>
        </div>

        {/* 탭 컨텐츠 */}
        <div className="tab-content">
          {activeTab === "1" ? <SuwonPj /> : activeTab === "2" ? <SeongbukPj /> : activeTab === "3" ? <DonguramiPj /> : activeTab === "4" ? <EnergyPj /> : activeTab === "5" ? <GwangsanPj /> : activeTab === "6" ? <DobanjangPj /> : <></>}
        </div>
      </div>
      <article className="career" ref={careerRef}>
        <div className="career_inner">
          <div className="comm_tit">
            <div className="comm_tit_img">
              <img src="images/link.png" alt="" />
            </div>
            <div className="comm_tit_txt" style={{ borderBottomColor: '#ccc' }}>CAREER</div>
          </div>
          <div className="career_info">
            <div className="career_info_inner">
              <div className="career_img">
                <div className="career_img_inner">
                  <img src={nubiz} alt="" />
                </div>
              </div>
              <div className="career_txt">
                <div className="career_tit">(주) 엔유비즈</div>
                <div className="career_period">2022.06.07 ~ 2024.11.30</div>
                <div className="career_description">
                광주광역시에 위치한 응용 소프트웨어 개발 및 공급 기업 ㈜엔유비즈에서 <b>프론트엔드 개발자</b>로 <b>2년 6개월</b>간 근무하였습니다.
                  <br /><br />
                  다음과 같은 기술을 사용하여 다양한 프로젝트를 수행하였습니다.<br />
                  {/* HTML로 된 퍼블리싱 코드를 React 및 TypeScript로 변환하고 컴포넌트 단위로 분리하여 웹 화면 구현, WebView 연동, API 통신, 성능 최적화 및 유지보수를 주로 담당하였습니다. */}
                  1.&nbsp;&nbsp;퍼블리싱된 <b>HTML코드</b>를 <b>React</b>와 <b>TypeScript</b> 기반으로 재구성하였습니다.<br/>
                  2.&nbsp;&nbsp;<b>컴포넌트 단위</b>로 <b>UI를 모듈화</b>하여 <b>웹 화면</b>을 구현하였습니다.<br/>
                  3.&nbsp;&nbsp;<b>모바일 환경</b>을 고려한 <b>WebView 연동</b>을 구현하였습니다.<br/>
                  4.&nbsp;&nbsp;<b>API 통신 기능</b>을 개발하고 연동하였습니다.<br/>
                  5.&nbsp;&nbsp;<b>성능 최적화 및 유지보수</b>를 하였습니다.
                  
                  <br /><br />
                  {/* 다양한 프로젝트를 수행하며 웹과 앱 간 연계 구조를 깊이 이해하게 되었고, 성능 최적화와 유지보수를 고려한 효율적인 코드 작성 역량을 향상시켰습니다. */}
                  다양한 프로젝트를 수행하며 웹과 앱 간의 연계 구조를 깊이 이해하게 되었고, 확장성과 유지보수성을 고려한 클린 코드 작성 능력을 발전시켰습니다. 또한, 협업 과정에서 기획자 및 백엔드 개발자와의 원활한 커뮤니케이션 역량도 함께 강화되었습니다.
                  <br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="pageup">
        <img src={pageUp}/>
      </div>
    </div>
  )
}

export default Mainpage