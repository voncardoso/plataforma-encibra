import LogoSidbar from "../assets/Logo-sidbar.svg";
import avatar from "../assets/Ellipse.png";
import { Notebook, Truck, Gear, ChartLine, ChartBar } from "phosphor-react";
import { Menu } from "./Sidbar_style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Sidbar() {
  const [style, setStyle] = useState(false);
  const [styleDashboard, setStyleDashboard] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/rodovia") {
      setStyle(true);
    } else if (pathname === "/dashboard") {
      setStyleDashboard(true);
    }
  }, [pathname]);

  const navigate = useNavigate();
  return (
    <Menu>
      <section className="infoMenu">
        <img src={LogoSidbar} alt="" />
        <ul>
          {styleDashboard ? (
            <li className="liAtivo">
              <ChartBar size={24} />
              <p>Dashboard</p>
            </li>
          ) : (
            <li
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <ChartBar size={24} />
              <p>Dashboard</p>
            </li>
          )}
          <li>
            <Notebook size={24} />
            <p>Contratos</p>
          </li>
          {style ? (
            <li className="liAtivo">
              <Truck size={24} />
              <p>Rodovias</p>
            </li>
          ) : (
            <li
              onClick={() => {
                navigate("/rodovia");
              }}
            >
              <Truck size={24} />
              <p>Rodovias</p>
            </li>
          )}
        </ul>
        <a>
          <Gear size={24} />
          <p>Configuração</p>
        </a>
        <div className="avatar">
          <img src={avatar} alt="" />
          <div>
            <strong>Rafael Santos</strong>
            <p>Engenheiro</p>
          </div>
        </div>
      </section>
    </Menu>
  );
}
