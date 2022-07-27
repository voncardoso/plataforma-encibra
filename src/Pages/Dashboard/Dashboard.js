import { Sidbar } from "../../components/Sidbar";
import { Table } from "../../components/Table";
import { Container } from "./Dashboard_style";

export function Dashboard() {
  return (
    <Container className="grid-global">
      <Sidbar />
      <Table
        d1="Rodivia"
        d2="Tipo"
        d3="Extensão"
        d4="Latitude"
        d5="Longitude"
        d6="uf"
        t1="PA-202"
        t2="18"
        t3="Estadual"
        t4="5161"
        t5="7458"
        t6="PA"
      />
      <div></div>
    </Container>
  );
}
