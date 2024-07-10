const LOCAL_PORT = 8686; // 백앤드 로컬 서버 포트번호

// 예를 들어 지금 요청하는 브라우저의 host가 http://localhost:3000 이라면
// hostname은 localhost만 리턴
// http://www.naver.com => hostname은 www.naver.com만 리턴
const clientHostName = window.location.hostname;

let backendHostName;

if (clientHostName === "localhost") {
  backendHostName = "http://localhost" + LOCAL_PORT;
} else if (clientHostName === "www.bananagrape.co.kr") {
  backendHostName = "https://api.myapi.com";
}

const API_BASE_URL = backendHostName;

const EVENT = "/events";

export const EVENT_URL = API_BASE_URL + EVENT;
