"use client";

import Layout from "@/components/layout/layout";
import Button from "@/components/forms/button";
import InputDefault from "@/components/forms/inputDefault";
import '../styles/form/form.css'
import '../styles/home/login.css'
import useHome from "../app/hooks/useHome"

//pagina de login 


const Home = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginEvento
  } = useHome();
  {
    return (
      <Layout>

        <form className="formBody-login">

          <div className="form-input-box">
            <h2 className="tittle-login">Entrar</h2>
          </div>

          <InputDefault
            type={'email'}
            placeholder={'Informe seu E-mail'}
            classe={'form-input-box'}
            label={'E-mail'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail((e.target as HTMLInputElement).value)}
            value={email}
          />

          <InputDefault
            type={'password'}
            placeholder={'Informe sua senha'}
            classe={'form-input-box'}
            label={'Senha'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword((e.target as HTMLInputElement).value)}
            value={password}
          />

          <div className="form-input-box">
            <span></span>
          </div>

          <div className="form-input-box">
            <Button texto={'Entrar'} classe={'button-home'} onclick={loginEvento} />
          </div>

        </form>
      </Layout>
    );
  }

}

export default Home;