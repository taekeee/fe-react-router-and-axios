import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Article = () => {
    const {articleId} = useParams();
    const [article,setArticle] = useState("");
    const navigate = useNavigate();

    //articleId 값이 변할 때마다, 해당 함수가 실행된다.
    useEffect(()=>{
        axios
        .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
        .then((res)=>{
            setArticle(res.data);
        })
        .catch((res)=>{
            alert(res);
         })
    },[articleId]);
 

    //"수정하기" 버튼 클릭 시, 해당 id의 방명록 수정페이지로 이동
    const editArticle = () => {
        navigate(`/articles/${article.id}/edit`);
    };


    //"제거하기" 버튼 클릭 시, 해당 id의 방명록이 삭제된다.
    const deleteArticle = () => {
        axios
        .delete(`https://guestbook.jmoomin.com/articles/${article.id}`)
        .then(()=>{
            navigate(-1); //정상적으로 삭제된 경우, 이전 페이지로 이동한다.
        })
        .catch((res)=>{
            alert(res);
        })
    };

    return article === null ? 
        (<p>loading</p>)
        : (
        <>
        <h1>{article.title}</h1>
        <br/>
        <p>{article.body}</p>
        <br/>
        <p>작성일: {article.createdAt}</p>
        <br/>
        <button onClick={editArticle}>수정하기</button>
        <button onClick={deleteArticle}>제거하기</button>
        </>
    );
};

export default Article;