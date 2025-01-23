import {Component} from "react";

export class ContentComponent extends Component {
    render() {
        return (
            <>
                <div id="page-top"></div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top">Portfolio</a>
                        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                                type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                                aria-controls="navbarResponsive"
                                aria-expanded="false" aria-label="Toggle navigation">
                            Menu<i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded "
                                                                         href="#skills">Skills</a></li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                         href="#about">About</a>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                                                         href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="masthead bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">
                        <img className="masthead-avatar mb-5" style={{"borderRadius": "50%","border":" 5px solid #4f4f53"}} src="./assets/me.jpg" alt="" />
                        <h2 className="masthead-heading text-uppercase mb-0 mt-3"> <a
                            href="./assets/pdf/resume.pdf" target="_blank"
                            style={{"color": "white", "textDecoration": "none"}}>Resume Here</a></h2>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <p className="masthead-subheading font-weight-light mb-0">Hello guys,  i'm a third year at rmutp university and my majoring is com-sci.</p>
                    </div>
                </header>


                <section className="page-section portfolio" id="skills">

                    <div className="container">

                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 p-3 mb-3">Some
                            skills</h2>

                        <div className="row justify-content-center">

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal1">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/spring-boot-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal2">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/node-js-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal3">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/android-studio-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal4">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/mysql-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal5">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/postgresql-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal6">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/mr-igot.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal7">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/javascript-ic.png"/>

                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal8">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/java-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal9">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/kotlin-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal10">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/git-ic.png"/>

                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal11">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/php-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal12">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/c-ic.png"/>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal13">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/ng-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal14">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/dk-ic.png"/>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                                     data-bs-target="#portfolioModal15">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i
                                            className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src="./assets/images/ln-ic.png"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">

                        <section id="experience" className="experience">
                            <div className="section-heading text-center">
                                <h2 className="page-section-heading text-center text-uppercase"
                                    style={{"marginBottom": "5px", "color": "white"}}>Education</h2>
                            </div>
                            <div className="container">
                                <div className="experience-content">
                                    <div className="main-timeline">
                                        <ul>

                                            <li style={{"listStyleType": "none"}}>
                                                <div className="single-timeline-box fix">
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <div className="experience-time text-right">
                                                                <h2>2022 - Present</h2>
                                                                <h3 style={{"color": "white"}}>computer science</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-offset-1 col-md-5">
                                                            <div className="">
                                                                <div className="">
                                                                    <h4 className="">
                                                                        Rajamangala University of Technology Phra Nakhon
                                                                        (RMUTP)
                                                                    </h4>
                                                                    <h5>Dusit Bangkok, Thailand</h5>
                                                                    <p className="">
                                                                        almost of the time keep to practice programming
                                                                        languages including many frameworks
                                                                        And I am good for backend (Using java + spring
                                                                        boot , JS/TS + Node.js) I like to learn
                                                                        a new thing that way my <a
                                                                        className="text-uppercase"
                                                                        href="https://github.com/Thitikorn-Nupan"
                                                                        target="_blank"
                                                                        style={{
                                                                            "color": "white",
                                                                            "textDecoration": "none"
                                                                        }}>Github</a> has
                                                                        a lots of public projects
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>


                                            <li style={{"listStyleType": "none"}}>
                                                <div className="single-timeline-box fix">
                                                    <div className="row">
                                                        <div className="col-md-offset-1 col-md-5 ">
                                                            <div className="experience-time">
                                                                <h2>2019 - 2022</h2>
                                                                <h3 style={{"color": "white"}}>computer business</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-5">
                                                            <div className="">
                                                                <div className="text-right">
                                                                    <h4 className="">
                                                                        Pateeppaleepol Technological College
                                                                    </h4>
                                                                    <h5>Bang Khun Thian, Thailand</h5>
                                                                    <p className="">
                                                                        already interest about programming languages and
                                                                        start practicing basic coding As, Java core ,
                                                                        Php core , JS/TS core and apply to build basic
                                                                        web application
                                                                        (it was not working with frameworks of them)
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </section>

                    </div>
                </section>


                <footer className="footer text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-5 mb-lg-0">

                            </div>
                            <div className="col-lg-4 mb-5 mb-lg-0" id="contact">
                                <h4 className="text-uppercase mb-4">Around the Web</h4>
                                <a className="btn btn-outline-light btn-social mx-1"
                                   href="https://www.facebook.com/Mr.Thitikorn.Nupan/"
                                   target="_blank"><i className="fab fa-fw fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1"
                                   href="https://www.linkedin.com/in/thitikorn-nupan/"
                                   target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1"
                                   href="https://github.com/Thitikorn-Nupan" target="_blank"><i
                                    className="fab fa-fw fa-github"></i></a>
                            </div>
                            <div className="col-lg-4">

                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright py-4 text-center text-white">
                    <div className="container"><small>Thitikorn's Porfolio &copy; </small></div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1"
                     aria-labelledby="portfolioModal1"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Spring
                                                & Spring
                                                boot</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                <div className="divider-custom-line"></div>
                                            </div>

                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Spring Core (Configures , CDI & SID ,AOP , MVC , Beans
                                                    Annotations)" , <br/>
                                                    "Spring Security" , <br/>
                                                    "Microservice" , <br/>
                                                    "Spring Cloud (Eureka , Gitbackend servers)" , <br/>
                                                    "Spring Data (JPA , JDBC , MongoDB)" , <br/>
                                                    "Spring MVC (JSP Servlet)" , <br/>
                                                    "Testing (JUnit , Mockito)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build rest api for crud many database" , <br/>
                                                    "Build rest api for crud many relations table of database (One to
                                                    Many , ...)" , <br/>
                                                    "Build rest api for crud and work with spring security & jwt"
                                                    , <br/>
                                                    "Build rest api for crud and work with spring clouds (Eureka server
                                                    , Gitbackend)" , <br/>
                                                    "Build wep applications work with rest api" , <br/>
                                                    "Build rest api for crud and work with mobile application (Android
                                                    app)"<br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=spring-boot"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1"
                     aria-labelledby="portfolioModal2"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Node.js</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Node.js Core" , <br/>
                                                    "Modules (Common JS , ES)" , <br/>
                                                    "Global Install & Local Install" , <br/>
                                                    "NPM" , <br/>
                                                    "Using Logging (Winston)" , <br/>
                                                    "Asynchronous (Promise , Async & Await)" , <br/>
                                                    "Working with files (__dirname,__filename)" , <br/>
                                                    "Working with APIs (http & express module )" , <br/>
                                                    "Working with Database (Sequelize , Mongoose)" , <br/>
                                                    "Environment variables" , <br/>
                                                    "Template Engines (ejs)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build rest api for crud many database" , <br/>
                                                    "Build rest api for crud many relations table of database (One to
                                                    Many , ...)" , <br/>
                                                    "Build rest api for crud and work with security & jwt" , <br/>
                                                    "Build wep applications work with rest api" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=spring-boot"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>

                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1"
                     aria-labelledby="portfolioModal3"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Android
                                                studio</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{
                                                    "display": "block"
                                                }}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Fundamentals (kotlin/Java OOP , Tools/IDEs , Gradle)" , <br/>
                                                    "App Components (Activity/Activity Lifecycle , Intent , Services ,
                                                    ... )" , <br/>
                                                    "Layout (Linear , Relative , Constraint , Frame , ... )" , <br/>
                                                    "Elements (TextView , Fragments , Dialogs , Toast , Drawer , ... )"
                                                    , <br/>
                                                    "Architecture and Design (MVC)" , <br/>
                                                    "Network (Volley)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build many mobile apps for learning about components" , <br/>
                                                    "Build many mobile apps work with rest api" , <br/>
                                                    "Build mobile apps work with rest api for crud mysql" , <br/>
                                                    "Build mobile app work for crud sqlite" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=spring-boot"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1"
                     aria-labelledby="portfolioModal4"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">MySql</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Basic SQL Syntax (Keywords , Data types , Operators)" , <br/>
                                                    "Data Manipulation Language (Insert , Select , ...)" , <br/>
                                                    "Aggregate Queries (COUNT(...) , SUM(...) , ...)" , <br/>
                                                    "Data Constraints (UNIQUE Constraint , PRIMARY KEY Constraint ,
                                                    ...)" , <br/>
                                                    "SQL JOIN Queries" , <br/>
                                                    "Views" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build many sql relations (One to One , One to Many , ...)" , <br/>
                                                    "Build many sql work with many programing languages" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=spring-boot"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1"
                     aria-labelledby="portfolioModal5"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">PostgreSQL</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "RDBMS Concepts (Tables and Relations , Keys , Data Type , ...)"
                                                    , <br/>
                                                    "SQL Concepts" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build many pg relations (One to One , One to Many , ...)" , <br/>
                                                    "Build many pg work with many programing languages" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=spring-boot"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1"
                     aria-labelledby="portfolioModal6"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">TypeScript</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Typescript Types (Primitive & Object & Other Types)" , <br/>
                                                    "Combining Types (Type Union)" , <br/>
                                                    "Functions (Overloading , Typing)" , <br/>
                                                    "Interfaces" , <br/>
                                                    "Classes" , <br/>
                                                    "Generics" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build rest api for crud many database" , <br/>
                                                    "Build rest api for crud many relations table of database (One to
                                                    Many , ...)" , <br/>
                                                    "Build wep applications work with rest api" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=TypeScript"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal7" tabIndex="-1"
                     aria-labelledby="portfolioModal7"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">JavaScript</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Javascript Variables (Naming Rules , Scopes)" , <br/>
                                                    "Data types" , <br/>
                                                    "Data Structures (Map , Set , Array , ...) , <br/>
                                                    "Loops and Iterations" , <br/>
                                                    "Control Flow (Exception Handling , Conditional Statements , ...)
                                                    , <br/>
                                                    "Functions" , <br/>
                                                    "Classes" , <br/>
                                                    "Modules (ES , CommonJS)" , <br/>
                                                    "Asynchronous JavaScript (Promise , Callback)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build rest api for crud many database" , <br/>
                                                    "Build rest api for crud many relations table of database (One to
                                                    Many , ...)" , <br/>
                                                    "Build wep applications work with rest api" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=JavaScript"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal8" tabIndex="-1"
                     aria-labelledby="portfolioModal8"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Java</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Java Fundamentals (Data Structures , OOP (Classes) , Packages ,
                                                    ...)" , <br/>
                                                    "Exception Handling" , <br/>
                                                    "Generics , <br/>
                                                    "Build Tools (Maven , Gradle)" , <br/>
                                                    "ORM (JPA , JDBC) , <br/>
                                                    "Web Frameworks (Spring , Spring Boot)" , <br/>
                                                    "Logging Frameworks (Log4J , LogBack)" , <br/>
                                                    "Testing (JUnit)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build rest api for crud many database" , <br/>
                                                    "Build rest api for crud many relations table of database (One to
                                                    Many , ...)" , <br/>
                                                    "Build rest api for mobile applications , <br/>
                                                    "Build wep applications work with rest api" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=java"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <br/>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal9" tabIndex="-1"
                     aria-labelledby="portfolioModal9"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Kotlin</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>

                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>

                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Fundamentals (Data Structures , OOP (Classes) , Packages , ...)"
                                                    , <br/>
                                                    "Exception Handling" , <br/>
                                                    "Build Tools (Maven , Gradle)" , <br/>
                                                    "ORM (JPA , JDBC) , <br/>
                                                    "Web Frameworks (Spring Boot , Android)" , <br/>
                                                    "Logging Frameworks (Log4J , LogBack)" , <br/>
                                                    "Testing (JUnit)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build rest api for crud many database" , <br/>
                                                    "Build rest api for crud many relations table of database (One to
                                                    Many , ...)" , <br/>
                                                    "Build rest api for mobile applications <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=kotlin"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal10" tabIndex="-1"
                     aria-labelledby="portfolioModal10"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Git</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Fundamentals (Commands , Remote , Clone , ...)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Apply to many frameworks (Spring boot , Node.js , Angular , ...)"
                                                    , <br/>
                                                    "Remote application to Github server" , <br/>
                                                    "Clone application from Github server" , <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal11" tabIndex="-1"
                     aria-labelledby="portfolioModal11"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Php</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Fundamentals (Data Types , OOP , Interfaces & Classes , ...)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Apply to many frameworks (AJAX , JQuery)" , <br/>
                                                    "Build rest api for crud many database" , <br/>
                                                    "Build wep applications work with rest api" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=php"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal12" tabIndex="-1"
                     aria-labelledby="portfolioModal12"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">C</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Fundamentals (Data Types , OOP (Classes) , Interfaces , ...)"
                                                    , <br/>
                                                    "Exception Handling" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build many applications for study (It's part of subjects at
                                                    university)" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=kotlin"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal13" tabIndex="-1"
                     aria-labelledby="portfolioModal13"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Angular</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                    <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Typescript Basics (Structural Typing , Type Inference , ...)"
                                                    , <br/>
                                                    "Angular CLI (Angular Basics , ng commands , ...)" , <br/>
                                                    "Forms (ReactiveFormsModule , Template-Driven Forms , ...)" , <br/>
                                                    "Routing" ,<br/>
                                                    "Unit Testing"<br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build many web applications & rest apis for crud database" , <br/>
                                                    "Build many web applications & apply with many frameworks (Spring
                                                    Boot , Node.js , Docker)" , <br/>
                                                    "Build web applications & apply with private rest api (Spring
                                                    security & JWT)" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=angular"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal14" tabIndex="-1"
                     aria-labelledby="portfolioModal14"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Docker</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Docker Desktop (Window)" , <br/>
                                                    "Structure of a Dockerfile" , <br/>
                                                    "Docker Compose (Files)" , <br/>
                                                    "Containers concept" , <br/>
                                                    "Shell Commands (Docker CLI) , <br/>
                                                    "Volume Mounts" , <br/>
                                                    "Using Third Party Images (Databases , Frameworks)" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Build many web applications & rest apis for crud database on
                                                    containers" , <br/>
                                                    "Build many web applications & apply with many frameworks on
                                                    containers (Spring Boot , Node.js , ...)" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=docker"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="portfolio-modal modal fade" id="portfolioModal15" tabIndex="-1"
                     aria-labelledby="portfolioModal15"
                     aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button className="btn-close" type="button" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-center pb-5">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Linux Ubuntu</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>                          <
                                                div className="divider-custom-icon"><i className="fas fa-star"></i>
                                                </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <p>
                                                <code style={{"display": "block"}}>
                                                <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Skills"</code> :
                                                    [<br/>
                                                    "Command Line Basics" , <br/>
                                                    "File System Hierarchy" , <br/>
                                                    "Shell Scripting" <br/>
                                                    ] , <br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Experiences"</code> :
                                                    [<br/>
                                                    "Apply with Docker" , <br/>
                                                    "Deploy Applications" , <br/>
                                                    "Setup Apache for static website" , <br/>
                                                    "Manage Port Applications" <br/>
                                                    ] ,<br/>
                                                    <code
                                                        style={{
                                                            "backgroundColor": "#f1f1f1",
                                                            "padding": "2px"
                                                        }}>"Sources"</code> : <a
                                                    href="https://github.com/Thitikorn-Nupan?tab=repositories&q=docker"
                                                    target="_blank">"https://github.com/Thitikorn-Nupan"</a>
                                                    <br/>
                                                </code>
                                            </p>
                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                <i className="fas fa-xmark fa-fw"></i>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}