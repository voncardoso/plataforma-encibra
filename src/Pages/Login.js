import BackgoundImg from '../../assets/Background-login.png';
import LogoImg from '../../assets/Logo.svg';
import {Container, Image, InfoLogin} from './Login_style';

export function Login (){
    return(
        <Container>
            <InfoLogin>
                <div className="img">
                    <img src={LogoImg} alt="logo" />
                </div>
                <div className="login">
                    <h1>Login</h1>
                    <form action="">

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