import { Sidbar } from "../../components/Sidbar";
import { Container } from "./RododoviaNucleos_style";
export function RododoviaNucleos() {
  return (
    <section className="grid-global">
      <Sidbar />
      <Container>
        <header>
          <h1>Pará | Rodovias</h1>
          <a href="#">Cadastrar Rdodovia</a>
        </header>
      </Container>
    </section>
  );
}
