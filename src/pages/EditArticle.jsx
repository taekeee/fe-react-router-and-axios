import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditArticle = () => {
    const {articleId} = useParams();
    const [Title,setTitle] = useState("");
    const [Body,setBody] = useState("");
    const navigate = useNavigate();
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleBody = (e) => {
        setBody(e.target.value);
    };

    
    //수정한 제목과 내용을 axios "put" method를 통해 입력한다.
    const handleSubmit = () => {
        axios
        .put(`https://guestbook.jmoomin.com/articles/${articleId}`,{
            title : Title,
            body : Body,
        })
        .then(()=>{
           navigate(-1); //수정이 완료되면 이전 페이지로 이동.
        })
        .catch((res)=>{
            alert(res);
        })
    };


    return (
        <>
        <input type="text" name="Title" placeholder="제목" value={Title} onChange={handleTitle}></input>
        <br/>
        <input type="text" name="Body" placeholder="내용" value={Body} onChange={handleBody}></input>
        <br/>
        <button onClick={handleSubmit}>방명록 남기기!</button>
        
        </>
    );
};

export default EditArticle;