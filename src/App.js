import { BrowserRouter, Routes, Route } from "react-router-dom";
import Owner from "./pages/Owner";
import NotFoundPage from "./pages/NotFoundPage";
import Article from "./pages/Article";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";

// 아래는 React Router 예시입니다.
// 총 5개의 page가 필요함.
// 1. URL 파라미터를 이용하여 특정 데이터(ownerId)의 방명록 페이지 => /:ownerId
// 2. 특정 유저에게 방명록 남기기 페이지 => /:ownerId/create
// 3. 방명록 제목 클릭 시 이동되는 상세보기 페이지 => /articles/:articleId
// 4. 작성한 방명록 수정하기 페이지 => /articles/:articleId/edit
// 5. 존재하지 않은 라우트에 요청하였을 때 표시되는 페이지 => *

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Owner />} />
        <Route path="/:ownerId/create" element={<CreateArticle />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/articles/:articleId/edit" element={<EditArticle/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
