import React from "react";


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/nominated">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/nominate">
          Nominate
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/nominate"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Students
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/nominated">
            Current Month
          </a>
          <a className="dropdown-item" href="/history">
            History
          </a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <a
        className="btn btn-outline-warning my-2 my-sm-0"
        href="/logout"
      >
        Logout
      </a>
    </form>
  </div>
</nav>
);

export default Nav;

// <div className="container-fluid">
//   <div className="navbar-nav">
//     <a href="/" className="navbar-brand">
//       Home
//         </a>
//     <a href="/nominate" className="navbar-brand">
//       Nominate a Student
//         </a>
//     <a href="/nominated" className="navbar-brand text-white">
//       Nominations for this Month
//         </a>
//   </div>
// </div>