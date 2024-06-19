import { Link } from "react-router-dom";
import "../../style/General.css";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/Profil">Profil</Link>
          <Link to="/Projets">Projets</Link>
        </nav>
      </header>
    </>
  );
}