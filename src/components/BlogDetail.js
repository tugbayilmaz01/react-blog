import Blog from "./Blog";
import  blogphoto from "../assets/blogphoto.jpg"; 

function BlogDetail(){
    return (
        <div style={{ backgroundImage:`url(${blogphoto})`,
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        marginTop:"0px"}}>
        
          <h2 style={{textAlign:"center", letterSpacing:"3px", padding:"20rem", paddingRight:"1px"}}>Welcome!</h2> 
      </div>
    );
}

export default BlogDetail;