# ✨ 멋쟁이사자처럼 11기 FE - REACT ROUTER X AXIOS ✨

> 여러분, 기말고사 기간 정말 고생 많으셨습니다! 이번 세션과 과제를 통해 React Router를 이용한 Client Side Routing과 Axios를 활용한 REST API 사용에 대해 학습할 예정입니다.

<br/>

## 🌿 잠깐! 세션이 이해가 가지 않았나요? 🌿

세션 내용이 이해가 잘 가지 않은 여러분들을 위한 자료를 정리했어요. 아래를 참고해주세요.

<br/>

> [얄팍한 코딩사전 - REST API가 뭔가요?](https://www.youtube.com/watch?v=iOueE9AXDQQ)  
> REST API와 관련된 개념을 파악할 수 있는 영상입니다.

<br/>

> [LIKELION FE - React Router + REST API](https://velog.io/@pexe99/LIKELION-FE-React-Router-REST-API)  
> 이번 세션에 대한 내용을 정리한 포스팅입니다.

<br/>

> [React Router v6 튜토리얼](https://velog.io/@velopert/react-router-v6-tutorial)  
> React Router와 관련된 velog 트렌딩 포스팅입니다.

<br/>

> [REST(Representational State Transfer) API](https://hudi.blog/rest-api/)  
> REST API와 관련된 블로그 포스팅입니다.

<br/>

> [Axios 공식 문서](https://axios-http.com/kr/docs/intro)  
> Axios 한글화 공식 문서입니다.

<br/>

> [Axios 러닝 가이드](https://yamoo9.github.io/axios/guide/usage.html#get-%EC%9A%94%EC%B2%AD)  
> 기본적인 Axios 관련 사용법들이 정리되어 있습니다.

## 🔥 실습 시작하기 🔥

> 아래 설명을 잘 읽고, 세션 과제를 제출해주세요.
> 제출은 [아기사자의 길 - React router x Axios] **Lionz 홈페이지에서 진행**해주세요.
> 제출은 **2023년 6월 25일 오후 11시 59분까지 진행**해주세요.

1. 현재 이 repository를 `Fork` 합니다.
2. `Fork`한 repository를 vsCode 터미널을 이용하여 `Clone` 합니다.
3. `Clone`받은 이후, `npm install` 을 실행하여 의존성 모듈을 설치합니다.
4. 터미널에서 `npm start` 을 실행하여 로컬 개발 서버를 실행합니다.
5. 아래 설명에 따라 개발을 진행한 이후, 결과물을 `Push`한 repository 링크를 제출합니다.

## 💫 이번에 개발할 것은? 💫

이번 세션 과제로 개발할 것은 **여러 페이지로 이루어진 웹 애플리케이션**입니다. 아래와 같이 다양한 페이지로 구성된 간단한 방명록 웹 애플리케이션을 개발합니다.

이전과는 달리 지금부터는 실제로 동작하는 백엔드 서버가 제공됩니다. 사전에 개발된 API 서버와 여러분의 웹 애플리케이션을 연동하여 페이지를 완성해주세요!

### ✔️ 구현 요구 사항 ✔️

총 5개의 페이지로 이루어진 방명록 웹 애플리케이션을 완성해주세요. 각 페이지별 구성과 주소는 아래와 같습니다.

> `http://localhost:3000/:ownerId`
> `ownerId` Param에 해당하는 유저의 모든 방명록 목록을 보여주는 페이지
> 해당 유저의 방명록이 존재하지 않으면 `방명록이 없습니다.` 등의 메세지를 표시하여 유저에게 피드백을 제공해주세요. 
> 방명록 목록은 제목만 출력하며, 제목을 클릭하면 방명록 상세 페이지로 이동합니다.

> `http://localhost:3000/articles/:articleId`
> 방명록 상세 페이지
> 제목과 내용, 작성일까지 확인할 수 있습니다.
> `제거하기` 버튼이 클릭 시에 방명록을 삭제하고 이전 페이지로 돌아갑니다.
> `수정하기` 버튼 클릭 시에 방명록 수정 페이지로 이동합니다.

> `http://localhost:3000/:ownerId/create`
> `ownerId` Param에 해당하는 유저에게 방명록을 작성하는 페이지
> 방명록 작성을 완료하면 이전 페이지로 이동합니다.

> `http://localhost:3000/articles/:articleId/edit`
> 방명록을 수정할 수 있는 페이지
> 수정을 완료하면 이전 페이지로 이동합니다.

> `기타 라우트`
> 올바르지 않은 주소로 접근 시에 `페이지를 찾을 수 없습니다.` 등의 메세지로 유저에데 패드백을 제공해주세요.