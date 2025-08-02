import React from "react";
import Article from "./Article";


function ArticleList({ posts = [] }){
    return (
        <main>
             
            {posts.map((article) => (
                <Article key={article.id}>
                    title={article.title}
                    date={article.date}
                    preview={article.preview}
                     </Article>
            ))}
        
        </main>
        


    );
}

export default ArticleList;
//{props.posts.map(aritcle=>{
//                return <p key={aritcle.id}>{aritcle}</p>
 //           })}