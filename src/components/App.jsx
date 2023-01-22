import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Container, Header, Link } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Container>
  )
};
