import React, { useState } from 'react'
import img1 from '../../assets/project/두_1.png'
import img2 from '../../assets/project/두_2.png'
import img3 from '../../assets/project/두_3.png'
import img4 from '../../assets/project/두_4.png'

const DobanjangPj = () => {
  const Imgs = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < Imgs.length - 1) {
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
            <div className="project_tit">우리동네 두반장</div>
            <div className="project_period">
              2022.07 ~ 2022.12
              <span> (4인 팀 프로젝트)</span>
            </div>
            <div className="project_info">
              <div className="project_img">
                <div className="slider-container">
                  <ul
                    className="slider-wrapper"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {Imgs.map((img, index) => (
                      <li key={index} className="slider-item">
                        <a href={img.src} data-lightbox="project1">
                          <img src={img.src} alt={img.alt} />
                        </a>
                      </li>
                    ))}
                  </ul>

      
                  <div className="slider-pagination">
                    {Imgs
                      // .slice(
                      //   Math.max(0, Math.min(currentIndex - 2, Imgs.length - 5)), // 시작 인덱스
                      //   Math.min(Imgs.length, Math.max(currentIndex + 3, 5)) // 끝 인덱스
                      // )
                      .map((_, index) => {
                        // const actualIndex = Math.max(0, Math.min(currentIndex - 2, Imgs.length - 5)) + index;
                        // const distance = Math.abs(index - 2); // 가운데(2)와의 거리
                        // const scale = 1 - distance * 0.2; // 가운데는 1, 양옆은 점점 작아짐 (1, 0.8, 0.6 등)

                        const startIndex = Math.max(0, Math.min(currentIndex - 2, Imgs.length - 4));
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
           
                  <button className="slider-button slider-button-prev" onClick={handlePrev} disabled={currentIndex === 0}>
                    &lt;
                  </button>
                  <button className="slider-button slider-button-next" onClick={handleNext} disabled={currentIndex === Imgs.length - 1}>
                    &gt;
                  </button>


                </div>
              </div>
            </div> 
            <div className="project_des">
              <div className="project_txt2">
                <div className="project_txt2_1">개요</div>
                <div className="project_txt2_2">주민들이 주도적으로 문제를 해결할 수 있도록 지원하는 디지털 플랫폼 구축
                  <br />마을 공유공간 정보를 제공하고 예약할 수 있는 스마트 시스템 개발
                </div>

              </div>
              <div className="project_txt2">
                <div className="project_txt2_1">주요 역할 및 담당 업무</div>
                <div className="project_txt2_2">
                  <b>&bull; 소셜 로그인 기능 구현</b><br />
                  카카오, 네이버 등의 소셜 로그인 기능 개발 및 연동<br />
                  사용자 인증 및 보안 강화<br />
                  <b>&bull; 생활지도 기능 구현</b><br />
                  Kakao Map API를 활용하여 마을 내 주요 위치를 표시하는 생활지도 기능 개발<br />
                  지도 상에서 정보 제공 및 사용자 편의성 향상<br />
                  <b>&bull; 예약 일정 관리 기능 개발</b><br />
                  FullCalendar 라이브러리를 활용하여 공유공간 예약 및 일정 관리 기능 구현<br />
                  예약 현황 확인 및 일정 조율 기능 제공<br />
                  <b>&bull; 카카오 공유하기 기능 구현예약 일정 관리 기능 개발</b><br />
                  카카오톡 공유하기 API를 활용하여 사용자 간 정보 공유 기능 추가<br />
                  예약 및 게시글을 간편하게 공유할 수 있도록 지원 <br />

                </div>
              </div>
              <div className="project_txt2">
                <div className="project_txt2_1">Stack</div>
                <div className="project_txt2_2">
                  <b>&bull; Frontend:</b> React, TypeScript, JavaScript, HTML, CSS(SCSS)<br />
                  <b>&bull; Networking:</b> Axios<br />
                  <b>&bull; Map API:</b> Kakao Map API<br />
                  <b>&bull;Calendar:</b> FullCalendar<br />
                  <b>&bull;Authentication:</b> 카카오, 네이버 소셜 로그인<br />
                  <b>&bull; Version Control:</b> Git, GitLab, Sourcetree<br />
                  <b>&bull; Collaboration Tools:</b> Nas, Google sheet
                </div>
              </div>
              <div className="project_txt2">
                <div className="project_txt2_1">성과 및 기여도</div>
                <div className="project_txt2_2">
                  &bull; 카카오 및 네이버 소셜 로그인 연동으로 사용자 접근성 향상<br />
                  &bull; Kakao Map API를 활용한 생활지도 기능 제공으로 지역 정보 접근성 개선<br />
                  &bull; FullCalendar를 통한 예약 일정 관리 시스템 구축으로 사용자 편의성 증대<br /> 
                  &bull;카카오 공유하기 기능 구현으로 정보 공유 활성화 및 사용자 경험 개선<br />
                </div>
              </div>
            </div>
            <div className="btn_detail"><a href='https://www.donggu.kr/dobanjang/' target='_blank' style={{ color: 'white' }}>자세히 보기&nbsp;&nbsp;&nbsp;→</a></div>
          </li>

        </ul>
      </div>
    </article>
  )
}

export default DobanjangPj