import React from 'react';
import { useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateArticle = () => {
    const {ownerId} = useParams();
    const [Title,setTitle] = useState(""); //Tile과 Body의 초기값 : "" 공백으로 설정
    const [Body,setBody] = useState(""); //setTitle과 setBody함수가 실행될 때마다 해당 변수들이 업데이트 된다.
    const navigate = useNavigate();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };


    const handleBody = (e) => {
        setBody(e.target.value);
    };

    //방명록에 제목과 내용을 입력하고, 서버에 저장해주는 함수. "방명록 남기기"버튼 클릭 시 동작한다.
    //axios의 post method를 통해서 현재 ownerId주소의 방명록에 새로운 정보를 생성한다.
    const handleSubmit = () => {
        axios
        .post(`https://guestbook.jmoomin.com/${ownerId}/articles`, {
        title : Title,
        body : Body,
        })
        //정상적으로 방명록 작성이 완료된 경우(status=2xx), 이전 페이지로 이동한다.
        .then(()=>{
            navigate(-1); //이전페이지로 이동
        })
        //비정상적으로 동작할 경우, API요청이 실패한 경우를 알람으로 나타내준다.
        .catch((e)=>{
            alert(e);
        })
    };


    return (
        <>
        <h1>{ownerId}님에게 방명록 남기기</h1>
        <input type="text" name="Title" placeholder="제목" value={Title} onChange={handleTitle}></input>
        <br/>
        <input type="text" name="Body" placeholder="내용" value={Body} onChange={handleBody}></input>
        <br/>
        <button onClick={handleSubmit}>방명록 남기기!</button>
        </>
    );
};

export default CreateArticle;