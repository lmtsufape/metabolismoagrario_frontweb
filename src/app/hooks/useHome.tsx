import { useState } from "react";
import Auth from "@/services/auth";
import { redirect } from "next/navigation";

const useHome = () => {
    const auth = new Auth

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [statusResponse, setStatusResponse] = useState('')


    const loginEvento = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            sessionStorage.setItem('mensagem', `{"mensagem":"Para realizar o login você deve informar o e-mail !","tipo":"danger"}`)
            location.reload()
        } else if (!password) {
            sessionStorage.setItem('mensagem', `{"mensagem":"Para realizar o login você deve informar a senha !","tipo":"danger"}`)
            location.reload()
        } else {
            //requisicao
            const dadosLogin = {
                email: email,
                password: password,
            };


            const response: any = await auth.login(dadosLogin);
            setStatusResponse(response.status)
        }

    }

    if (statusResponse == "1") {
        redirect('/home')
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        loginEvento
    };
};

export default useHome;
