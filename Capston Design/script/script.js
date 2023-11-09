function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".content").forEach((content) => {
      content.style.display = "none";
    });
  
    document.getElementById("dinning-content").style.display = "block";
  
    document.querySelectorAll(".tab li").forEach((tab) => {
      tab.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelectorAll(".content").forEach((content) => {
          content.style.display = "none";
        });
        const tabClass = this.classList[0];
        document.getElementById(tabClass + "-content").style.display = "block";
      });
    });
  
    const urlSearch = new URLSearchParams(location.search);
    const mbti = urlSearch.get("mbti");
    const local = urlSearch.get("location");

    console.log(mbti, local);
  
    function DinningDataList(local) {
      const BusanDinning = [
        {
          name: "새살맛집 곤드레밥",
          address: "부산광역시 수영구 황령산로 28",
          imageUrl: "../media/새살맛집 곤드레밥.jpg",
          lat: 35.148799,
          lng: 129.108282,
        },
        {
          name: "자갈치횟집",
          address: "부산광역시 수영구 수영로702번길 28",
          imageUrl: "../media/자갈치횟집.jpg",
          lat: 35.166556,
          lng: 129.117023,
        },
        {
          name: "갈삼구이",
          address: "부산광역시 수영구 민락수변로 7",
          imageUrl: "../media/갈삼구이.jpg",
          lat: 35.155196,
          lng: 129.124096,
        },
        {
          name: "둔내막국수",
          address: "부산광역시 수영구 수영로725번길 62-3",
          imageUrl: "../media/둔내막국수.jpg",
          lat: 35.168499,
          lng: 129.115245,
        },
        {
          name: "고향카츠",
          address: "부산광역시 수영구 수영로510번길 43",
          imageUrl: "../media/고향카츠.jpg",
          lat: 35.150906,
          lng: 129.114039,
        },
        {
          name: "국이네낙지볶음",
          address: "부산광역시 수영구 연수로 410",
          imageUrl: "../media/국이네낙지볶음.jpg",
          lat: 35.16798,
          lng: 129.1138,
        },
        {
          name: "금가면옥",
          address: "부산광역시 수영구 무학로 25-1",
          imageUrl: "../media/금가면옥.jpg",
          lat: 35.161828,
          lng: 129.116705,
        },
        {
          name: "우성식당",
          address: "부산광역시 수영구 광안동 559-4",
          imageUrl: "../media/우성식당.jpg",
          lat: 35.160252,
          lng: 129.112539,
        },
        {
          name: "시골통돼지볶음",
          address: "부산광역시 수영구 남천제1동 35-6",
          imageUrl: "../media/시골통돼지볶음.jpg",
          lat: 35.148274,
          lng: 129.111587,
        },
        {
          name: "꽃물 한식당",
          address: "부산광역시 수영구 황령산로8번길 17",
          imageUrl: "../media/꽃물 한식당.jpg",
          lat: 35.148232,
          lng: 129.109538,
        },
        {
          name: "농장갈비",
          address: "부산광역시 수영구 무학로9번길 16",
          imageUrl: "../media/농장갈비.jpg",
          lat: 35.162527,
          lng: 129.115164,
        },
        {
          name: "언양불고기 부산집",
          address: "부산광역시 수영구 남천바다로 32",
          imageUrl: "../media/언양불고기 부산집.jpg",
          lat: 35.147882,
          lng: 129.113582,
        },
        {
          name: "민락쌈밥",
          address: "부산광역시 수영구 민락동 감포로8번길 7",
          imageUrl: "../media/민락쌈밥.jpg",
          lat: 35.159336,
          lng: 129.121112,
        },
        {
          name: "정원집",
          address: "부산광역시 수영구 수영로666번길 17",
          imageUrl: "../media/정원집.jpg",
          lat: 35.165151,
          lng: 129.115726,
        },
        {
          name: "친정엄마아라수라간",
          address: "부산광역시 수영구 남천동로108번길",
          imageUrl: "../media/친정엄마아라수라간.jpg",
          lat: 35.145852,
          lng: 129.112271,
        },
        {
          name: "진미언양불고기",
          address: "부산광역시 수영구 남천바다로33번길 7",
          imageUrl: "../media/진미언양불고기.jpg",
          lat: 35.148869,
          lng: 129.114143,
        },
        {
          name: "다리집",
          address: "부산광역시 수영구 남천바다로10번길 70",
          imageUrl: "../media/다리집.jpg",
          lat: 35.146539,
          lng: 129.110711,
        },
        {
          name: "신창국밥",
          address: "부산광역시 수영구 남천동로24번길 42",
          imageUrl: "../media/신창국밥.jpg",
          lat: 35.1405,
          lng: 129.11021,
        },
        {
          name: "박가네언양불고기",
          address: "부산광역시 수영구 광안제2동 수영로540번길 74",
          imageUrl: "../media/박가네언양불고기.jpg",
          lat: 35.15308,
          lng: 129.11606,
        },
        {
          name: "부산횟집",
          address: "부산광역시 수영구 민락수변로 29",
          imageUrl: "../media/부산횟집.jpg",
          lat: 35.153171,
          lng: 129.124703,
        },
        {
          name: "꽃돼지국밥",
          address: "부산광역시 수영구 민락로 35",
          imageUrl: "../media/꽃돼지국밥.jpg",
          lat: 35.158166,
          lng: 129.12127,
        },
        {
          name: "우성삼계탕",
          address: "부산광역시 수영구 광서로10번길 68",
          imageUrl: "../media/우성삼계탕.jpg",
          lat: 35.167178,
          lng: 129.114121,
        },
        {
          name: "영남해장국",
          address: "부산광역시 수영구 황령대로489번길 19",
          imageUrl: "../media/영남해장국.jpg",
          lat: 35.139111,
          lng: 129.108089,
        },
        {
          name: "아미양곱창",
          address: "부산광역시 수영구 황령대로481번길 56",
          imageUrl: "../media/아미양곱창.jpg",
          lat: 35.139707,
          lng: 129.108098,
        },
        {
          name: "옥계관",
          address: "부산광역시 수영구 민락로19번길 22",
          imageUrl: "../media/옥계관.jpg",
          lat: 35.156446,
          lng: 129.12139,
        },
        {
          name: "당그레양곱창구이",
          address: "부산광역시 수영구 광남로142번길 2",
          imageUrl: "../media/당그레양곱창구이.jpg",
          lat: 35.153727,
          lng: 129.117482,
        },
        {
          name: "요이쿠마",
          address: "부산광역시 수영구 광안해변로307번길 20",
          imageUrl: "../media/요이쿠마.jpg",
          lat: 35.157975,
          lng: 129.126606,
        },
        {
          name: "신세계",
          address: "부산광역시 수영구 무학로10번길 27 1층",
          imageUrl: "../media/신세계.jpg",
          lat: 35.160529,
          lng: 129.114712,
        },
        {
          name: "규니꾸",
          address: "부산광역시 수영구 민락동 181-223",
          imageUrl: "../media/규니꾸.jpg",
          lat: 35.153176,
          lng: 129.124697,
        },
        {
          name: "다솥맛집",
          address: "부산광역시 해운대구 중제1동 948-5",
          imageUrl: "../media/다솥맛집.jpg",
          lat: 35.159726,
          lng: 129.170598,
        },
        {
          name: "초필살돼지구이",
          address: "부산광역시 해운대구 마린시티3로 23",
          imageUrl: "../media/초필살돼지구이.jpg",
          lat: 35.156294,
          lng: 129.146971,
        },
        {
          name: "정문 추어탕",
          address: "부산광역시 해운대구 해운대로483번길 2-7",
          imageUrl: "../media/정문 추어탕.jpg",
          lat: 35.162776,
          lng: 129.1464,
        },
        {
          name: "훈이네김밥",
          address: "부산광역시 해운대구 해운대해변로209번가길 1",
          imageUrl: "../media/훈이네김밥.jpg",
          lat: 35.159913,
          lng: 129.154082,
        },
        {
          name: "051우리동네",
          address: "부산광역시 해운대구 해운대해변로209번나길 7",
          imageUrl: "../media/051우리동네.jpg",
          lat: 35.160497,
          lng: 129.154349,
        },
        {
          name: "평안도족발",
          address: "부산광역시 해운대구 달맞이길 14",
          imageUrl: "../media/평안도족발.jpg",
          lat: 35.16194,
          lng: 129.166394,
        },
        {
          name: "거북이금고",
          address: "부산광역시 해운대구 중동1로 32",
          imageUrl: "../media/거북이금고.jpg",
          lat: 35.162528,
          lng: 129.16274,
        },
        {
          name: "참새방앗간",
          address: "부산광역시 해운대구 중제1동 1015-6",
          imageUrl: "../media/참새방앗간.jpg",
          lat: 35.157706,
          lng: 129.172412,
        },
        {
          name: "소막골",
          address: "부산광역시 해운대구 좌제1동 1466-3",
          imageUrl: "../media/소막골.jpg",
          lat: 35.171418,
          lng: 129.176456,
        },
        {
          name: "만족",
          address: "부산광역시 해운대구 좌동로91번길 21",
          imageUrl: "../media/만족.jpg",
          lat: 35.173065,
          lng: 129.174163,
        },
        {
          name: "피제리아라르도",
          address: "부산광역시 해운대구 좌동순환로433번길 38-37",
          imageUrl: "../media/피제리아라르도.jpg",
          lat: 35.161776,
          lng: 129.178573,
        },
        {
          name: "디젤 앤 카멜리아스",
          address: "부산광역시 해운대구 우동1로20번길 11",
          imageUrl: "../media/디젤 앤 카멜리아스.jpg",
          lat: 35.16395,
          lng: 129.157265,
        },
        {
          name: "진미횟집",
          address: "부산광역시 수영구 광안해변로 207",
          imageUrl: "../media/진미횟집.jpg",
          lat: 35.15264,
          lng: 129.117516,
        },
        {
          name: "수정궁횟집",
          address: "부산광역시 수영구 민락수변로 25",
          imageUrl: "../media/수정궁횟집.jpg",
          lat: 35.153552,
          lng: 129.124554,
        },
        {
          name: "하모횟집",
          address: "부산광역시 수영구 광안해변로295번길 4-19",
          imageUrl: "../media/하모횟집.jpg",
          lat: 35.156576,
          lng: 129.125463,
        },
        {
          name: "강변횟집",
          address: "부산광역시 수영구 민락동 181-70",
          imageUrl: "../media/강변횟집.jpg",
          lat: 35.155718,
          lng: 129.124766,
        },
        {
          name: "수림횟집",
          address: "부산광역시 해운대구 해운대해변로221번길 15",
          imageUrl: "../media/수림횟집.jpg",
          lat: 35.159806,
          lng: 129.155999,
        },
        {
          name: "동백섬횟집",
          address: "부산광역시 해운대구 해운대해변로209번나길 17",
          imageUrl: "../media/동백섬횟집.jpg",
          lat: 35.160409,
          lng: 129.154685,
        },
        {
          name: "싱싱뽈락회",
          address: "부산광역시 해운대구 우동 번지 1호 648-5",
          imageUrl: "../media/싱싱뽈락회.jpg",
          lat: 35.159703,
          lng: 129.157154,
        },
        {
          name: "해운대다찌",
          address: "부산광역시 해운대구 해운대해변로209번길 22",
          imageUrl: "../media/해운대다찌.jpg",
          lat: 35.160112,
          lng: 129.154068,
        },
        {
          name: "삼삼횟집",
          address: "부산광역시 수영구 광안해변로278번길 22",
          imageUrl: "../media/삼삼횟집.jpg",
          lat: 35.154712,
          lng: 129.12469,
        }
      ];
      const SeoulDinning = [
        {
          name: "853",
          address: "서울특별시 종로구 인사동12길 16",
          imageUrl: "../media/853.jpg",
          lat: 37.5747,
          lng: 126.9851,
        },
        {
          name: "지화자",
          address: "서울특별시 종로구 자하문로 125",
          imageUrl: "../media/지화자.jpg",
          lat: 37.58708,
          lng: 126.9694,
        },
        {
          name: "정식당",
          address: "서울특별시 강남구 청담동 선릉로158길 11",
          imageUrl: "../media/정식당.jpg",
          lat: 37.52561,
          lng: 127.0411,
        },
        {
          name: "양국",
          address: "서울특별시 논현로95길 15 평화빌딩 1층 양국",
          imageUrl: "../media/양국.jpg",
          lat: 37.50207,
          lng: 127.0347,
        },
        {
          name: "단풍나무집",
          address: "서울특별시 용산구 이태원1동 이태원로27가길 26",
          imageUrl: "../media/단풍나무집.jpg",
          lat: 37.53505,
          lng: 126.9939,
        },
        {
          name: "타볼로24",
          address: "서울특별시 종로구 청계천로 279",
          imageUrl: "../media/타볼로24.jpg",
          lat: 37.57019,
          lng: 127.0089,
        },
        {
          name: "연남서식당",
          address: "서울특별시 중구 을지로2가 번지 1층 199-61 금강",
          imageUrl: "../media/연남서식당.jpg",
          lat: 37.56472,
          lng: 126.9833,
        },
        {
          name: "진미식당",
          address: "서울특별시 마포구 마포대로 186-6",
          imageUrl: "../media/진미식당.jpg",
          lat: 37.55056,
          lng: 126.9558,
        },
        {
          name: "미쓰족발",
          address: "서울특별시 중구 명동3길 21",
          imageUrl: "../media/미쓰족발.jpg",
          lat: 37.56461,
          lng: 126.9834,
        },
        {
          name: "황생가칼국수",
          address: "서울특별시 종로구 소격동 북촌로5길 78",
          imageUrl: "../media/황생가칼국수.jpg",
          lat: 37.58012,
          lng: 126.9806,
        },
        {
          name: "오부이용",
          address: "서울특별시 성동구 독서당로51길 29-1 1층",
          imageUrl: "../media/오부이용.jpg",
          lat: 37.55062,
          lng: 127.0261,
        },
        {
          name: "오제제",
          address: "서울특별시 특별시 세종대로 136",
          imageUrl: "../media/오제제.jpg",
          lat: 37.56837,
          lng: 126.9778,
        },
        {
          name: "만가타",
          address: "서울특별시 종로구 삼청로2길 40-5",
          imageUrl: "../media/만가타.jpg",
          lat: 37.58014,
          lng: 126.9809,
        },
        {
          name: "스시소라",
          address: "서울특별시 종로구 종로 19 지하1층",
          imageUrl: "../media/스시소라.jpg",
          lat: 37.57109,
          lng: 126.98,
        },
        {
          name: "물랑",
          address: "서울특별시 종로구 창성동 자하문로16길 8",
          imageUrl: "../media/물랑.jpg",
          lat: 37.58149,
          lng: 126.9719,
        },
        {
          name: "혜화도담",
          address: "서울특별시 종로구 대명1길 16-6",
          imageUrl: "../media/혜화도담.jpg",
          lat: 37.58296,
          lng: 127.0004,
        },
        {
          name: "독일주택",
          address: "서울특별시 종로구 명륜4가 대명1길 16-4",
          imageUrl: "../media/독일주택.jpg",
          lat: 37.58291,
          lng: 127.0005,
        },
        {
          name: "공기식당",
          address: "서울특별시 종로구 청운효자동 필운대로6길 20-1",
          imageUrl: "../media/공기식당.jpg",
          lat: 37.58042,
          lng: 126.9694,
        },
        {
          name: "김진목삼",
          address: "서울특별시 종로구 자하문로1길 51",
          imageUrl: "../media/김진목삼.jpg",
          lat: 37.57687,
          lng: 126.9695,
        },
        {
          name: "세이류",
          address: "서울특별시 송파구 신청동 11-4",
          imageUrl: "../media/세이류.jpg",
          lat: 37.51764,
          lng: 127.1036,
        },
        {
          name: "고든램지버거",
          address: "서울특별시 송파구 올림픽로 300 롯데월드몰 B1",
          imageUrl: "../media/고든램지버거.jpg",
          lat: 37.51321,
          lng: 127.1016,
        },
        {
          name: "해목",
          address: "서울특별시 송파구 올림픽로 300",
          imageUrl: "../media/해목.jpg",
          lat: 37.51348,
          lng: 127.1037,
        },
        {
          name: "비채나",
          address: "서울특별시 송파구 신천동 올림픽로 300 롯데월드 타워 81층",
          imageUrl: "../media/비채나.jpg",
          lat: 37.5126,
          lng: 127.1025,
        },
        {
          name: "바토스",
          address: "서울특별시 용산구 이태원로15길 1",
          imageUrl: "../media/바토스.jpg",
          lat: 37.53456,
          lng: 126.9902,
        },
        {
          name: "크리스피포크타운",
          address: "서울특별시 이태원동 455-33",
          imageUrl: "../media/크리스피포크타운.jpg",
          lat: 37.53447,
          lng: 126.9884,
        },
        {
          name: "시칠리",
          address: "서울특별시 용산구 한남동 739-20",
          imageUrl: "../media/시칠리.jpg",
          lat: 37.53763,
          lng: 127.0005,
        },
        {
          name: "브라이리퍼블릭",
          address: "서울특별시 용산구 이태원로14길 19",
          imageUrl: "../media/브라이리퍼블릭.jpg",
          lat: 37.53345,
          lng: 126.9908,
        },
        {
          name: "야상해",
          address: "서울특별시 용산구 이태원로23길 6",
          imageUrl: "../media/야상해.jpg",
          lat: 37.53474,
          lng: 126.9928,
        },
        {
          name: "하시엔다",
          address: "서울특별시 용산구 보광로59길 10 1층",
          imageUrl: "../media/하시엔다.jpg",
          lat: 37.534,
          lng: 126.9935,
        },
        {
          name: "미성옥",
          address: "서울특별시 중구 명동길 25-11",
          imageUrl: "../media/미성옥.jpg",
          lat: 37.56412,
          lng: 126.9839,
        },
        {
          name: "애성회관",
          address: "서울특별시 중구 소공동 남대문로5길 23",
          imageUrl: "../media/애성회관.jpg",
          lat: 37.56242,
          lng: 126.979,
        },
        {
          name: "홍연",
          address: "서울특별시 중구 소공로 106",
          imageUrl: "../media/홍연.jpg",
          lat: 37.5644,
          lng: 126.9797,
        },
        {
          name: "나인스게이트",
          address: "서울특별시 중구 소공로 106",
          imageUrl: "../media/나인스게이트.jpg",
          lat: 37.56441,
          lng: 126.9797,
        },
        {
          name: "라세느",
          address: "서울특별시 중구 을지로 30 롯데호텔서울 Main Tower 1층",
          imageUrl: "../media/라세느.jpg",
          lat: 37.56562,
          lng: 126.9801,
        },
        {
          name: "명동돈가스",
          address: "서울특별시 중구 명동3길 8",
          imageUrl: "../media/명동돈가스.jpg",
          lat: 37.56399,
          lng: 126.9836,
        },
        {
          name: "충무집",
          address: "서울특별시 중구 을지로3길 30-14",
          imageUrl: "../media/충무집.jpg",
          lat: 37.56713,
          lng: 126.9819,
        },
        {
          name: "일품향",
          address: "서울특별시 중구 명동2길 26",
          imageUrl: "../media/일품향.jpg",
          lat: 37.5621,
          lng: 126.9823,
        },
        {
          name: "류경회관",
          address: "서울특별시 종로구 종로 33 그랑서울 B1",
          imageUrl: "../media/류경회관.jpg",
          lat: 37.57114,
          lng: 126.9817,
        },
        {
          name: "폴리스",
          address: "서울특별시 강남구 삼성동 테헤란로 521 지하1층 F-13호",
          image: "../media/폴리스.jpg",
          latitude: 37.50939,
          longitude: 127.0611
        },
        {
          name: "금복당",
          address: "서울특별시 강남구 영동대로 513",
          image: "../media/금복당.jpg",
          latitude: 37.51342,
          longitude: 127.06
        },
        {
          name: "우래옥",
          address: "서울특별시 중구 창경궁로 62-29",
          image: "../media/우래옥.jpg",
          latitude: 37.56819,
          longitude: 126.9987
        },
        {
          name: "이남장",
          address: "서울특별시 중구 삼일대로12길 16",
          image: "../media/이남장.jpg",
          latitude: 37.56658,
          longitude: 126.9886
        },
        {
          name: "원흥",
          address: "서울특별시 중구 다동길 46",
          image: "../media/원흥.jpg",
          latitude: 37.56788,
          longitude: 126.9817
        },
        {
          name: "산수갑산",
          address: "서울특별시 중구 을지로동 15-4",
          image: "../media/산수갑산.jpg",
          latitude: 37.56538,
          longitude: 126.9953
        },
        {
          name: "호반집",
          address: "서울특별시 중구 을지로20길 10-13",
          image: "../media/호반집.jpg",
          latitude: 37.56592,
          longitude: 126.995
        },
        {
          name: "모던샤브하우스",
          address: "서울특별시 종로구 청진동 246 D타워 리플레이스 광화문 5층",
          image: "../media/모던샤브하우스.jpg",
          latitude: 37.57108,
          longitude: 126.979
        },
        {
          name: "후니도니",
          address: "서울특별시 종로구 종로1가 19 지하 1층",
          image: "../media/후니도니.jpg",
          latitude: 37.57076,
          longitude: 126.9797
        },
        {
          name: "아키라백",
          address: "서울특별시 종로구 당주동 새문안로 97",
          image: "../media/아키라백.jpg",
          latitude: 37.57047,
          longitude: 126.9755
        },
        {
          name: "덕후선생",
          address: "서울특별시 종로구 종로3길 17 광화문D타워 4층",
          image: "../media/덕후선생.jpg",
          latitude: 37.57062,
          longitude: 126.9789
        },
        {
          name: "유유안",
          address: "서울특별시 종로구 새문안로 97",
          image: "../media/유유안.jpg",
          latitude: 37.57044,
          longitude: 126.9755
        }
      ];
      const JejuDinning = [
        {
          name: "솔지식당",
          address: "제주특별자치도 제주시 노형동 월랑로 88",
          image: "../media/솔지식당.jpg",
          latitude: 33.492258,
          longitude: 126.472677
        },
        {
          name: "갯것이 식당",
          address: "제주특별자치도 제주시 이도이동 319-3",
          image: "../media/갯것이 식당.jpg",
          latitude: 33.503388,
          longitude: 126.537144
        },
        {
          name: "식당 마요네즈",
          address: "제주특별자치도 제주시 노형동 1068-5",
          image: "../media/식당 마요네즈.jpg",
          latitude: 33.488848,
          longitude: 126.478732
        },
        {
          name: "송림식당",
          address: "제주특별자치도 제주시 연동 282-36",
          image: "../media/송림식당.jpg",
          latitude: 33.487915,
          longitude: 126.493011
        },
        {
          name: "단물식당",
          address: "제주특별자치도 제주시 건입동 673-5",
          image: "../media/단물식당.jpg",
          latitude: 33.516500,
          longitude: 126.538825
        },
        {
          name: "앞뱅디식당",
          address: "제주특별자치도 제주시 연동 선덕로 32",
          image: "../media/앞뱅디식당.jpg",
          latitude: 33.485334,
          longitude: 126.499958
        },
        {
          name: "마라도횟집",
          address: "제주특별자치도 제주시 연동 262-10",
          image: "../media/마라도횟집.jpg",
          latitude: 33.486743,
          longitude: 126.489457
        },
        {
          name: "재벌식당",
          address: "제주특별자치도 제주시 연동 도령로7길 20",
          image: "../media/재벌식당.jpg",
          latitude: 33.490713,
          longitude: 126.484343
        },
        {
          name: "미친부엌",
          address: "제주특별자치도 제주시 삼도2동 1192-28",
          image: "../media/미친부엌.jpg",
          latitude: 33.517065,
          longitude: 126.523226
        },
        {
          name: "태광식당",
          address: "제주특별자치도 제주시 용담1동 119",
          image: "../media/태광식당.jpg",
          latitude: 33.512599,
          longitude: 126.518852
        },
        {
          name: "코코분식",
          address: "제주특별자치도 제주시 신성로 104",
          image: "../media/코코분식.jpg",
          latitude: 33.496781,
          longitude: 126.530085
        },
        {
          name: "현",
          address: "제주특별자치도 제주시 노형동 1421-5",
          image: "../media/현.jpg",
          latitude: 33.482364,
          longitude: 126.477844
        },
        {
          name: "도남오거리식당",
          address: "제주특별자치도 제주시 도남동 909",
          image: "../media/도남오거리식당.jpg",
          latitude: 33.496537,
          longitude: 126.526150
        },
        {
          name: "마모루",
          address: "제주특별자치도 제주시 이도이동 1181-2",
          image: "../media/마모루.jpg",
          latitude: 33.498902,
          longitude: 126.531527
        },
        {
          name: "춘월맛집",
          address: "제주특별자치도 제주시 도두항서길 5",
          image: "../media/춘월맛집.jpg",
          latitude: 33.504855,
          longitude: 126.466369
        },
        {
          name: "도두항",
          address: "제주특별자치도 제주시 도두일동 2629",
          image: "../media/도두항.jpg",
          latitude: 33.505595,
          longitude: 126.465523
        },
        {
          name: "임성반점",
          address: "제주특별자치도 제주시 용화로 57-1",
          image: "../media/임성반점.jpg",
          latitude: 33.509455,
          longitude: 126.509802
        },
        {
          name: "영화루",
          address: "제주특별자치도 제주시 연동 사장길 15-1",
          image: "../media/영화루.jpg",
          latitude: 33.484111,
          longitude: 126.495884
        },
        {
          name: "Le boui boui",
          address: "제주특별자치도 제주시 건입동 사라봉7길 32",
          image: "../media/Le boui boui.jpg",
          latitude: 33.515367,
          longitude: 126.539742
        },
        {
          name: "유일반점",
          address: "제주시 제주특별자치도 광양7길 13",
          image: "../media/유일반점.jpg",
          latitude: 33.500922,
          longitude: 126.530750
        },
        {
          name: "산지물",
          address: "제주특별자치도 제주시 건입동 1388-1",
          image: "../media/산지물.jpg",
          latitude: 33.516251,
          longitude: 126.527555
        },
        {
          name: "삼보식당",
          address: "제주특별자치도 제주시 연동 293-23",
          image: "../media/삼보식당.jpg",
          latitude: 33.486836,
          longitude: 126.495353
        },
        {
          name: "솔지식당",
          address: "제주특별자치도 제주시 이도이동 광양13길 14",
          image: "../media/솔지식당.jpg",
          latitude: 33.499148,
          longitude: 126.531707
        },
        {
          name: "진영식당",
          address: "제주특별자치도 제주시 용담2동 630-5",
          image: "../media/진영식당.jpg",
          latitude: 33.509705,
          longitude: 126.506129
        },
        {
          name: "경일낙지",
          address: "제주특별자치도 제주시 노형동 1291-3",
          image: "../media/경일낙지.jpg",
          latitude: 33.488387,
          longitude: 126.481075
        },
        {
          name: "Thai Wok",
          address: "제주특별자치도 제주시 아라이동 신설로11길 2",
          image: "../media/Thai Wok.jpg",
          latitude: 33.491360,
          longitude: 126.543956
        },
        {
          name: "영성반점",
          address: "제주특별자치도 제주시 진군길 1-1",
          image: "../media/영성반점.jpg",
          latitude: 33.480972,
          longitude: 126.481272
        },
        {
          name: "그란데",
          address: "제주특별자치도 제주시 아라일동 인다6길 42",
          image: "../media/그란데.jpg",
          latitude: 33.474925,
          longitude: 126.547594
        },
        {
          name: "속골 음식점",
          address: "제주특별자치도 서귀포시 호근동 1628",
          image: "../media/속골 음식점.jpg",
          latitude: 33.241146,
          longitude: 126.525719
        },
        {
          name: "솔삼춘",
          address: "제주특별자치도 서귀포시 서홍동 1599-6",
          image: "../media/솔삼춘.jpg",
          latitude: 33.262302,
          longitude: 126.555558
        },
        {
          name: "와랑와랑",
          address: "제주특별자치도 서귀포시 태평로 399-1",
          image: "../media/와랑와랑.jpg",
          latitude: 33.244887,
          longitude: 126.562924
        },
        {
          name: "삿뽀로우동집 동홍",
          address: "제주특별자치도 서귀포시 동홍동 동홍동로26번길 8",
          image: "../media/삿뽀로우동집 동홍.jpg",
          latitude: 33.257198,
          longitude: 126.575850
        },
        {
          name: "법환성",
          address: "제주특별자치도 서귀포시 법환동 392",
          image: "../media/법환성.jpg",
          latitude: 33.239427,
          longitude: 126.515163
        },
        {
          name: "만사성",
          address: "제주특별자치도 서귀포시 서귀동 90-1",
          image: "../media/만사성.jpg",
          latitude: 33.244971,
          longitude: 126.569684
        },
        {
          name: "소반",
          address: "제주특별자치도 서귀포시 서귀동 90-1",
          image: "../media/소반.jpg",
          latitude: 33.251952,
          longitude: 126.566154
        },
        {
          name: "교동짬뽕",
          address: "제주특별자치도 서귀포시 정방동 494-3",
          image: "../media/교동짬뽕.jpg",
          latitude: 33.246025,
          longitude: 126.562201
        },
        {
          name: "바당동네",
          address: "제주특별자치도 서귀포시 서귀동 433-1",
          image: "../media/바당동네.jpg",
          latitude: 33.246698,
          longitude: 126.561820
        },
        {
          name: "미르반점",
          address: "제주특별자치도 서귀포시 대륜동 481-1",
          image: "../media/미르반점.jpg",
          latitude: 33.244061,
          longitude: 126.534215
        },
        {
          name: "SEOGWIPHO",
          address: "제주특별자치도 서귀포시 서귀동 309-10",
          image: "../media/SEOGWIPHO.jpg",
          latitude: 33.249506,
          longitude: 126.559260
        },
        {
          name: "수희식당",
          address: "제주특별자치도 서귀포시 서귀동 447",
          image: "../media/수희식당.jpg",
          latitude: 33.245447,
          longitude: 126.561391
        },
        {
          name: "범섬칼국수",
          address: "제주특별자치도 서귀포시 이어도로 1039",
          image: "../media/범섬칼국수.jpg",
          latitude: 33.244833,
          longitude: 126.522185
        },
        {
          name: "혼차롱식개집",
          address: "제주특별자치도 서귀포시 서귀동 257-8",
          image: "../media/혼차롱식개집.jpg",
          latitude: 33.249683,
          longitude: 126.565780
        },
        {
          name: "하찌",
          address: "제주특별자치도 서귀포시 호근남로 180",
          image: "../media/하찌.jpg",
          latitude: 33.245227,
          longitude: 126.537184
        },
        {
          name: "제주해풍",
          address: "제주특별자치도 서귀포시 서귀동 660-8",
          image: "../media/제주해풍.jpg",
          latitude: 33.241026,
          longitude: 126.561782
        },
        {
          name: "에스 데판야끼",
          address: "제주특별자치도 서귀포시 호근서호로 62번길 40",
          image: "../media/에스 데판야끼.jpg",
          latitude: 33.260683,
          longitude: 126.532431
        },
        {
          name: "영춘반점",
          address: "제주특별자치도 서귀포시 서홍동 중앙로 156",
          image: "../media/영춘반점.jpg",
          latitude: 33.258326,
          longitude: 126.560302
        },
        {
          name: "베이찡",
          address: "제주특별자치도 서귀포시 이중섭로 11",
          image: "../media/베이찡.jpg",
          latitude: 33.247270,
          longitude: 126.564365
        },
        {
          name: "오스테리아 한",
          address: "제주특별자치도 서귀포시 호근서호로 170",
          image: "../media/오스테리아 한.jpg",
          latitude: 33.257503,
          longitude: 126.523012
        },
        {
          name: "네거리식당",
          address: "제주특별자치도 서귀포시 서귀동 319-8",
          image: "../media/네거리식당.jpg",
          latitude: 33.248513,
          longitude: 126.559376
        },
        {
          name: "안거리밖거리",
          address: "제주특별자치도 서귀포시 서귀동 584-3",
          image: "../media/안거리밖거리.jpg",
          latitude: 33.244272,
          longitude: 126.564166
        },
        {
          name: "웅담식당",
          address: "제주특별자치도 서귀포시 서귀동 584-3",
          image: "../media/웅담식당.jpg",
          latitude: 33.249870,
          longitude: 126.561054
        }
      ];

      if (local === "seoul") {
        shuffle(SeoulDinning);
        return SeoulDinning;
      }
      if (local === "busan") {
        shuffle(BusanDinning);
        return BusanDinning;
      }
      if (local === "jeju") {
        shuffle(JejuDinning);
        return JejuDinning;
      }
      return [];
    }

    function CafeDataList(local) {
      const BusanCafe = [
        {
          name: "고유한",
          address: "부산광역시 수영구 남천동로108번길 38 골든비치 9",
          imageUrl: "../media/고유한.jpg",
          lat: 35.146486,
          lng: 129.113234,
        },
        {
          name: "다기",
          address: "부산광역시 수영구 남천동 광안해변로 122",
          imageUrl: "../media/다기.jpg",
          lat: 35.145745,
          lng: 129.115102,
        },
        {
          name: "프라한",
          address: "부산광역시 수영구 남천동 남천동로108번길 52",
          imageUrl: "../media/프라한.jpg",
          lat: 35.145936,
          lng: 129.114154,
        },
        {
          name: "카페 피크닉",
          address: "부산광역시 수영구 수영로510번길 40 1 층",
          imageUrl: "../media/카페 피크닉.jpg",
          lat: 35.150759,
          lng: 129.113623,
        },
        {
          name: "아일드블루",
          address: "부산광역시 수영구 남천동 5-13",
          imageUrl: "../media/아일드블루.jpg",
          lat: 35.146085,
          lng: 129.114482,
        },
        {
          name: "카페 오뜨",
          address: "부산광역시 수영구 광안해변로 209",
          imageUrl: "../media/카페 오뜨.jpg",
          lat: 35.152753,
          lng: 129.117612,
        },
        {
          name: "일리카페",
          address: "부산광역시 수영구 광안해변로 189",
          imageUrl: "../media/일리카페.jpg",
          lat: 35.151404,
          lng: 129.116595,
        },
        {
          name: "샌디스",
          address: "부산광역시 남천바다로 38-1",
          imageUrl: "../media/샌디스.jpg",
          lat: 35.148183,
          lng: 129.114282,
        },
        {
          name: "컵앤컵커피",
          address: "부산광역시 수영구 광안해변로 177",
          imageUrl: "../media/컵앤컵커피.jpg",
          lat: 35.150454,
          lng: 129.115834,
        },
        {
          name: "브알라 카페",
          address: "부산광역시 수영구 광안해변로 165",
          imageUrl: "../media/브알라 카페.jpg",
          lat: 35.149586,
          lng: 129.115116,
        },
        {
          name: "Cafe prep",
          address: "부산광역시 수영구 광안제2동 수영로528번길 38",
          imageUrl: "../media/Cafe prep.jpg",
          lat: 35.152172,
          lng: 129.114903,
        },
        {
          name: "뚜버기 카페",
          address: "부산광역시 수영구 광안해변로 239",
          imageUrl: "../media/뚜버기 카페.jpg",
          lat: 35.154771,
          lng: 129.120148,
        },
        {
          name: "커피 광안184",
          address: "부산광역시 수영구 광남로83번길 4",
          imageUrl: "../media/커피 광안184.jpg",
          lat: 35.149775,
          lng: 129.113998,
        },
        {
          name: "워크스루",
          address: "부산광역시 수영구 수영로522번길 39",
          imageUrl: "../media/워크스루.jpg",
          lat: 35.151961,
          lng: 129.113851,
        },
        {
          name: "별침대",
          address: "부산광역시 수영구 광안해변로 203",
          imageUrl: "../media/별침대.jpg",
          lat: 35.152503,
          lng: 129.117408,
        },
        {
          name: "아스트릭커피",
          address: "부산광역시 수영구 광안해변로 179",
          imageUrl: "../media/아스트릭커피.jpg",
          lat: 35.150587,
          lng: 129.115885,
        },
        {
          name: "아덴블랑제리",
          address: "부산광역시 수영구 광안해변로 161",
          imageUrl: "../media/아덴블랑제리.jpg",
          lat: 35.149238,
          lng: 129.11476,
        },
        {
          name: "카페보배",
          address: "부산광역시 수영구 민락동 163-26번지",
          imageUrl: "../media/카페보배.jpg",
          lat: 35.158407,
          lng: 129.123133,
        },
        {
          name: "스칸센",
          address: "부산광역시 수영구 남천동 5-22번지",
          imageUrl: "../media/스칸센.jpg",
          lat: 35.146508,
          lng: 129.113081,
        },
        {
          name: "클러터",
          address: "부산광역시 수영구 광안로49번길 11",
          imageUrl: "../media/클러터.jpg",
          lat: 35.155727,
          lng: 129.117789,
        },
        {
          name: "Unbent coffee",
          address: "부산광역시 수영구 민락동 165-20",
          imageUrl: "../media/Unbent coffee.jpg",
          lat: 35.157827,
          lng: 129.120569,
        },
        {
          name: "카페 부아장",
          address: "부산광역시 수영구 민락본동로27번길 30",
          imageUrl: "../media/카페 부아장.jpg",
          lat: 35.158791,
          lng: 129.127035,
        },
        {
          name: "헤이플롯",
          address: "부산광역시 수영구 광남로258번길 8",
          imageUrl: "../media/헤이플롯.jpg",
          lat: 35.159246,
          lng: 129.127058,
        },
        {
          name: "카페보배",
          address: "부산광역시 수영구 민락동 163-26번지",
          imageUrl: "../media/카페보배.jpg",
          lat: 35.158405,
          lng: 129.123132,
        },
        {
          name: "트위스티 베어",
          address: "부산 수영구 수영로618번길 32-7",
          imageUrl: "../media/트위스티 베어.jpg",
          lat: 35.160207,
          lng: 129.115617,
        },
        {
          name: "차선책",
          address: "부산광역시 수영구 민락동 광안해변로 237",
          imageUrl: "../media/차선책.jpg",
          lat: 35.154714,
          lng: 129.119959,
        },
        {
          name: "포레스트원_그린",
          address: "부산광역시 수영구 광안해변로 237",
          imageUrl: "../media/포레스트원_그린.jpg",
          lat: 35.154668,
          lng: 129.119905,
        },
        {
          name: "E-coffee",
          address: "부산광역시 수영구 민락수변로 141",
          imageUrl: "../media/E-coffee.jpg",
          lat: 35.156423,
          lng: 129.134661,
        },
        {
          name: "더브릿지",
          address: "부산광역시 해운대구 해운대해변로209번가길 29-1",
          imageUrl: "../media/더브릿지.jpg",
          lat: 35.159477,
          lng: 129.157173,
        },
        {
          name: "오설록",
          address: "부산광역시 해운대구 우동 1352 1",
          imageUrl: "../media/오설록.jpg",
          lat: 35.160913,
          lng: 129.160873,
        }
      ];
      const SeoulCafe = [
        {
          name: "포비브라이트",
          address: "서울특별시 종로구 새문안로 76",
          image: "../media/포비브라이트.jpg",
          latitude: 37.56974,
          longitude: 126.9732
        },
        {
          name: "다만프레르",
          address: "서울특별시 중구 세종대로 136",
          image: "../media/다만프레르.jpg",
          latitude: 37.56844,
          longitude: 126.9781
        },
        {
          name: "컨펙션즈바이포시즌스",
          address: "서울특별시 종로구 당주동 29번지 1층",
          image: "../media/컨펙션즈바이포시즌스.jpg",
          latitude: 37.57066,
          longitude: 126.9754
        },
        {
          name: "mercat",
          address: "서울특별시 종로구 세종대로 169",
          image: "../media/mercat.jpg",
          latitude: 37.57146,
          longitude: 126.9763
        },
        {
          name: "오뗄두스",
          address: "서울특별시 중구 무교동 세종대로 136",
          image: "../media/오뗄두스.jpg",
          latitude: 37.56841,
          longitude: 126.9781
        },
        {
          name: "나무사이로",
          address: "서울특별시 종로구 사직로8길 21",
          image: "../media/나무사이로.jpg",
          latitude: 37.57467,
          longitude: 126.9709
        },
        {
          name: "내자상회",
          address: "서울특별시 종로구 사직동 사직로10길 3",
          image: "../media/내자상회.jpg",
          latitude: 37.57576,
          longitude: 126.9705
        },
        {
          name: "디저트플래넷",
          address: "서울특별시 종로구 종로3길 17 1 층 112,113호",
          image: "../media/디저트플래넷.jpg",
          latitude: 37.57106,
          longitude: 126.9789
        },
        {
          name: "페이퍼마쉐",
          address: "서울특별시 종로구 무교로 40",
          image: "../media/페이퍼마쉐.jpg",
          latitude: 37.56948,
          longitude: 126.9795
        },
        {
          name: "데시데",
          address: "서울특별시 종로구 사간동 41 데시데 1층",
          image: "../media/데시데.jpg",
          latitude: 37.57779,
          longitude: 126.9805
        },
        {
          name: "밀곳간",
          address: "서울특별시 성북구 성북로18길 19",
          image: "../media/밀곳간.jpg",
          latitude: 37.5941,
          longitude: 126.9993
        },
        {
          name: "톤티커피",
          address: "서울특별시 종로구 가회동 북촌로 6-8",
          image: "../media/톤티커피.jpg",
          latitude: 37.5776,
          longitude: 126.9863
        },
        {
          name: "아키비스트",
          address: "서울특별시 종로구 효자로13길 52",
          image: "../media/아키비스트.jpg",
          latitude: 37.58217,
          longitude: 126.9727
        },
        {
          name: "스쿠퍼",
          address: "서울특별시 종로구 통인동 자하문로7길 10",
          image: "../media/스쿠퍼.jpg",
          latitude: 37.57835,
          longitude: 126.9712
        },
        {
          name: "어쩌다산책",
          address: "서울특별시 종로구 동숭길 101 지하 1층",
          image: "../media/어쩌다산책.jpg",
          latitude: 37.58242,
          longitude: 127.004
        },
        {
          name: "델픽",
          address: "서울특별시 종로구 계동길 84-3",
          image: "../media/델픽.jpg",
          latitude: 37.58121,
          longitude: 126.987
        },
        {
          name: "스코프",
          address: "서울특별시 종로구 누하동 필운대로5가길 31",
          image: "../media/스코프.jpg",
          latitude: 37.58035,
          longitude: 126.9674
        },
        {
          name: "뉴질랜드스토리",
          address: "서울특별시 송파구 석촌호수로 268 1층 109호",
          image: "../media/뉴질랜드스토리.jpg",
          latitude: 37.50968,
          longitude: 127.1057
        },
        {
          name: "프롬헤라스",
          address: "서울특별시 송파구 올림픽로 300 6층",
          image: "../media/프롬헤라스.jpg",
          latitude: 37.51344,
          longitude: 127.1042
        },
        {
          name: "쟈덩 디베르",
          address: "서울특별시 송파구 잠실6동",
          image: "../media/쟈덩디베르.jpg",
          latitude: 37.51401,
          longitude: 127.1066
        },
        {
          name: "르페셰미뇽",
          address: "서울 용산구 녹사평대로40가길 3-3 2층",
          image: "../media/르페셰미뇽.jpg",
          latitude: 37.53526,
          longitude: 126.9877
        },
        {
          name: "재인",
          address: "서울특별시 용산구 이태원로54길 48 2 층",
          image: "../media/재인.jpg",
          latitude: 37.5363,
          longitude: 127.0013
        },
        {
          name: "코지빌라커피",
          address: "서울특별시 용산구 이태원제1동 이태원로20길 32",
          image: "../media/코지빌라커피.jpg",
          latitude: 37.53286,
          longitude: 126.9925
        },
        {
          name: "더블톤",
          address: "서울특별시 중구 창경궁로1길 26",
          image: "../media/더블톤.jpg",
          latitude: 37.56269,
          longitude: 126.9969
        },
        {
          name: "테일러커피",
          address: "서울특별시 강남구 강남대로160길 31",
          image: "../media/테일러커피.jpg",
          latitude: 37.52011,
          longitude: 127.0212
        },
        {
          name: "마일스톤",
          address: "서울특별시 강남구 신사동 논현로159길 49",
          image: "../media/마일스톤.jpg",
          latitude: 37.52185,
          longitude: 127.0243
        },
        {
          name: "소나",
          address: "서울특별시 강남구 신사동 강남대로162길 40",
          image: "../media/소나.jpg",
          latitude: 37.52065,
          longitude: 127.0216
        },
        {
          name: "청수당",
          address: "서울특별시 강남구 도산대로15길 32-4",
          image: "../media/청수당.jpg",
          latitude: 37.5206,
          longitude: 127.0239
        },
        {
          name: "에뚜왈",
          address: "서울특별시 강남구 압구정로10길 35 지하 1층",
          image: "../media/에뚜왈.jpg",
          latitude: 37.52127,
          longitude: 127.0222
        },
        {
          name: "노이에아트멍",
          address: "서울특별시 강남구 신사동 도산대로23길 19",
          image: "../media/노이에아트멍.jpg",
          latitude: 37.52021,
          longitude: 127.0259
        },
        {
          name: "이치서울",
          address: "서울특별시 강남구 강남대로158길 21 2층",
          image: "../media/이치서울.jpg",
          latitude: 37.51923,
          longitude: 127.0205
        },
        {
          name: "그레이 그리스트밀",
          address: "서울특별시 강남구 압구정로2길 15",
          image: "../media/그레이그리스트밀.jpg",
          latitude: 37.5207,
          longitude: 127.02
        },
        {
          name: "Immute",
          address: "서울특별시 강남구 논현로157길 36",
          image: "../media/Immute.jpg",
          latitude: 37.52193,
          longitude: 127.0252
        },
        {
          name: "레이브릭스",
          address: "서울특별시 강남구 신사동 논현로153길 46",
          image: "../media/레이브릭스.jpg",
          latitude: 37.52049,
          longitude: 127.0243
        },
        {
          name: "듀자미",
          address: "서울특별시 강남구 도산대로11길 28",
          image: "../media/듀자미.jpg",
          latitude: 37.51932,
          longitude: 127.0226
        },
        {
          name: "C27",
          address: "서울특별시 강남구 도산대로15길 39",
          image: "../media/C27.jpg",
          latitude: 37.52069,
          longitude: 127.0232
        },
        {
          name: "마망갸또",
          address: "서울특별시 강남구 압구정로10길 30-12",
          image: "../media/마망갸또.jpg",
          latitude: 37.52223,
          longitude: 127.0215
        },
        {
          name: "식물학",
          address: "서울특별시 강남구 강남대로154길 33",
          image: "../media/식물학.jpg",
          latitude: 37.51838,
          longitude: 127.0216
        },
        {
          name: "최가회관",
          address: "서울특별시 광진구 화양동 12-34",
          image: "../media/최가회관.jpg",
          latitude: 37.54336,
          longitude: 127.0706
        },
        {
          name: "인덱스",
          address: "서울특별시 성동구 성수이로14길 14 1층",
          image: "../media/인덱스.jpg",
          latitude: 37.54161,
          longitude: 127.0568
        },
        {
          name: "꼬메노",
          address: "서울특별시 광진구 화양동 군자로7길 29",
          image: "../media/꼬메노.jpg",
          latitude: 37.54556,
          longitude: 127.0691
        },
        {
          name: "k375",
          address: "서울특별시 광진구 화양동 아차산로33길 68",
          image: "../media/k375.jpg",
          latitude: 37.54311,
          longitude: 127.0713
        },
        {
          name: "커피나무",
          address: "서울특별시 광진구 화양동 동일로22길 117-26",
          image: "../media/커피나무.jpg",
          latitude: 37.54166,
          longitude: 127.071
        },
        {
          name: "재해석",
          address: "서울특별시 중구 충무로2길 28",
          image: "../media/재해석.jpg",
          latitude: 37.56228,
          longitude: 126.9946
        },
        {
          name: "계단집",
          address: "서울특별시 중구 회현동 퇴계로6길 35",
          image: "../media/계단집.jpg",
          latitude: 37.55691,
          longitude: 126.9792
        },
        {
          name: "빈스빈스",
          address: "서울특별시 중구 명동8나길 10",
          image: "../media/빈스빈스.jpg",
          latitude: 37.56179,
          longitude: 126.9842
        },
        {
          name: "포엠",
          address: "서울특별시 중구 명동2가 명동4길 13",
          image: "../media/포엠.jpg",
          latitude: 37.56316,
          longitude: 126.9837
        },
        {
          name: "원형들",
          address: "서울특별시 중구 창경궁로1길 38 4층",
          image: "../media/원형들.jpg",
          latitude: 37.56248,
          longitude: 126.9963
        },
        {
          name: "마마스",
          address: "서울특별시 중구 무교로 16",
          image: "../media/마마스.jpg",
          latitude: 37.56728,
          longitude: 126.9795
        },
        {
          name: "리브레",
          address: "서울특별시 중구 명동길 74",
          image: "../media/리브레.jpg",
          latitude: 37.56398,
          longitude: 126.987
        }
      ];
      const JejuCafe = [
        {
          name: "CAFE BARN",
          address: "제주특별자치도 제주시 애월읍 고성리 934-1",
          image: "../media/CAFE BARN.jpg",
          latitude: 33.434217,
          longitude: 126.421975
        },
        {
          name: "골목카페옥수",
          address: "제주특별자치도 제주시 애월읍 소길1길 19",
          image: "../media/골목카페옥수.jpg",
          latitude: 33.439851,
          longitude: 126.380032
        },
        {
          name: "카페 호나",
          address: "제주특별자치도 제주시 애월읍 하소로 557-10",
          image: "../media/카페 호나.jpg",
          latitude: 33.434172,
          longitude: 126.396891
        },
        {
          name: "카이로스 카페",
          address: "제주특별자치도 제주시 애월읍 장전리 49-17",
          image: "../media/카이로스 카페.jpg",
          latitude: 33.449868,
          longitude: 126.399936
        },
        {
          name: "카페 퍼시몬",
          address: "제주특별자치도 제주시 애월읍 하소로 611-6",
          image: "../media/카페 퍼시몬.jpg",
          latitude: 33.429240,
          longitude: 126.397076
        },
        {
          name: "카페 이너프",
          address: "제주특별자치도 제주시 애월읍 고성리 418-1",
          image: "../media/카페 이너프.jpg",
          latitude: 33.456333,
          longitude: 126.419333
        },
        {
          name: "시루애월카페",
          address: "제주시 특별자치도 제주시 애월읍 장전리 634-1",
          image: "../media/시루애월카페.jpg",
          latitude: 33.442690,
          longitude: 126.391865
        },
        {
          name: "제주기와",
          address: "제주특별자치도 제주시 애월읍 광령리 4067",
          image: "../media/제주기와.jpg",
          latitude: 33.451124,
          longitude: 126.425529
        },
        {
          name: "포레스트",
          address: "제주특별자치도 제주시 애월읍 유수암리 965",
          image: "../media/포레스트.jpg",
          latitude: 33.429662,
          longitude: 126.408899
        },
        {
          name: "요유나커피",
          address: "제주특별자치도 제주시 애월읍 장소로 211",
          image: "../media/요유나커피.jpg",
          latitude: 33.434045,
          longitude: 126.379913
        },
        {
          name: "달자카페",
          address: "제주특별자치도 제주시 애월읍 구엄리 545",
          image: "../media/달자카페.jpg",
          latitude: 33.483526,
          longitude: 126.379960
        },
        {
          name: "노을리카페",
          address: "제주특별자치도 제주시 애월읍 애월해안로 656",
          image: "../media/노을리카페.jpg",
          latitude: 33.479113,
          longitude: 126.372674
        },
        {
          name: "큐티파이카페",
          address: "제주특별자치도 제주시 애월해안로 610",
          image: "../media/큐티파이카페.jpg",
          latitude: 33.477860,
          longitude: 126.368846
        },
        {
          name: "오롬마르",
          address: "제주특별자치도 제주시 애월읍 장전리 110-5",
          image: "../media/오롬마르.jpg",
          latitude: 33.450099,
          longitude: 126.396132
        },
        {
          name: "소길다방",
          address: "제주특별자치도 제주시 애월읍 소길2길 45-3",
          image: "../media/소길다방.jpg",
          latitude: 33.438836,
          longitude: 126.379429
        },
        {
          name: "썸의시작",
          address: "제주특별자치도 제주시 애월읍 애월해안로 570-1",
          image: "../media/썸의시작.jpg",
          latitude: 33.478220,
          longitude: 126.366588
        },
        {
          name: "카페 오놀",
          address: "제주특별자치도 서귀포시 중문동 대포로 174",
          image: "../media/카페 오놀.jpg",
          latitude: 33.238666,
          longitude: 126.439610
        },
        {
          name: "카페 테",
          address: "제주특별자치도 서귀포시 회수동 천제연로 311",
          image: "../media/카페 테.jpg",
          latitude: 33.251800,
          longitude: 126.437830
        },
        {
          name: "봄봄카페",
          address: "제주특별자치도 서귀포시 회수동 376-1",
          image: "../media/봄봄카페.jpg",
          latitude: 33.263242,
          longitude: 126.444971
        },
        {
          name: "무채색카페",
          address: "제주특별자치도 서귀포시 중문동 1737-5",
          image: "../media/무채색카페.jpg",
          latitude: 33.254393,
          longitude: 126.430070
        },
        {
          name: "DP159",
          address: "제주특별자치도 서귀포시 대포동 대포로 159",
          image: "../media/DP159.jpg",
          latitude: 33.239485,
          longitude: 126.437960
        },
        {
          name: "카페빈티지",
          address: "제주특별자치도 서귀포시 회수동 557-4",
          image: "../media/카페빈티지.jpg",
          latitude: 33.252809,
          longitude: 126.444298
        },
        {
          name: "바다바라",
          address: "제주특별자치도 서귀포시 색달동 2822-12",
          image: "../media/바다바라.jpg",
          latitude: 33.245908,
          longitude: 126.413041
        },
        {
          name: "카페팔길",
          address: "제주특별자치도 서귀포시 하예동 706-12",
          image: "../media/카페팔길.jpg",
          latitude: 33.233887,
          longitude: 126.383650
        },
        {
          name: "카페 1950",
          address: "제주특별자치도 서귀포시 색달동 중문관광로 90",
          image: "../media/카페 1950.jpg",
          latitude: 33.250235,
          longitude: 126.414181
        },
        {
          name: "카페봄봄",
          address: "제주특별자치도 서귀포시 예래동 2804-1",
          image: "../media/카페봄봄.jpg",
          latitude: 33.264091,
          longitude: 126.384509
        },
        {
          name: "바당",
          address: "제주특별자치도 서귀포시 대포동 대포로 172-8",
          image: "../media/바당.jpg",
          latitude: 33.238432,
          longitude: 126.439334
        },
        {
          name: "카페2472",
          address: "제주특별자치도 서귀포시 색달동 2472-1",
          image: "../media/카페2472.jpg",
          latitude: 33.255823,
          longitude: 126.416500
        },
        {
          name: "색달로망스",
          address: "제주특별자치도 서귀포시 색달로72번길 1",
          image: "../media/색달로망스.jpg",
          latitude: 33.260809,
          longitude: 126.411157
        },
        {
          name: "휴일로",
          address: "제주특별자치도 서귀포시 안덕면 난드르로 49-65",
          image: "../media/휴일로.jpg",
          latitude: 33.232416,
          longitude: 126.366312
        },
        {
          name: "카페 루시아",
          address: "제주특별자치도 서귀포시 안덕면 난드르로 49-65",
          image: "../media/카페 루시아.jpg",
          latitude: 33.235071,
          longitude: 126.363083
        },
        {
          name: "아뜨리에 카페명월",
          address: "제주특별자치도 서귀포시 안덕면 상창리 1273-1",
          image: "../media/아뜨리에 카페명월.jpg",
          latitude: 33.279427,
          longitude: 126.361537
        },
        {
          name: "카페소낭",
          address: "제주특별자치도 서귀포시 천제연로 127-1",
          image: "../media/카페소낭.jpg",
          latitude: 33.254274,
          longitude: 126.419232
        },
        {
          name: "멍우주카페",
          address: "제주특별자치도 서귀포시 안덕면 창천리 785",
          image: "../media/멍우주카페.jpg",
          latitude: 33.232362,
          longitude: 126.367206
        },
        {
          name: "논짓물해수족욕카페",
          address: "제주특별자치도 서귀포시 안덕면 창천리 785",
          image: "../media/논짓물해수족욕카페.jpg",
          latitude: 33.237194,
          longitude: 126.388042
        },
        {
          name: "바램목장&카페",
          address: "제주특별자치도 서귀포시 안덕면 동광리 258-4",
          image: "../media/바램목장&카페.jpg",
          latitude: 33.311147,
          longitude: 126.352471
        },
        {
          name: "곶자왈카페",
          address: "제주특별자치도 서귀포시 안덕면 상창리 2065-7번지",
          image: "../media/곶자왈카페.jpg",
          latitude: 33.283189,
          longitude: 126.349796
        },
        {
          name: "레이지박스",
          address: "제주특별자치도 서귀포시 안덕면 산방로 210",
          image: "../media/레이지박스.jpg",
          latitude: 33.236439,
          longitude: 126.312929
        },
        {
          name: "View St.",
          address: "제주특별자치도 서귀포시 안덕면 형제해안로 30",
          image: "../media/View St..jpg",
          latitude: 33.227791,
          longitude: 126.303542
        },
        {
          name: "게우지코지",
          address: "제주특별자치도 서귀포시 하효동 1371",
          image: "../media/게우지코지.jpg",
          latitude: 33.243842,
          longitude: 126.618684
        },
        {
          name: "카페 신효",
          address: "제주특별자치도 서귀포시 신효동 111",
          image: "../media/카페 신효.jpg",
          latitude: 33.263509,
          longitude: 126.615001
        },
        {
          name: "가까이",
          address: "제주특별자치도 서귀포시 하효동 보목포로 161",
          image: "../media/가까이.jpg",
          latitude: 33.242638,
          longitude: 126.617611
        },
        {
          name: "돌카페",
          address: "제주특별자치도 서귀포시 하효동 999",
          image: "../media/돌카페.jpg",
          latitude: 33.250313,
          longitude: 126.621023
        },
        {
          name: "서양차관",
          address: "제주특별자치도 서귀포시 하효동 1447",
          image: "../media/서양차관.jpg",
          latitude: 33.242121,
          longitude: 126.616005
        },
        {
          name: "오하효",
          address: "제주특별자치도 서귀포시 효돈동 600",
          image: "../media/오하효.jpg",
          latitude: 33.259138,
          longitude: 126.617854
        },
        {
          name: "낭커피",
          address: "제주특별자치도 서귀포시 남원읍 하례리 1415-1",
          image: "../media/낭커피.jpg",
          latitude: 33.291592,
          longitude: 126.609287
        },
        {
          name: "안녕소깍",
          address: "제주특별자치도 서귀포시 남원읍 하례리 158-2",
          image: "../media/안녕소깍.jpg",
          latitude: 33.258687,
          longitude: 126.624623
        },
        {
          name: "카페돌셋",
          address: "제주특별자치도 서귀포시 대정읍 상모리 73-2",
          image: "../media/카페돌셋.jpg",
          latitude: 33.211990,
          longitude: 126.292025
        },
        {
          name: "카페차롱",
          address: "제주특별자치도 서귀포시 안덕면 감산리 288",
          image: "../media/카페차롱.jpg",
          latitude: 33.259661,
          longitude: 126.354384
        },
        {
          name: "카페갤럭시아",
          address: "제주특별자치도 서귀포시 안덕면 사계남로216번길 29",
          image: "../media/카페갤럭시아.jpg",
          latitude: 33.233519,
          longitude: 126310554
        }
      ];

      if (local === "seoul") {
        shuffle(SeoulCafe);
        return SeoulCafe;
      }
      if (local === "busan") {
        shuffle(BusanCafe);
        return BusanCafe;
      }
      if (local === "jeju") {
        shuffle(JejuCafe);
        return JejuCafe;
      }
      return [];
    }

    function ActivityDataList(local) {
      const BusanActivity = [
        {
          name: "오륙도 스카이워크",
          address: "부산광역시 남구 오륙도로 137",
          imageUrl: "../media/오륙도 스카이워크.jpg",
          lat: 35.10067,
          lng: 129.124408,
        },
        {
          name: "남천해변공원",
          address: "부산 수영구 남천2동 148-100",
          imageUrl: "../media/남천해변공원.jpg",
          lat: 35.146566,
          lng: 129.114793,
        },
        {
          name: "APEC나루공원",
          address: "부산광역시 해운대구 수영강변대로 93",
          imageUrl: "../media/APEC나루공원.jpg",
          lat: 35.170646,
          lng: 129.125442,
        },
        {
          name: "민락수변공원",
          address: "부산광역시 수영구 광안해변로 361",
          imageUrl: "../media/민락수변공원.jpg",
          lat: 35.146195,
          lng: 129.116304,
        },
        {
          name: "유엔 조각공원",
          address: "부산광역시 남구 대연제4동 779-1",
          imageUrl: "../media/유엔 조각공원.jpg",
          lat: 35.129669,
          lng: 129.097457,
        },
        {
          name: "대연수목전시원",
          address: "부산광역시 남구 대연동 713",
          imageUrl: "../media/대연수목전시원.jpg",
          lat: 35.125501,
          lng: 129.09894,
        },
        {
          name: "미포철길",
          address: "부산광역시 해운대구 중제1동 달맞이길50번길 20",
          imageUrl: "../media/미포철길.jpg",
          lat: 35.16002,
          lng: 129.170831,
        },
        {
          name: "청사포 다릿돌전망대",
          address: "부산광역시 해운대구 중동 산3-9",
          imageUrl: "../media/청사포 다릿돌전망대.jpg",
          lat: 35.164106,
          lng: 129.19678,
        },
        {
          name: "장산산림욕장",
          address: "부산광역시 해운대구 좌동 1381",
          imageUrl: "../media/장산산림욕장.jpg",
          lat: 35.185135,
          lng: 129.165142,
        },
        {
          name: "삼주다이아몬드베이",
          address: "부산광역시 남구 용호동 분포로 101",
          imageUrl: "../media/삼주다이아몬드베이.jpg",
          lat: 35.132969,
          lng: 129.1161,
        },
        {
          name: "동백섬 해안산책로",
          address: "부산광역시 해운대구 우제1동 707",
          imageUrl: "../media/동백섬 해안산책로.jpg",
          lat: 35.153485,
          lng: 129.153601,
        },
        {
          name: "달맞이언덕",
          address: "부산광역시 해운대구 중제1동",
          imageUrl: "../media/달맞이언덕.jpg",
          lat: 35.155716,
          lng: 129.178294,
        },
        {
          name: "문탠로드",
          address: "부산광역시 해운대구 중제2동 달맞이길",
          imageUrl: "../media/문탠로드.jpg",
          lat: 35.156372,
          lng: 129.18028,
        },
        {
          name: "부산 엑스 더 스카이",
          address: "부산광역시 해운대구 달맞이길 30",
          imageUrl: "../media/부산 엑스 더 스카이.jpg",
          lat: 35.159844,
          lng: 129.169804,
        },
        {
          name: "달맞이동산",
          address: "부산광역시 해운대구 중동",
          imageUrl: "../media/달맞이동산.jpg",
          lat: 35.156974,
          lng: 129.182217,
        },
        {
          name: "해운대해수욕장",
          address: "부산광역시 해운대구 중동 1415-27",
          imageUrl: "../media/해운대해수욕장.jpg",
          lat: 35.159021,
          lng: 129.16035,
        },
        {
          name: "F1963",
          address: "부산광역시 수영구 구락로123번길 20",
          imageUrl: "../media/F1963.jpg",
          lat: 35.176698,
          lng: 129.115319,
        },
        {
          name: "수영팔도시장",
          address: "부산광역시 수영구 수영로705번길 36",
          imageUrl: "../media/수영팔도시장.jpg",
          lat: 35.16878,
          lng: 129.116916,
        },
        {
          name: "부산시립미술관",
          address: "부산광역시 해운대구 APEC로 58",
          imageUrl: "../media/부산시립미술관.jpg",
          lat: 35.166736,
          lng: 129.137084,
        },
        {
          name: "해리단길",
          address: "부산광역시 해운대구 우동",
          imageUrl: "../media/해리단길.jpg",
          lat: 35.164835,
          lng: 129.157635,
        },
        {
          name: "광안리해수욕장",
          address: "부산광역시 수영구 광안동 193-13",
          imageUrl: "../media/광안리해수욕장.jpg",
          lat: 35.153158,
          lng: 129.118704,
        }
      ];
      const SeoulActivity = [
        {
          name: "경복궁",
          address: "서울특별시 종로구 사직로 161",
          image: "../media/경복궁.jpg",
          latitude: 37.57963,
          longitude: 126.977
        },
        {
          name: "N서울타워",
          address: "서울특별시 용산구 남산공원길 105",
          image: "../media/N서울타워.jpg",
          latitude: 37.55119,
          longitude: 126.9883
        },
        {
          name: "북촌한옥마을",
          address: "서울특별시 종로구 계동길",
          image: "../media/북촌한옥마을.jpg",
          latitude: 37.58154,
          longitude: 126.985
        },
        {
          name: "3D블랙아트",
          address: "서울특별시 중구 명동8가길 27",
          image: "../media/3D블랙아트.jpg",
          latitude: 37.56189,
          longitude: 126.9865
        },
        {
          name: "명동실탄사격장",
          address: "서울특별시 중구 충무로2가 11-1 명동사격장 번지 선샤인빌딩 3층",
          image: "../media/명동실탄사격장.jpg",
          latitude: 37.5619,
          longitude: 126.9864
        },
        {
          name: "국립민속박물관",
          address: "서울특별시 종로구 삼청로 37",
          image: "../media/국립민속박물관.jpg",
          latitude: 37.58167,
          longitude: 126.979
        },
        {
          name: "롯데월드",
          address: "서울특별시 송파구 올림픽로 240",
          image: "../media/롯데월드.jpg",
          latitude: 37.5111,
          longitude: 127.0982
        },
        {
          name: "코엑스 아쿠아리움",
          address: "서울특별시 강남구 영동대로 513",
          image: "../media/코엑스아쿠아리움.jpg",
          latitude: 37.5131,
          longitude: 127.0583
        },
        {
          name: "명동난타극장",
          address: "서울특별시 중구 명동길 26 유네스코회관",
          image: "../media/명동난타극장.jpg",
          latitude: 37.56345,
          longitude: 126.9837
        },
        {
          name: "페인터즈-명보아트홀",
          address: "서울시 중구 마른내로 47",
          image: "../media/페인터즈-명보아트홀.jpg",
          latitude: 37.56469,
          longitude: 126.9932
        },
        {
          name: "어린이 대공원",
          address: "서울특별시 광진구 능동로 216",
          image: "../media/어린이대공원.jpg",
          latitude: 37.54941,
          longitude: 127.0818
        },
        {
          name: "올림픽공원",
          address: "서울특별시 송파구 올림픽로 424",
          image: "../media/올림픽공원.jpg",
          latitude: 37.52066,
          longitude: 127.1215
        },
        {
          name: "잠실야구장",
          address: "서울특별시 송파구 올림픽로 25",
          image: "../media/잠실야구장.jpg",
          latitude: 37.51223,
          longitude: 127.0721
        },
        {
          name: "별마당도서관",
          address: "서울특별시 강남구 영동대로 513 스타필드 코엑스몰 B1",
          image: "../media/별마당도서관.jpg",
          latitude: 37.50991,
          longitude: 127.0599
        },
        {
          name: "리얼이스케이프첼린지",
          address: "서울특별시 마포구 와우산로27길 21 4층",
          image: "../media/리얼이스케이프첼린지.jpg",
          latitude: 37.55413,
          longitude: 126.9271
        },
        {
          name: "스머프매직포레스트홍대",
          address: "서울특별시 마포구 어울마당로 151-1 2층",
          image: "../media/스머프매직포레스트홍대.jpg",
          latitude: 37.55682,
          longitude: 126.9267
        },
        {
          name: "키자니아",
          address: "서울특별시 송파구 올림픽로 240",
          image: "../media/키자니아.jpg",
          latitude: 37.51087,
          longitude: 127.0965
        },
        {
          name: "한강요트투어",
          address: "서울특별시 서초구 잠원동 121-9",
          image: "../media/한강요트투어.jpg",
          latitude: 37.51953,
          longitude: 127.0081
        },
        {
          name: "강북롤러스케이트",
          address: "서울특별시 강북구 도봉로 342 지하 2층",
          image: "../media/강북롤러스케이트.jpg",
          latitude: 37.63789,
          longitude: 127.0261
        },
        {
          name: "더메이즈",
          address: "서울특별시 강남구 역삼동 봉은사로18길 76 스타팰리스 4층",
          image: "../media/더메이즈.jpg",
          latitude: 37.50176,
          longitude: 127.0274
        },
        {
          name: "레드버튼강남",
          address: "서울특별시 강남구 역삼동 814-5 1층",
          image: "../media/레드버튼강남.jpg",
          latitude: 37.50211,
          longitude: 127.0261
        },
        {
          name: "비밀의화원",
          address: "서울특별시 서초구 유화빌딩 지하 2층",
          image: "../media/비밀의화원.jpg",
          latitude: 37.50154,
          longitude: 127.0254
        },
        {
          name: "성수미술관",
          address: "서울특별시 강남구 봉은사로4길 20 지하 1층",
          image: "../media/성수미술관.jpg",
          latitude: 37.50343,
          longitude: 127.0263
        },
        {
          name: "하이커그라운드",
          address: "서울특별시 중구 청계천로 40",
          image: "../media/하이커그라운드.jpg",
          latitude: 37.56859,
          longitude: 126.9819
        },
        {
          name: "블루스퀘어",
          address: "서울특별시 용산구 한남동 이태원로 294",
          image: "../media/블루스퀘어.jpg",
          latitude: 37.54088,
          longitude: 127.0025
        },
        {
          name: "동대문디자인플라자",
          address: "서울특별시 중구 을지로 281",
          image: "../media/동대문디자인플라자.jpg",
          latitude: 37.5665,
          longitude: 127.0092
        },
        {
          name: "더 현대 서울",
          address: "서울특별시 영등포구 여의대로 108",
          image: "../media/더현대서울.jpg",
          latitude: 37.52587,
          longitude: 126.9284
        },
        {
          name: "커먼그라운드",
          address: "서울특별시 광진구 아차산로 200",
          image: "../media/커먼그라운드.jpg",
          latitude: 37.54115,
          longitude: 127.0659
        },
        {
          name: "언더스탠드에비뉴",
          address: "서울특별시 성동구 왕십리로 63",
          image: "../media/언더스탠드에비뉴.jpg",
          latitude: 37.54355,
          longitude: 127.0436
        },
        {
          name: "컬러풀뮤지엄",
          address: "서울특별시 종로구 관훈동 인사동8길 49",
          image: "../media/컬러풀뮤지엄.jpg",
          latitude: 37.57459,
          longitude: 126.9837
        },
        {
          name: "숲속한방랜드",
          address: "서울특별시 서대문구 봉원사길 75-7",
          image: "../media/숲속한방랜드.jpg",
          latitude: 37.57025,
          longitude: 126.9457
        },
        {
          name: "빛의 시어터",
          address: "서울특별시 광진구 광장동 워커힐로 177 워커힐호텔 B1층",
          image: "../media/빛의시어터.jpg",
          latitude: 37.55535,
          longitude: 127.1104
        },
        {
          name: "서울스카이",
          address: "서울특별시 송파구 올림픽로 300",
          image: "../media/서울스카이.jpg",
          latitude: 37.51252,
          longitude: 127.1023
        },
        {
          name: "더숲 초소책방",
          address: "서울특별시 종로구 인왕산로 172",
          image: "../media/더숲초소책방.jpg",
          latitude: 37.5859,
          longitude: 126.9642
        },
        {
          name: "그라운드 시소 서촌",
          address: "서울 종로구 자하문로6길 18-8",
          image: "../media/그라운드시소서촌.jpg",
          latitude: 37.57776,
          longitude: 126.9729
        },
        {
          name: "송파 책 박물관",
          address: "서울특별시 송파구 송파대로37길 77",
          image: "../media/송파책박물관.jpg",
          latitude: 37.4989,
          longitude: 127.1045
        },
        {
          name: "서소문 역사박물관",
          address: "서울특별시 중구 칠패로 5",
          image: "../media/서소문역사박물관.jpg",
          latitude: 37.56056,
          longitude: 126.9688
        },
        {
          name: "돈의문박물관마을",
          address: "서울특별시 종로구 송월길 14-3",
          image: "../media/돈의문박물관마을.jpg",
          latitude: 37.56879,
          longitude: 126.9685
        },
        {
          name: "경리단길",
          address: "서울특별시 용산구 이태원동 210-65",
          image: "../media/경리단길.jpg",
          latitude: 37.53844,
          longitude: 126.9875
        },
        {
          name: "피규어뮤지엄w",
          address: "서울특별시 강남구 선릉로158길 3",
          image: "../media/피규어뮤지엄w.jpg",
          latitude: 37.52576,
          longitude: 127.0404
        },
        {
          name: "남산골 한옥마을",
          address: "서울특별시 중구 퇴계로34길 28",
          image: "../media/남산골한옥마을.jpg",
          latitude: 37.55931,
          longitude: 126.9945
        },
        {
          name: "남산 케이블카",
          address: "서울특별시 중구 소파로 83",
          image: "../media/남산케이블카.jpg",
          latitude: 37.55622,
          longitude: 126.9838
        },
        {
          name: "가온다리",
          address: "서울특별시 종로구 청운효자동 산4-38",
          image: "../media/가온다리.jpg",
          latitude: 37.58645,
          longitude: 126.965
        },
        {
          name: "디뮤지엄",
          address: "서울특별시 성동구 왕십리로 83-21",
          image: "../media/디뮤지엄.jpg",
          latitude: 37.54384,
          longitude: 127.0442
        },
        {
          name: "성수아트홀",
          address: "서울특별시 성동구 뚝섬로1길 43",
          image: "../media/성수아트홀.jpg",
          latitude: 37.54541,
          longitude: 127.047
        },
        {
          name: "hide and seek",
          address: "서울특별시 종로구 인사동길 44 쌈지길 B2",
          image: "../media/hideandseek.jpg",
          latitude: 37.57419,
          longitude: 126.9848
        },
        {
          name: "아이홉 맥주공방",
          address: "서울특별시 송파구 삼전동 백제고분로 243",
          image: "../media/아이홉맥주공방.jpg",
          latitude: 37.50299,
          longitude: 127.0937
        },
        {
          name: "도토리 캐리커쳐",
          address: "서울특별시 마포구 동교로38길 34",
          image: "../media/도토리캐리커쳐.jpg",
          latitude: 37.56138,
          longitude: 126.9255
        },
        {
          name: "심파티",
          address: "서울특별시 용산구 이태원동 번지 지하 79-44 1층",
          image: "../media/심파티.jpg",
          latitude: 37.53246,
          longitude: 126.9928
        },
        {
          name: "아트쉬프트",
          address: "서울특별시 중구 충무로 54-17 5층",
          image: "../media/아트쉬프트.jpg",
          latitude: 37.56585,
          longitude: 126.9934
        }
      ];
      const JejuActivity = [
        {
          name: "두맹이골목",
          address: "제주특별자치도 제주시 일도2동 1006-42",
          image: "../media/두맹이골목.jpg",
          latitude: 33.512196,
          longitude: 126.533407
        },
        {
          name: "삼다공원",
          address: "제주특별자치도 제주시 연동 301-1",
          image: "../media/삼다공원.jpg",
          latitude: 33.490399,
          longitude: 126.496202
        },
        {
          name: "제주 4.3 평화공원",
          address: "제주특별자치도 제주시 명림로 430",
          image: "../media/제주 4.3 평화공원.jpg",
          latitude: 33.451647,
          longitude: 126.619015
        },
        {
          name: "수목원테마파크",
          address: "제주특별자치도 제주시 연동 1329",
          image: "../media/수목원테마파크.jpg",
          latitude: 33.470601,
          longitude: 126.488280
        },
        {
          name: "한라수목원",
          address: "제주특별자치도 제주시 수목원길 72",
          image: "../media/한라수목원.jpg",
          latitude: 33.469926,
          longitude: 126.493293
        },
        {
          name: "용두암",
          address: "제주특별자치도 제주시 용담2동 용두암길 15",
          image: "../media/용두암.jpg",
          latitude: 33.516221,
          longitude: 126.512090
        },
        {
          name: "어승생악",
          address: "제주특별자치도 제주시 해안동 산 220-13",
          image: "../media/어승생악.jpg",
          latitude: 33.396588,
          longitude: 126.489090
        },
        {
          name: "별빛누리공원",
          address: "제주특별자치도 제주시 선돌목동길 60",
          image: "../media/별빛누리공원.jpg",
          latitude: 33.444584,
          longitude: 126.549162
        },
        {
          name: "제주절물자연휴양림",
          address: "제주특별자치도 제주시 명림로 584",
          image: "../media/제주절물자연휴양림.jpg",
          latitude: 33.439440,
          longitude: 126.629470
        },
        {
          name: "제주동문시장",
          address: "제주특별자치도 제주시 특별자치도 동문시장",
          image: "../media/제주동문시장.jpg",
          latitude: 33.513056,
          longitude: 126.528052
        },
        {
          name: "노루생태관찰원",
          address: "제주특별자치도 제주시 명림로 520",
          image: "../media/노루생태관찰원.jpg",
          latitude: 33.444336,
          longitude: 126.626784
        },
        {
          name: "제주신산근린공원",
          address: "제주특별자치도 제주시 일도이동 885",
          image: "../media/제주신산근린공원.jpg",
          latitude: 33.505926,
          longitude: 126.533005
        },
        {
          name: "민속자연사박물관",
          address: "제주특별자치도 제주시 삼성로 40",
          image: "../media/민속자연사박물관.jpg",
          latitude: 33.506484,
          longitude: 126.531641
        },
        {
          name: "어영공원",
          address: "제주특별자치도 제주시 용담삼동 2292-29",
          image: "../media/어영공원.jpg",
          latitude: 33.520382,
          longitude: 126.494461
        },
        {
          name: "도두 무지개해안도로",
          address: "제주특별자치도 제주시 도두일동",
          image: "../media/도두 무지개해안도로.jpg",
          latitude: 33.509254,
          longitude: 126.472002
        },
        {
          name: "산지등대",
          address: "제주특별자치도 제주시 건입동 사라봉동길 108-1",
          image: "../media/산지등대.jpg",
          latitude: 33.521296,
          longitude: 126.545890
        },
        {
          name: "김만덕 기념관",
          address: "제주특별자치도 제주시 건입동 사라봉동길 108-1",
          image: "../media/김만덕 기념관.jpg",
          latitude: 33.515976,
          longitude: 126.530451
        },
        {
          name: "넥슨컴퓨터박물관",
          address: "제주특별자치도 제주시 건입동 사라봉동길 108-1",
          image: "../media/넥슨컴퓨터박물관.jpg",
          latitude: 33.471686,
          longitude: 126.485028
        },
        {
          name: "아라리오뮤지엄",
          address: "제주특별자치도 제주시 삼도이동 탑동로 14",
          image: "../media/아라리오뮤지엄.jpg",
          latitude: 33.517410,
          longitude: 126.523457
        },
        {
          name: "국립제주박물관",
          address: "제주특별자치도 제주시 일주동로 17",
          image: "../media/국립제주박물관.jpg",
          latitude: 33.513472,
          longitude: 126.548971
        },
        {
          name: "제주 카트장",
          address: "제주특별자치도 제주시 조천읍 와흘상서2길 4",
          image: "../media/제주 카트장.jpg",
          latitude: 33.482314,
          longitude: 126.638795
        },
        {
          name: "캐니언파크",
          address: "제주특별자치도 제주시 연동 삼무로 51",
          image: "../media/캐니언파크.jpg",
          latitude: 33.490235,
          longitude: 126.492482
        },
        {
          name: "사려니숲길",
          address: "제주특별자치도 제주시 조천읍 교래리 산 137-1",
          image: "../media/사려니숲길.jpg",
          latitude: 33.422668,
          longitude: 126.626442
        },
        {
          name: "여미지 식물원",
          address: "제주특별자치도 서귀포시 중문관광로 93",
          image: "../media/여미지 식물원.jpg",
          latitude: 33.252567,
          longitude: 126.414304
        },
        {
          name: "월령포구",
          address: "제주특별자치도 서귀포시 말질로 462",
          image: "../media/월령포구.jpg",
          latitude: 33.234345,
          longitude: 126.463461
        },
        {
          name: "쇠소깍",
          address: "제주특별자치도 서귀포시 쇠소깍로 138",
          image: "../media/쇠소깍.jpg",
          latitude: 33.252358,
          longitude: 126.623453
        },
        {
          name: "휴애리 자연생활공원",
          address: "제주특별자치도 서귀포시 남원읍 신례동로 256",
          image: "../media/휴애리 자연생활공원.jpg",
          latitude: 33.308745,
          longitude: 126.633814
        },
        {
          name: "제지기오름",
          address: "제주특별자치도 서귀포시 보목동 275-1",
          image: "../media/제지기오름.jpg",
          latitude: 33.241884,
          longitude: 126.609759
        },
        {
          name: "동백포레스트",
          address: "제주특별자치도 서귀포시 남원읍 신례리 1751-2",
          image: "../media/동백포레스트.jpg",
          latitude: 33.300893,
          longitude: 126.633325
        },
        {
          name: "위미리수국길",
          address: "제주특별자치도 서귀포시 남원읍 위미리 668-4",
          image: "../media/위미리수국길.jpg",
          latitude: 33.275747,
          longitude: 126.683729
        },
        {
          name: "남원큰엉해안",
          address: "제주특별자치도 서귀포시 남원읍 남원 2리",
          image: "../media/남원큰엉해안.jpg",
          latitude: 33.273306,
          longitude: 126.704844
        },
        {
          name: "코코몽에코파크",
          address: "제주특별자치도 서귀포시 남원읍 태위로 536",
          image: "../media/코코몽에코파크.jpg",
          latitude: 33.274610,
          longitude: 126.705897
        },
        {
          name: "레몬 뮤지엄",
          address: "제주특별자치도 서귀포시 남원읍 하례로620번길 41",
          image: "../media/레몬 뮤지엄.jpg",
          latitude: 33.298715,
          longitude: 126.617857
        },
        {
          name: "신영영화박물관",
          address: "제주특별자치도 서귀포시 남원읍 태위로 536",
          image: "../media/신영영화박물관.jpg",
          latitude: 33.274412,
          longitude: 126.705346
        },
        {
          name: "성읍민속마을",
          address: "제주특별자치도 서귀포시 표선면 성읍정의현로 30번지",
          image: "../media/성읍민속마을.jpg",
          latitude: 33.386343,
          longitude: 126.799724
        },
        {
          name: "혼인지",
          address: "제주특별자치도 서귀포시 성산읍 온평리 1693",
          image: "../media/혼인지.jpg",
          latitude: 33.415997,
          longitude: 126.893854
        },
        {
          name: "김녕미로공원",
          address: "제주특별자치도 제주시 구좌읍 만장굴길 122",
          image: "../media/김녕미로공원.jpg",
          latitude: 33.536873,
          longitude: 126.772549
        },
        {
          name: "일출랜드",
          address: "제주특별자치도 서귀포시 성산읍 중산간동로 4150-30",
          image: "../media/일출랜드.jpg",
          latitude: 33.382274,
          longitude: 126.841841
        },
        {
          name: "만장굴",
          address: "제주특별자치도 제주시 구좌읍 만장굴길 182",
          image: "../media/만장굴.jpg",
          latitude: 33.528242,
          longitude: 126.770302
        },
        {
          name: "미천굴",
          address: "제주특별자치도 서귀포시 성산읍 삼달리 1010",
          image: "../media/미천굴.jpg",
          latitude: 33.383393,
          longitude: 126.842464
        },
        {
          name: "거슨새미오름",
          address: "제주특별자치도 제주시 구좌읍 송당리 산145",
          image: "../media/거슨새미오름.jpg",
          latitude: 33.451296,
          longitude: 126.760545
        },
        {
          name: "조랑말체험공원",
          address: "제주특별자치도 서귀포시 표선면 녹산로 381-15",
          image: "../media/조랑말체험공원.jpg",
          latitude: 33.383098,
          longitude: 126.736326
        },
        {
          name: "메이즈랜드",
          address: "제주특별자치도 제주시 구좌읍 비자림로 2134-47",
          image: "../media/메이즈랜드.jpg",
          latitude: 33.488740,
          longitude: 126.800968
        },
        {
          name: "안돌오름",
          address: "제주특별자치도 제주시 구좌읍 송당리 산66-2",
          image: "../media/안돌오름.jpg",
          latitude: 33.457754,
          longitude: 126.755279
        },
        {
          name: "김영갑갤러리",
          address: "제주특별자치도 서귀포시 성산읍 삼달로 137",
          image: "../media/김영갑갤러리.jpg",
          latitude: 33.371990,
          longitude: 126.854254
        },
        {
          name: "비자림",
          address: "제주특별자치도 제주시 구좌읍 비자숲길 55",
          image: "../media/비자림.jpg",
          latitude: 33.484269,
          longitude: 126.806488
        },
        {
          name: "굴동포구",
          address: "제주특별자치도 제주시 구좌읍 하도리 385-12",
          image: "../media/굴동포구.jpg",
          latitude: 33.522880,
          longitude: 126.898221
        },
        {
          name: "워너비제주",
          address: "제주특별자치도 제주시 구좌읍 행원로9길 8-1",
          image: "../media/워너비제주.jpg",
          latitude: 33.553862,
          longitude: 126.808419
        },
        {
          name: "세화해변",
          address: "제주특별자치도 제주시 구좌읍 해녀박물관길 26",
          image: "../media/세화해변.jpg",
          latitude: 33.525434,
          longitude: 126.860186
        }
      ];

      if (local === "seoul") {
        shuffle(SeoulActivity);
        return SeoulActivity;
      }
      if (local === "busan") {
        shuffle(BusanActivity);
        return BusanActivity;
      }
      if (local === "jeju") {
        shuffle(JejuActivity);
        return JejuActivity;
      }
    }

    console.log(getDataList(local));
  
    DinningDataList(local).forEach((item, index) => {
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

    CafeDataList(local).forEach((item, index) => {
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
  
      const cafeContent = document.querySelector("#cafe-content");
      cafeContent.appendChild(finalsum);
    });

    ActivityDataList(local).forEach((item, index) => {
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
  
      const activityContent = document.querySelector("#activity-content");
      activityContent.appendChild(finalsum);
    });

  
    var map;
    var center = new kakao.maps.LatLng(35.045277, 128.969343); // 초기 지도 중심 좌표
    var marker = null;
    function initializeMap() {
      var mapContainer = document.getElementById("map");
      var mapOptions = {
        center: center,
        level: 3,
      };
      map = new kakao.maps.Map(mapContainer, mapOptions);
      var finalsumElements = document.querySelectorAll(".finalsum");
      finalsumElements.forEach(function (finalsum, index) {
        finalsum.addEventListener("click", function (e) {
          const coordinates = {
            lat: e.currentTarget.getAttribute("data-lat"),
            lng: e.currentTarget.getAttribute("data-lng"),
          };
          if (marker) {
            marker.setMap(null); 
            marker = null;
          } else {
            marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(coordinates.lat, coordinates.lng),
              map: map,
            });
          }
          map.setCenter(new kakao.maps.LatLng(coordinates.lat, coordinates.lng));
        });
      });
    }
    window.onload = function () {
      initializeMap();
    };
  });
  