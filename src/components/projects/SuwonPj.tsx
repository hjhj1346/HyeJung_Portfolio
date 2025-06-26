import React, { useState } from 'react'
import img1 from '../../assets/project/행정_로그인.png'
import img1_2 from '../../assets/project/기관_통합로그인.png'
import img2 from '../../assets/project/행정_메인.png'
import img3 from '../../assets/project/행정_신청,접수 목록.png'
import img4 from '../../assets/project/행정_신청,접수 팝업.png'
import img5 from '../../assets/project/행정_신청,접수_초기판단.png'
import img6 from '../../assets/project/행정_돌봄계획 목록.png'
import img7 from '../../assets/project/행정_돌봄계획_현장평가.png'
import img8 from '../../assets/project/행정_돌봄계획_계획수립.png'
import img9 from '../../assets/project/행정_돌봄계획_계획수립 팝업.png'
import img10 from '../../assets/project/행정_ 서비스 목록.png'
import img11 from '../../assets/project/기관_서비스_조정신청.png'
import img12 from '../../assets/project/기관_서비스_수기등록 팝업.png'
import img13 from '../../assets/project/게시판 목록.png'
import img14 from '../../assets/project/게시판 상세.png'
const SuwonPj = () => {
    const SuwonImgs = [
        { src: img1, alt: "Image 1" },
        { src: img1_2, alt: "Image 1_2" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
        { src: img4, alt: "Image 4" },
        { src: img5, alt: "Image 5" },
        { src: img6, alt: "Image 6" },
        { src: img7, alt: "Image 7" },
        { src: img8, alt: "Image 8" },
        { src: img9, alt: "Image 9" },
        { src: img10, alt: "Image10" },
        { src: img11, alt: "Image11" },
        { src: img12, alt: "Image12" },
        { src: img13, alt: "Image13" },
        { src: img14, alt: "Image14" },
    
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        if (currentIndex < SuwonImgs.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      };
  return (
    <article className="projects">
    <div className="projects_inner">
      <div className="comm_tit">
        <div className="comm_tit_img">
          <img src="images/link2.png" alt="" />
        </div>
        <div className="comm_tit_txt" style={{ color: '#fff', borderBottomColor: '#ccc' }}>PROJECTS</div>
      </div>
      <ul className="project_list">
        <li>
          <div className="project_tit">수원새빛돌봄</div>
          <div className="project_period">
            2024.02 ~ 2024.11
            <span> (7인 팀 프로젝트)</span>
          </div>
          <div className="project_info">
            <div className="project_img">
              <div className="slider-container">
                <ul
                  className="slider-wrapper"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {SuwonImgs.map((img, index) => (
                    <li key={index} className="slider-item">
                      <a href={img.src} data-lightbox="project1">
                        <img src={img.src} alt={img.alt} />
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Pagination */}
               <div className="slider-pagination">
                  {SuwonImgs
                    // .slice(
                    //   Math.max(0, Math.min(currentIndex - 2, SuwonImgs.length - 15)), // 시작 인덱스
                    //   Math.min(SuwonImgs.length, Math.max(currentIndex + 3, 15)) // 끝 인덱스
                    // )
                    .map((_, index) => {
                      // const actualIndex = Math.max(0, Math.min(currentIndex - 2, SuwonImgs.length - 15)) + index;
                      // const distance = Math.abs(index - 2); // 가운데(2)와의 거리
                      // const scale = 1 - distance * 0.2; // 가운데는 1, 양옆은 점점 작아짐 (1, 0.8, 0.6 등)
                      
                      const startIndex = Math.max(0, Math.min(currentIndex - 2, SuwonImgs.length - 15));
                      const actualIndex = startIndex + index;
                      const isCurrent = actualIndex === currentIndex;

                      return (
                        <span
                          key={actualIndex}
                          className={`dot ${actualIndex === currentIndex ? "active" : ""}`}
                          onClick={() => setCurrentIndex(actualIndex)}
                          style={{
                            // transform: `scale(${Math.max(scale, 0.5)})`, // 최소 크기 제한
                            transform: `scale(${isCurrent ? 1.2 : 1})`,
                            transition: "transform 0.3s ease",
                          }}
                        ></span>
                      );
                    })}
                </div> 
                {/* Navigation Buttons */}
                <button className="slider-button slider-button-prev" onClick={handlePrev} disabled={currentIndex === 0}>
                  &lt;
                </button>
                <button className="slider-button slider-button-next" onClick={handleNext} disabled={currentIndex === SuwonImgs.length - 1}>
                  &gt;
                </button>


              </div>
            </div>
          </div>
          <div className="project_des">
            <div className="project_txt2">
              <div className="project_txt2_1">개요</div>
              <div className="project_txt2_2">공무원의 돌봄업무 처리 전 과정을 전산화하여 효율성을 극대화한 플랫폼 구축<br />
                웹 기반의 관리 시스템과 현장 업무 처리를 지원하는 모바일 애플리케이션 개발
              </div>

            </div>
            <div className="project_txt2">
              <div className="project_txt2_1">주요 역할 및 담당 업무</div>
              <div className="project_txt2_2">
                <b>&bull; 프론트엔드 개발</b><br />
                React 및 TypeScript를 활용한 웹 화면 구현<br />
                상태 관리 및 비즈니스 로직 적용<br />
                UI/UX 개선 및 반응형 웹 개발<br />
                WebView를 활용한 모바일 환경 대응<br />
                <b>&bull; 로그인 기능 구현</b><br />
                - 웹 로그인 : 세션 기반 로그인 방식 적용, SSO 로그인 구현<br />
                로그인 시 세션을 생성하고, 인증 정보를 유지하여 사용자의 지속적인 접근 관리<br />
                브라우저 종료 시 세션 만료 처리 및 보안 강화<br />
                - 앱 로그인 : 토큰 기반 자동 로그인 기능 구현 (JWT 활용)<br />
                최초 로그인 시 액세스 토큰과 리프레시 토큰을 발급받아 앱 내 저장<br />
                앱 실행 시 저장된 토큰을 이용한 자동 로그인 처리<br />
                토큰 만료 시 자동 갱신 로직 적용<br />
                <b>&bull; Web - App 브릿지 연동</b><br />
                WebView와 React-Native 간의 데이터 송수신 처리<br />
                JavaScript 인터페이스를 활용한 앱 기능 호출 (예: 카메라, 앨범, 서명 작성, 파일 업로드 등)<br />
                PostMessage 및 브릿지 인터페이스를 이용한 양방향 통신 구현<br />
                앱 내 특정 이벤트 발생 시 웹 화면 갱신 및 데이터 반영<br />
              </div>
            </div>
            <div className="project_txt2">
              <div className="project_txt2_1">Stack</div>
              <div className="project_txt2_2">
                <b>&bull; Frontend:</b> React, TypeScript, JavaScript, HTML, CSS(SCSS)<br />
                <b>&bull; Networking:</b> Axios<br />
                <b>&bull; Version Control:</b> Git, GitLab, Sourcetree<br />
                <b>&bull; Collaboration Tools:</b> Nas, Google sheet
              </div>
            </div>
            <div className="project_txt2">
              <div className="project_txt2_1">성과 및 기여도</div>
              <div className="project_txt2_2">
                &bull; 기존 오프라인 중심의 돌봄업무를 전산화하여 공무원의 업무 효율성 증대<br />
                &bull; 사용자 친화적인 UI/UX를 고려한 웹 화면 개발<br />
                &bull; 유지보수 및 성능 개선을 통해 안정적인 서비스 제공 지원<br />
              </div>
            </div>
          </div>
          <div className="btn_detail"><a href='https://www.suwon.go.kr:22896/care_portal/' target='_blank' style={{ color: 'white' }}>자세히 보기&nbsp;&nbsp;&nbsp;→</a></div>
        </li>

      </ul>
    </div>
  </article>
  )
}

export default SuwonPj