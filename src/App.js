import React,{useState} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
    <div className='logo'> 
    <img src="Inserir_um_título-removebg-preview (1).png"/>
    </div>
    
    <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={() => { } }>

          <div className="user">
            <label htmlFor="nome">Usuário</label>
            <input type="text" id="nome" placeholder="Digite o seu nome ou Email" required></input>
          </div>

          <div className="senha">
            <label htmlFor="senha" onClick={() => togglePassword()}>Senha</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="senha"
              placeholder="Digite sua senha"
              required
            ></input>
            <i className={`fa ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
              id="eyeIcon" onClick={() => togglePassword()}
            ></i>
            <p>Esqueceu a senha?</p>
          </div>

          <div className="Entrada">
            <button>Entrar</button>
            <p>Não tem uma conta? <a>Cadastre-se</a></p>
          </div>

          <div id="Icons">
            <p>Logar com</p>

            <div className="icones">
              <a><GoogleOAuthProvider clientId="45722718406-1lidcqdj151qs6n7nnfu2l3epcvg0v3g.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded);
                  } }
                  onError={() => {
                    console.log('Login Failed');
                  } }
                  shape={'square'}
                  theme='outline' />



              </GoogleOAuthProvider>
              </a>

            </div>
          </div>

        </form>
      </div></>
      
  );
}

export default App;
