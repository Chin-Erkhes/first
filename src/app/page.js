"use client"

import { useEffect, useState } from "react";


const Page = () => {
    const [article, setArticle] = useState([]);
    // const [data, setData] = useState("")

    useEffect(() => {   
     async function fetchArticles() {
        const response = await fetch(`https://dev.to/api/articles?per_page=10&page=1`)
        const data1 = await response.json();
        setArticle(data1)
        console.log(data1)
     };
     fetchArticles();
    }, []);
    return (
        <div>
            <h1>All Blog Post</h1>
            {article.map((articles) => (
               <div key={articles.id} className="article-image">
                <div className="article-description">{article.description}</div>
               <img className="article-image"
                   src={articles.cover_image}/>
                   <div className="article-tag">{article.tags}</div>
                   <div className="page-title">{articles.title}</div>
                   <div className="user-profile">{articles.profile_image}</div>
                   <div className="user-name">{article.username}</div>
                   <div className="user-date">{article.readable_publish_date}</div>
              </div>
            ))}
        </div>
 );
};

export default Page;