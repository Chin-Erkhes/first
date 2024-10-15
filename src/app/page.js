"use client"

import { useEffect, useState } from "react";


const Page = () => {
    const [article, setArticle] = useState([]);
    // const [data, setData] = useState("")

    useEffect(() => {   
     async function fetchArticles() {
        const response = await fetch(`https://dev.to/api/articles?per_page=10&page=1`)
        const data1 = await response.json();
        setArticle(data1);
        console.log(data1);
     };
     fetchArticles();
    }, [skip]);

    const next = (a) => {
    }

    return (
        <div className="">   
            <div className="page-container">
            {article.map((articles) => (
               <div key={articles.id} className="article-container">
               <img className="article-image"
                   src={articles.cover_image}/>
                   <div className="article-tag">{articles.tags}</div>
                   <div className="page-title">{articles.title}</div>
                   <div className="container">
                   <div className="user-profile">{articles.profile_image}</div>
                   <div className="user-name">{articles.username}</div>
                   <div className="user-date">{articles.readable_publish_date}</div>
                   </div>
              </div>
            ))}
            </div>
            <div className="cont">
                <button onClick={() => next()} className="next-page">back</button>
                <button className="next-page">next</button>
            </div>
        </div>
 );
};

export default Page;