import { useEffect, useState, useCallback } from 'react';
import './newslist.css';
import config from '../../params/config';

export default function NewsList({collectionName, limit, paginator = false}) {
    const [news, setNews] = useState([]);

    const fetchNews = useCallback(async () => {
        const response = await fetch(config.api + 'get/' +collectionName+ '/');
        const answer = await response.json();
        setNews(answer.data);
    }, []);

    useEffect(
        () => {fetchNews()}, [fetchNews]
    );

    return (
        <>
        <h2>Новости</h2>
        <div className='news-list'>   
            {
                news && news.map(el => (
                    <div className='news-card'>
                        <img src={'./' + el.IMAGE} alt={el.NAME} />
                        <h3>{el.NAME}</h3>
                        <span>{el.OPISANUE}</span>
                    </div>
                ))
            }
        </div>
        </>
    )
}