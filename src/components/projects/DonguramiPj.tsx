import React, { useState } from 'react'
import img1 from '../../assets/project/dong_메인.png'
import img2 from '../../assets/project/dong_로그인.png'
import img3 from '../../assets/project/dong_쓰레기해결.png'
import img4 from '../../assets/project/dong_쓰레기해결하기 지도형.png'
import img5 from '../../assets/project/dong_친환경자원순환센터.png'
import img6 from '../../assets/project/dong_프로그램신청.png'
import img7 from '../../assets/project/dong_쓰레기수거차량.png'
import img8 from '../../assets/project/dong_수거차량도착정보.png'
import img9 from '../../assets/project/dong_수거함지도.png'
import img10 from '../../assets/project/dong_순환도시이야기.png'



const DonguramiPj = () => {
    const Imgs = [
        { src: img1, alt: "Image 1" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
        { src: img4, alt: "Image 4" },
        { src: img5, alt: "Image 5" },
        { src: img6, alt: "Image 6" },
        { src: img7, alt: "Image 7" },
        { src: img8, alt: "Image 8" }, 
        { src: img9, alt: "Image 9" },
        { src: img10, alt: "Image 10" },
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
                <div className="project_tit">동구라미온</div>
                <div className="project_period">
                    2023.07 ~ 2023.10
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

                                        const startIndex = Math.max(0, Math.min(currentIndex - 2, Imgs.length - 10));
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
                        <div className="project_txt2_2">
                        자원회수 및 수거 시스템과 제로웨이스트 커뮤니티 매핑 도입을 통한 자원순환통계체계 구축<br/>
                        광주 전역의 자원 순환 데이터를 체계적으로 관리하고 시각화하는 플랫폼 개발 </div>

                    </div>
                    <div className="project_txt2">
                        <div className="project_txt2_1">주요 역할 및 담당 업무</div>
                        <div className="project_txt2_2">
                            <b>&bull; 지도 서비스 및 데이터 시각화</b><br />
                            QGIS 프로그램을 활용하여 광주 전역 좌표 데이터 생성 및 Polygon Map 구현<br />
                            자원순환 데이터 기반 지도 시각화 및 데이터 필터링 기능 적용<br />
                            <b>&bull; 실시간 데이터 연동</b><br />
                            실시간 API 요청을 통해 쓰레기 수거차량 관제 페이지 구현<br />
                            WebSocket 및 비동기 요청을 활용한 실시간 데이터 갱신<br />
                          
                        </div>
                    </div>
                    <div className="project_txt2">
                        <div className="project_txt2_1">Stack</div>
                        <div className="project_txt2_2">
                            <b>&bull; Frontend:</b> React, TypeScript, JavaScript, HTML, CSS(SCSS),jQuery
                            <br />
                            <b>&bull; Networking:</b> Axios<br />
                            <b>&bull;Mapping Services:</b> Kakao Maps API, QGIS, Polygon Map<br />
                            <b>&bull; Version Control:</b> Git, GitLab, Sourcetree<br />
                            <b>&bull; Collaboration Tools:</b> Nas, Google sheet
                        </div>
                    </div>
                    <div className="project_txt2">
                        <div className="project_txt2_1">성과 및 기여도</div>
                        <div className="project_txt2_2">
                            &bull; QGIS 기반의 Polygon Map 구현을 통해 자원 순환 데이터의 공간적 분석 기능 제공<br />
                            &bull; 실시간 쓰레기 수거차량 관제 페이지 개발로 운영 효율성 증대
                            <br />
                            &bull; 자원회수기기와 연결된 태블릿 WebView 페이지 개발로 현장 업무 지원 강화<br />
                        </div>
                    </div>
                </div>
                <div className="btn_detail"><a href='https://donggurami.kr/' target='_blank' style={{ color: 'white' }}>자세히 보기&nbsp;&nbsp;&nbsp;→</a></div>
            </li>

        </ul>
    </div>
</article>
  )
}

export default DonguramiPj