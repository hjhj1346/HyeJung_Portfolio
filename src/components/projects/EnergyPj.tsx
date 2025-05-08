import React, { useState } from 'react'
import img1 from '../../assets/project/에너지_1.png'
import img2 from '../../assets/project/에너지_2.png'
import img3 from '../../assets/project/에너지_3.png'
import img4 from '../../assets/project/에너지_4.png'
import img5 from '../../assets/project/에너지_5.png'


const EnergyPj = () => {
    const Imgs = [
        { src: img1, alt: "Image 1" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
        { src: img4, alt: "Image 4" },
        { src: img5, alt: "Image 5" },
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
                        <div className="project_tit">에너지 전환마을 플랫폼</div>
                        <div className="project_period">
                            2023.04 ~ 2023.06
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
                                            //     Math.max(0, Math.min(currentIndex - 2, Imgs.length - 5)), // 시작 인덱스
                                            //     Math.min(Imgs.length, Math.max(currentIndex + 3, 5)) // 끝 인덱스
                                            // )
                                            .map((_, index) => {
                                                // const actualIndex = Math.max(0, Math.min(currentIndex - 2, Imgs.length - 5)) + index;
                                                // const distance = Math.abs(index - 2); // 가운데(2)와의 거리
                                                // const scale = 1 - distance * 0.2; // 가운데는 1, 양옆은 점점 작아짐 (1, 0.8, 0.6 등)

                                                const startIndex = Math.max(0, Math.min(currentIndex - 2, Imgs.length - 5));
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
                                <div className="project_txt2_2">마을 중심의 시민실천 활동을 촉진하고 마을 에너지 자립율을 높이기 위한 플랫폼 구축
                                    <br /> 주민 참여형 프로그램 운영 및 에너지 데이터 시각화를 통한 정보 제공
                                </div>

                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">주요 역할 및 담당 업무</div>
                                <div className="project_txt2_2">
                                    <b>&bull; 프로그램 예약 서비스 구현</b><br />
                                    주민들이 참여할 수 있는 프로그램 예약 기능 개발<br />
                                    일정 관리 및 예약 확인 기능 제공<br />
                                    <b>&bull; 포인트 적립 서비스 구현</b><br />
                                    게시글 작성 시 포인트 적립 기능 구현<br />
                                    포인트 내역 조회 및 활용 방안 적용<br />
                                    <b>&bull; 데이터 시각화 및 통계 분석</b><br />
                                    Recharts 라이브러리를 활용한 통계 그래프 구현<br />
                                    에너지 자립율 및 활동 데이터 시각화<br />

                                </div>
                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">Stack</div>
                                <div className="project_txt2_2">
                                    <b>&bull; Frontend:</b> React, TypeScript, JavaScript, HTML, CSS(SCSS)<br />
                                    <b>&bull; Networking:</b> Axios<br />
                                    <b>&bull;Data Visualization:</b> Recharts<br />
                                    <b>&bull;Mapping Services:</b> React-Kakao Maps API<br />
                                    <b>&bull; Version Control:</b> Git, GitLab, Sourcetree<br />
                                    <b>&bull; Collaboration Tools:</b> Nas, Google sheet
                                </div>
                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">성과 및 기여도</div>
                                <div className="project_txt2_2">
                                    &bull; 주민 참여형 프로그램 예약 시스템 구축으로 사용자 편의성 증대<br />
                                    &bull; 게시글 기반 포인트 적립 시스템 구현을 통한 플랫폼 활성화
                                    <br />
                                    &bull; 통계 그래프를 활용한 데이터 시각화로 에너지 자립율 분석 지원
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="btn_detail"><a href='https://gjenergyvillage.com/' target='_blank' style={{ color: 'white' }}>자세히 보기&nbsp;&nbsp;&nbsp;→</a></div>
                    </li>

                </ul>
            </div>
        </article>
    )
}

export default EnergyPj