import React, { useState, useEffect } from "react";
import { links } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target);
    console.log(target);
    if(target === "#home"){
      setIsTop(true)
      console.log("arget");
    }
    const offsetTop = location.offsetTop - 40;

   
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsTop(scrollTop === 0);

  }

  return (
    <nav className={isTop ? 'navbar' : 'navbar-shrink'}>
      <div className={isTop ? 'nav-center' : 'nav-center-shrink'}>
        <div className="nav-left">
          <img src={logo} alt="webpage" onClick={() => {
            window.scrollTo({top: 0, behavior:"smooth"})
          }}/>
          <span style={{ color: "white" }}>Gabriel Jansen</span>
        </div>
        <div>
          {links.map((link) => {
            return (
              //     <Link spy={true} to={link.url} /*{onClick={handleClick}}*/>
              //     {link.text}
              // </Link>
              <a href={link.url} key={link.id} onClick={handleClick}>
                {link.text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
