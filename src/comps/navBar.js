import './navBar.css';



function NavBar({isSticky}){
    

    return(
        <nav className={`navbar  navbar-expand-lg  p-3 ${isSticky==="yes" ? "sticky-navbar" :"static-navbar"}  `} id="mainNavBar " data-spy="affix" data-offset-top="0">
            <div className="container containerNavbar text-lg-center">
                <div className='logoHolder col-lg-4 col-sm-3 text-start '>
                    <h1 className="navbar-brand text-white me-5" to="/"><h1 id='LogoImg'> Logo </h1> </h1>
                </div>
                
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" id='bur' viewBox="0 0 448 512">
                <path fill='#fff' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
                </button>
                
                <div className="collapse navbar-collapse justify-content-lg-end text-start" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 d-flex text-white text-start">
                    <li className="nav-item  ">
                            <a className=" nav-link me-lg-4 "   to="/contact" role="button">تواصل الان</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-lg-4"   to="/Portfolio" role="button">معرض اعمالنا</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "   to="/about">من نحن</a>
                        </li>
                        <li className="nav-item " id='active'>
                            <a className="nav-link "   aria-current="page" to="/">خدماتنا</a>
                        </li>
                     
                      
                      
                    </ul>
                </div>
            </div>
        </nav>
    )
  
}

export default NavBar;



