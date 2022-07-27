import { Route, Routes } from "react-router-dom";
import { Sidbar } from "../../components/Sidbar";
import { RododoviaNucleos } from "./RododoviaNucleos";
import { Container } from "./Rodovia_style";

export function Rodovia() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<RododoviaNucleos />} />
      </Routes>
    </section>
  );
}
