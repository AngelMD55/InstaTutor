import React from "react";
import "./style.scss";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src={ require('../../logoNoTitle.png')} width="70" height="60" className="d-inline-block align-top" alt=""></img>
    </a>
  <a className="navbar-brand titleName" href="/">InstaTutor</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
    </div>
  </div>
  <div className="d-flex flex-row-reverse bd-highlight">

    <a className="p-2 bd-highlight" href="/signup" tabIndex="-1">Login/Sign-up</a>

    {/* Possible change on how to login to app */}
      {/* <form>
        <div className="row">
          <div className="col">
            <input type="email" className="form-control" placeholder="Email"></input>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name"></input>
          </div>
        </div>
      </form> */}
</div>
</nav>
  );
}

export default Nav;