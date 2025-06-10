import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Banner image="realistic"/>
      <Container>
        <h2> Filmes</h2>
        <section className="cards">
            <Card id="1HIk9mrBB7o"/>
            
            <Card id="R5mB0suWT7o"/>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
       
      </Container>
      <Footer />
    </>
  );
}

export default App;
