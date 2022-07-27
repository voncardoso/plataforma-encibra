import { Link } from "react-router-dom";
import { Sidbar } from "../../components/Sidbar";
import Chart from "react-apexcharts";
import { Container, Grafico, Nucleos } from "./RododoviaNucleos_style";
export function RododoviaNucleos() {
  const State = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      },
      title: {
        text: "Aplicação financeira acumulada em manutenção e conservação",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "normal",
          fontFamily: "Roboto",
          color: "#A8A8A8",
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [
          100000, 200000, 300000, 400000, 500000, 600000, 500000, 800000,
          900000,
        ],
      },
    ],
  };
  return (
    <section className="grid-global">
      <Sidbar />
      <Container>
        <header>
          <h1>Pará | Rodovias</h1>
          <Link to="/">Cadastrar Rodovia</Link>
        </header>
        <Grafico>
          <Chart height={350} options={State.options} series={State.series} />
        </Grafico>
        <Nucleos>
          <ul>
            <li className="NR-01">
              <h1>Núcleo Regional 01</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-02">
              <h1>Núcleo Regional 02</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-03">
              <h1>Núcleo Regional 03</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-04">
              <h1>Núcleo Regional 04</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-05">
              <h1>Núcleo Regional 05</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
          </ul>
          <ul>
            <li className="NR-06">
              <h1>Núcleo Regional 06</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-07">
              <h1>Núcleo Regional 07</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-08">
              <h1>Núcleo Regional 08</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-09">
              <h1>Núcleo Regional 09</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
            <li className="NR-10">
              <h1>Núcleo Regional 10</h1>
              <h2>25</h2>
              <p>total</p>
              <div>
                <p>15 Estaduais</p>
                <p>5 Federais</p>
              </div>
            </li>
          </ul>
        </Nucleos>
      </Container>
    </section>
  );
}
