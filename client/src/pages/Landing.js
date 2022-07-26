import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      {/* info */}
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus corporis, sed dolore quis dolorem, sapiente iure nam
            exercitationem maiores sint possimus, sunt quos maxime quibusdam.
            Blanditiis sit placeat dolorum tempora!
          </p>
          <Link to="/register" className="btn btn-hero">
            login / register
          </Link>
        </div>

        <img src={main} alt="job-hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
