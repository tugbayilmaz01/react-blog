
function Header(){
    return (
        <nav className="container d-flex flex-column">
    <h1>The Blog</h1>
    <ul className="navbar container d-flex align-items-center justify-content-center gap-3">
      <li className="nav-items">
       <a href="/user-list">Users</a></li> 
      <li>
      <a href="/blog-detail">Home Page</a> 
      </li> 
       <li>
       <a href="/">Blog</a> 
       </li> 
    </ul> 

  

    </nav>    
    )
}

export default Header;