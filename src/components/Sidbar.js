import LogoSidbar from '../assets/Logo-sidbar.svg'
import iconeContarto from '../assets/icone-contrato.svg'
import { Notebook, Truck } from "phosphor-react";
import { Menu } from "./Sidbar_style";

export function Sidbar(){
    return(
        <Menu>
            <div className='infoMenu'>
                <img src={LogoSidbar} alt="" />
                <ul>
                    <li>

                        <Notebook size={24}/>
                        <p>Contratos</p>
                    </li>
                    <li>
                        <Truck size={26}/>
                       <p>Rodovias</p>
                    </li>
                </ul>
                <div className='avatar'>
                    avatar
                </div>
            </div>
        </Menu>
    )
}