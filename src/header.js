import logo from "./logo.svg";

function Header() {
  return (
    <div className="navBar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <a class="navbar-brand text-light" href="#">
            <h2 className="Name">REACT</h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  <h4>Хэрэглэгч</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Сан
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Сэдэв
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Мэдээ
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
