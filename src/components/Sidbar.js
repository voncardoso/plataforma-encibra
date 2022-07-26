import LogoSidbar from '../assets/Logo-sidbar.svg'
import avatar from '../assets/Ellipse.png'
import { Notebook, Truck, Gear } from "phosphor-react";
import { Menu } from "./Sidbar_style";

export function Sidbar(){
    return(
        <Menu>
            <section className='infoMenu'>
                <img src={LogoSidbar} alt="" />
                <ul>
                    <li>

                        <Notebook size={24}/>
                        <p>Contratos</p>
                    </li>
                    <li>
                        <Truck size={24}/>
                       <p>Rodovias</p>
                    </li>
                </ul>
                <a>
                    <Gear size={24}/>
                    <p>Configuração</p>
                </a>
                <div className='avatar'>
                   <img src={avatar} alt="" />
                   <div>
                        <strong>Rafael Santos</strong>
                        <p>Engenheiro</p>
                   </div>
                </div>
            </section>
        </Menu>
    )
}