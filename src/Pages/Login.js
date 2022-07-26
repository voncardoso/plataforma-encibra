import BackgoundImg from '../assets/Background-login.png';
import { useNavigate } from "react-router-dom";
import LogoImg from '../assets/Logo.svg';

import {Container, Image, InfoLogin} from './Login_style';

export function Login (){
    const navigate = useNavigate();

    function handleClick(event){
        event.preventDefault();
        navigate('/dashboard')
       console.log('teste')
    }

    return(
        <Container>
            <InfoLogin>
                <div className="img">
                    <img src={LogoImg} alt="logo" />
                </div>
                <div className="login">
                    <h1>Login</h1>

                    <form onSubmit={handleClick}>

                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="exemple@exemple.com"
                        />

                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                        />
                            
                        <button type="submit">Login</button>
                    </form>
                </div>
            </InfoLogin>

            <Image className="img">
                
            </Image>
        </Container>
    )
}