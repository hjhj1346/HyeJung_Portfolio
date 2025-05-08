import React, { useState } from 'react'
import img1 from '../../assets/project/로그인.png'
import img2 from '../../assets/project/공공시설관리_지도형.png'
import img3 from '../../assets/project/공공시설관리_등록.png'
import img4 from '../../assets/project/공공시설 공급분석.png'
import img5 from '../../assets/project/기부채납 공간관리.png'
import img6 from '../../assets/project/기부채납 공간관리_등록.png'
import img7 from '../../assets/project/관리_부서관리.png'
import img8 from '../../assets/project/관리_기초데이터 관리.png'
const SeongbukPj = () => {
    const Imgs = [
        { src: img1, alt: "Image 1" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
        { src: img4, alt: "Image 4" },
        { src: img5, alt: "Image 5" },
        { src: img6, alt: "Image 6" },
        { src: img7, alt: "Image 7" },
        { src: img8, alt: "Image 8" },
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
                        <div className="project_tit">성북 공공시설관리 플랫폼</div>
                        <div className="project_period">
                            2023.11 ~ 2024.01
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

                                    {/* Pagination */}
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

                                                const startIndex = Math.max(0, Math.min(currentIndex - 2, Imgs.length - 8));
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
                                    <button className="slider-button slider-button-next" onClick={handleNext} disabled={currentIndex === Imgs.length - 1}>
                                        &gt;
                                    </button>


                                </div>
                            </div>
                        </div>
                        <div className="project_des">
                            <div className="project_txt2">
                                <div className="project_txt2_1">개요</div>
                                <div className="project_txt2_2">구의 전체적 여건과 시설공급 진단의 정확한 근거가 되는 공공시설의 종합자료 및 자료 관리를 하기 위한 플랫폼
                                </div>

                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">주요 역할 및 담당 업무</div>
                                <div className="project_txt2_2">
                                    <b>&bull; API 연동</b><br />
                                    Axios를 이용한 백엔드 API 연동 및 데이터 처리<br />
                                    비동기 처리 및 오류 핸들링 개선로그인 시 세션을 생성하고, 인증 정보를 유지하여 사용자의 지속적인 접근 관리<br />
                                    <b>&bull; 지도 서비스 연동</b><br />
                                    카카오 리액트 맵(Kakao Maps API)을 이용하여 시설의 위도, 경도 기반 마커 구현<br />
                                    폴리곤을 활용한 인구 격자 기능 구현<br />
                                    공공시설 및 서비스 위치 시각화<br />
                                    <b>&bull; 데이터 시각화 및 분석</b><br />
                                    공급 분석 데이터를 기반으로 Chart.js를 이용한 차트 구현<br />
                                    공공시설 및 인구 분포 분석 결과를 시각적으로 표현<br />

                                </div>
                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">Stack</div>
                                <div className="project_txt2_2">
                                    <b>&bull; Frontend:</b> React, TypeScript, JavaScript, HTML, CSS(SCSS)<br />
                                    <b>&bull; Networking:</b> Axios<br />
                                    <b>&bull;Mapping Services:</b> React-Kakao Maps API<br />
                                    <b>&bull; Version Control:</b> Git, GitLab, Sourcetree<br />
                                    <b>&bull; Collaboration Tools:</b> Nas, Google sheet
                                </div>
                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">성과 및 기여도</div>
                                <div className="project_txt2_2">
                                    &bull; 인구 데이터를 기반으로 한 폴리곤 격자 기능 구현을 통해 공간적 데이터 분석 강화<br />
                                    &bull; 지도 기반 서비스 도입으로 공공시설 위치 파악 및 활용도 증대
                                    <br />
                                    &bull; 공급 분석 데이터를 시각적으로 제공하여 정책 결정 지원<br />
                                </div>
                            </div>
                        </div>
                        <div className="btn_detail"><a href='https://sbdata.sb.go.kr:2241/' target='_blank' style={{ color: 'white' }}>자세히 보기&nbsp;&nbsp;&nbsp;→</a></div>
                    </li>

                </ul>
            </div>
        </article>
    )
}

export default SeongbukPj