function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // 모든 탭 내용 숨김
    document.querySelectorAll(".content").forEach((content) => {
      content.style.display = "none";
    });
  
    // 초기에 식당 탭 내용만 보이기
    document.getElementById("dinning-content").style.display = "block";
  
    // 각 탭을 클릭했을 때 이벤트 처리
    document.querySelectorAll(".tab li").forEach((tab) => {
      tab.addEventListener("click", function (event) {
        // 기본 클릭 이벤트 중지
        event.preventDefault();
  
        // 모든 탭 내용 숨김
        document.querySelectorAll(".content").forEach((content) => {
          content.style.display = "none";
        });
  
        // 클릭한 탭에 해당하는 내용 보이기
        const tabClass = this.classList[0];
        document.getElementById(tabClass + "-content").style.display = "block";
      });
    });
  
    const urlSearch = new URLSearchParams(location.search);
    const mbti = urlSearch.get("mbti");
    const local = urlSearch.get("location");
  
    console.log(mbti, local);
  
    function getDataList(local) {
      const BusanDinning = [

      ];
  

  
      if (local === "seoul") {
        shuffle(SeoulDataList);
        return SeoulDataList;
      }
      if (local === "busan") {
        shuffle(BusanDinning);
        return BusanDinning;
      }
      return [];
    }
  
    console.log(getDataList(local));
  
    getDataList(local).forEach((item, index) => {
      const finalsum = document.createElement("div");
      finalsum.setAttribute("class", "finalsum");
      finalsum.setAttribute("id", `location${index}`);
      finalsum.setAttribute("data-lat", item.lat);
      finalsum.setAttribute("data-lng", item.lng);
  
      finalsum.innerHTML = `
         <img src = "${item.imageUrl}">
         <div class ="info">
           <p class = "name">${item.name}</p>
           <p class = "adress">${item.address}</p>
         </div>
        `;
  
      const dinningContent = document.querySelector("#dinning-content");
      dinningContent.appendChild(finalsum);
    });
  
    var map;
    var center = new kakao.maps.LatLng(35.045277, 128.969343); // 초기 지도 중심 좌표
    var marker = null; // 마커 변수 추가
  
    // 페이지가 로드될 때 지도 초기화
    function initializeMap() {
      var mapContainer = document.getElementById("map");
      var mapOptions = {
        center: center,
        level: 3,
      };
      map = new kakao.maps.Map(mapContainer, mapOptions);
  
      // finalsum 요소에 클릭 이벤트 리스너 추가
      var finalsumElements = document.querySelectorAll(".finalsum");
      finalsumElements.forEach(function (finalsum, index) {
        finalsum.addEventListener("click", function (e) {
          const coordinates = {
            lat: e.currentTarget.getAttribute("data-lat"),
            lng: e.currentTarget.getAttribute("data-lng"),
          };
  
          // 마커 표시 및 숨기기 토글
          if (marker) {
            marker.setMap(null); // 이미 마커가 있으면 지도에서 숨김
            marker = null; // 마커 변수 초기화
          } else {
            // 마커 추가 (옵션을 설정하여 원하는 스타일로 변경 가능)
            marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(coordinates.lat, coordinates.lng),
              map: map,
            });
          }
  
          // 지도 중심을 해당 좌표로 이동
          map.setCenter(new kakao.maps.LatLng(coordinates.lat, coordinates.lng));
        });
      });
    }
  
    // locationId에 따른 위도와 경도를 반환
    function getCoordinates(locationId) {
      var coordinates = {
        location1: { lat: 35.045277, lng: 128.969343 },
        location2: { lat: 35.048363, lng: 128.966058 },
        location3: { lat: 35.048561, lng: 128.965345 },
        location4: { lat: 35.048523, lng: 128.966346 },
        location5: { lat: 35.047333, lng: 128.968369 },
        location6: { lat: 35.054531, lng: 128.970921 },
        location7: { lat: 35.048573, lng: 128.965369 },
        location8: { lat: 35.048677, lng: 128.96497 },
        location9: { lat: 35.048981, lng: 128.963552 },
        location10: { lat: 35.048864, lng: 128.964147 },
        location11: { lat: 35.048189, lng: 128.966673 },
        location12: { lat: 35.047348, lng: 128.968914 },
        location13: { lat: 35.046208, lng: 128.968886 },
        location14: { lat: 35.046463, lng: 128.968968 },
        location15: { lat: 35.046134, lng: 128.96321 },
        location16: { lat: 35.052647, lng: 128.960752 },
        location17: { lat: 35.047145, lng: 128.967283 },
        location18: { lat: 35.061491, lng: 128.958914 },
        location19: { lat: 35.061207, lng: 128.97054 },
        location20: { lat: 35.060275, lng: 128.972877 },
        location21: { lat: 35.065774, lng: 128.969236 },
      };
      return coordinates[locationId];
    }
  
    // 페이지가 로드되면 초기화 함수 호출
    initializeMap();
  });
  