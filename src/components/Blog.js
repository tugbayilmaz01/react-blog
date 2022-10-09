import Cards from "./Cards"
import {useEffect, useState} from "react"
function Blog(){

    const [posts, setPosts] = useState()
        async function getPost(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const responseData = await response.json()
            setPosts(responseData)
        }
        useEffect(()=> {
            getPost()
        },[])
        console.log(posts)
    return(
        
       <div className="blog container d-flex flex-column align-items-center">
       <h2>Latest</h2> 
       {posts && posts.map((item,idx)=>{
        console.log(item)
        return (
        <Cards key={idx} body={item.body} title={item.title}/> )
    })}            
       </div> 
       

    )
}

export default Blog;