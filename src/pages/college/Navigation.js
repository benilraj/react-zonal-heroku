import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/CollegeIndex.css";
import "../../css/Admin.css";

import { Link } from "react-router-dom";

function Navigation() {
  /* const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data));
      });
  };  */

  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/college/home">
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
         <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="/college/editprofile">
              <span data-feather="file-text"></span>
              Edit Profile
            </Link>
          </li>
        </ul>
     {/*   <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather="file-text"></span>
              InterZonal Games
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navigation;
