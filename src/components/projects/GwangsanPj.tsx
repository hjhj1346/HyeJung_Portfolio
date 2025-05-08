import React, { useState } from 'react'
import img1 from '../../assets/project/광_1.png'
import img2 from '../../assets/project/광_2.png'
import img3 from '../../assets/project/광_3.png'

const GwangsanPj = () => {
    const Imgs = [
        { src: img1, alt: "Image 1" },
        { src: img2, alt: "Image 2" },
        { src: img3, alt: "Image 3" },
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
                        <div className="project_tit">광산주민자치로</div>
                        <div className="project_period">
                            2023.01 ~ 2023.03
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

                                                const startIndex = Math.max(0, Math.min(currentIndex - 2, Imgs.length - 3));
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
                                <div className="project_txt2_2">주민자치회의 마을 활동 내용을 공유하고 홍보할 수 있는 플랫폼 구축
                                    <br />주민 투표 기능을 포함하여 적극적인 주민 참여 유도
                                </div>

                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">주요 역할 및 담당 업무</div>
                                <div className="project_txt2_2">
                                    <b>&bull; 주민투표 기능 구현</b><br />
                                    주민들이 특정 사안에 대해 투표할 수 있는 기능 개발<br />
                                    실시간 투표 결과 반영 및 시각화<br />
                                    <b>&bull; 마을활동 게시판 구현</b><br />
                                    주민들이 마을 활동 내용을 공유할 수 있는 게시판 개발<br />
                                    댓글 및 좋아요 기능 적용으로 사용자 참여 활성화<br />
                                    <b>&bull; 소셜 로그인 기능 구현</b><br />
                                    Firebase를 활용한 애플 및 구글 소셜 로그인 기능 개발<br />
                                    사용자 인증 및 데이터 보안 강화<br />

                                </div>
                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">Stack</div>
                                <div className="project_txt2_2">
                                    <b>&bull; Frontend:</b> React, TypeScript, JavaScript, HTML, CSS(SCSS)<br />
                                    <b>&bull; Networking:</b> Axios<br />
                                    <b>&bull;Authentication:</b> Firebase (Google, Apple 로그인)<br />
                                    <b>&bull; Version Control:</b> Git, GitLab, Sourcetree<br />
                                    <b>&bull; Collaboration Tools:</b> Nas, Google sheet
                                </div>
                            </div>
                            <div className="project_txt2">
                                <div className="project_txt2_1">성과 및 기여도</div>
                                <div className="project_txt2_2">
                                    &bull; 주민투표 기능 구현으로 주민들의 참여도 증대<br />
                                    &bull; 마을활동 게시판을 통한 정보 공유 활성화
                                    <br />
                                    &bull; Firebase 소셜 로그인 적용으로 사용자 접근성 향상
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="btn_detail"><a href='https://gson.gwangsan.go.kr/' target='_blank' style={{ color: 'white' }}>자세히 보기&nbsp;&nbsp;&nbsp;→</a></div>
                    </li>

                </ul>
            </div>
        </article>
  )
}

export default GwangsanPj