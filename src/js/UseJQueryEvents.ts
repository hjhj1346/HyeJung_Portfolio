import { useEffect } from "react";
import $ from "jquery";

const UseJQueryEvents = () => {
  useEffect(() => {
    $(document).ready(function () {
      // 미디어 쿼리 조건
      const mediaQuery = window.matchMedia("(min-width: 1000px)");
    
      // 스크롤 이벤트 핸들러
      function handleScroll(): void {
        const scroll = $(window).scrollTop() || 0;
        if (scroll >= 50) {
          $("header, .pageup").addClass("on");
        } else {
          $("header, .pageup").removeClass("on");
        }
      }
    
      // 미디어 쿼리 변경 핸들러
      function handleMediaQueryChange(event: MediaQueryListEvent): void {
        const $header = $("header");
        if (event.matches) {
          // 1000px 이상에서는 스크롤 이벤트만 영향을 미침
          handleScroll();
        } else {
          // 1000px 미만에서는 header에 무조건 'on' 클래스 추가
          $header.addClass("on");
        }
      }
    
      // 초기 실행
      handleMediaQueryChange({ matches: mediaQuery.matches } as MediaQueryListEvent);
    
      // 미디어 쿼리 변경 감지
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    
      // 스크롤 이벤트 처리
      $(window).on("scroll", function () {
        if (mediaQuery.matches) {
          handleScroll();
        }
      });
    
      // 페이지 업 버튼 및 로고 클릭 시 맨 위로 이동
      $(".pageup, .logo").on("click", function (event: JQuery.ClickEvent) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 400);
      });
    
      // 섹션 높이 계산
      function getHeights() {
        return {
          header: $("header").height() || 0,
          visual: $(".visual").height() || 0,
          aboutme: $(".aboutme").height() || 0,
          skills: $(".skills").height() || 0,
          certificate: $(".certificate").height() || 0,
          projects: $(".project-container").height() || 0,
          career: $(".career").height() || 0,
        };
      }
    
      // 특정 섹션으로 이동
      function scrollToSection(offset: number): void {
        $("html, body").animate({ scrollTop: offset }, 400);
      }
    
      // 섹션 이동 버튼 이벤트 추가
      const sectionButtons: { [key: string]: string[] } = {
        aboutme: [".btn_aboutme", ".btn_more", ".aboutme .comm_tit_img"],
        skills: [".btn_skills", ".skills .comm_tit_img"],
        certificate: [".btn_certificate", ".certificate .comm_tit_img"],
        projects: [".btn_projects", ".project-container .comm_tit_img"],
        career: [".btn_career", ".career .comm_tit_img"],
      };
    
      Object.entries(sectionButtons).forEach(([section, selectors]) => {
        $(selectors.join(", ")).on("click", function () {
          const heights = getHeights();
          let offset = heights.visual - heights.header;
          if (section !== "aboutme") {
            offset += heights.aboutme;
            if (section !== "skills") offset += heights.skills;
            if (section !== "certificate") offset += heights.certificate;
            if (section !== "project-container") offset += heights.projects;
          }
          scrollToSection(offset);
        });
      });
    
      // 모바일 메뉴 토글
      $(".mobile_menu").on("click", function () {
        $(".mobile_gnb").toggleClass("on");
      });
    
      // 모바일 메뉴 항목 클릭 시 메뉴 닫기
      $(".mobile_gnb li a").on("click", function () {
        $(".mobile_gnb").removeClass("on");
      });
    
      // 프로젝트 자세히 보기
      $(".btn_detail").on("click", function () {
        $(this).closest("li").find(".project_modal").fadeIn(200);
      });
    
      $(".modal_close").on("click", function () {
        $(this).closest("li").find(".project_modal").fadeOut(200);
      });
    });
  }, []);
};

export default UseJQueryEvents;