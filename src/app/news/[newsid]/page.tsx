import React from 'react';

const NewsPage = async({params}: { params: Promise<{ newsid: string }> }) => {
    const {newsid} = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsid}`)
    const data = await res.json()
    const news = data.data
    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.text}</p>
        </div>
    );
};

export default NewsPage;