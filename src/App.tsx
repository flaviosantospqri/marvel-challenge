import RouterApp from "../routes"
import Header from "./components/Header"
import { Container } from "./style"



function App() {

  return (
    <>

      <Header itens={[
        { id: 1, name: "Personagens", route: "./characters" },
        { id: 2, name: "Filmes", route: "./movies" },
        { id: 3, name: "Hqs", route: "./comics" },
        { id: 4, name: "Sair", route: "" },
      ]} />
      <Container>
        <RouterApp />
      </Container>
    </>
  )
}

export default App
