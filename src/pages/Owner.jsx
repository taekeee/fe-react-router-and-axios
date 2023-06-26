import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';

const Owner = () => {
    const navigate = useNavigate();
    const {ownerId} = useParams(); //useParams를 사용하여 URL 파라미터 객체를 가져온다.
    const [articles, setArticles] = useState([]);


    //화면을 렌더링했을 때, 이때 ownerId값이 바뀔 때마다 해당 함수가 실행된다.
    //ownerId의 방명록에 현재 방명록이 존재하는지, 않하는지 판단하기 위함.
    useEffect (()=> {
        axios //해당 ownerId의 정보를 읽어옴.
        .get(`https://guestbook.jmoomin.com/${ownerId}/articles`)

        //API 요청을 성공한 경우, data에 저장된 값들, 즉 객체를 articles 변수에 저장한다.
        .then((res) => {
            setArticles(res.data)
        })

        //API 요청을 실패한 경우
        .catch((res)=> {
            alert(res);
        })
    }, [ownerId]);


    //"방명록 남기기" 버튼 클릭 시, "방명록 남기기 페이지"로 이동.
    // `` (backtick)사용 : 템플릿 리터럴. 문자열 내에 변수나 표현식을 쉽게 삽입할 수 있도록 함.
    // $ : 템플릿 리터럴 내에서 변수나 표현식을 삽입하는 역할.
    const createArticle = () => {
        navigate(`/${ownerId}/create`)
    }

    //삼항 연산자를 이용 -> articles에 값이 저장되어있는 경우(TRUE)와 없는 경우(FALSE)
    //이때, True인 경우 -> 기록된 방명록의 제목을 unodered list형태(ul)로 나타낸다.
    //map함수에서 key를 사용하는 이유 -> 기존의 요소는 렌더링하지 않고, 변화가 감지된 요소만 리렌더링하기 위함. 효율적인 DOM사용.
    //map함수에서 콜백함수에서 retun문을 사용해야하는 이유
    return (
        <>
        <h1>{ownerId}님의 방명록</h1>

        {articles.length ? (
            <ul>
                {
                articles.map((article)=>{
                    return(
                        <li key={article.id}>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                        </li>
                    );
                })
                }
            </ul>
        )
        : (<h1>방명록이 없습니다.</h1>)
        }

        <button onClick={createArticle}>방명록 남기기</button>
        </>
        
    );
};

export default Owner;