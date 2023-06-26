import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditArticle = () => {
    const {articleId} = useParams();
    const [Title,setTitle] = useState("");
    const [Body,setBody] = useState("");
    const navigate = useNavigate();

    //먼저, 수정하기 "전"의 제목과 내용이 입력란에 보여야한다.
    //따라서, axios "get" method를 통해 해당 id가 작성한 방명록의 제목과 내용을 가져온다.
    //이때, id 값이 바뀔 때마다, 해당 id에 해당하는 내용을 get해야한다. 
    //따라서, useEffect함수를 통해 작성해야한다.

    useEffect = ( () => {
        axios
        .get(`https://guestbook.jmoomin.com/articles/${articleId}`)
        .then((res)=>{
            setTitle(res.data.title);
            setBody(res.data.body);
        })
        .catch((res)=>{
            alert(res);
        })
    }, [articleId]);


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