'use client';

import "../../../styles/crops/pageCrops.css"
import "../../../styles/form/form.css"
import '../../../styles/home/login.css'


import Layout from "@/components/layout/layout";
import InputDefault from "@/components/forms/inputDefault";
import Button from "@/components/forms/button";
import NavButton from "@/components/layout/navigationButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cropsService } from "@/services/crops";

const CriarCultivar = ({ params }: { params: { id: string } }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let session = sessionStorage.getItem('@token');

        if (session) {
            const service = new cropsService(session);
            const response = await service.createCultivar(params.id, { name });
            if (response && response.status === 1) {
                setName('');
                setTimeout(() => {
                    setMessage('');
                    router.push(`/cultivars/${params.id}`);
                }, 1000);
            }
        } else {
            sessionStorage.setItem('mensagem', `{"mensagem":"Você não possui permissões para acessar essa pagina !","tipo":"danger"}`);
            router.push('/');
        }
    };

    return (
        <Layout>
            <form className="form-container" onSubmit={handleSubmit}>
                {message && <div className="success-message">{message}</div>}
                <h2 className="form-title">Cadastrar cultivar</h2>
                <InputDefault
                    classe="form-input-box"
                    label="Nome Cultivar"
                    placeholder="Nome Cultivar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
                <Button texto="Cadastrar" classe="form-button" type="submit" />
                <NavButton Url={`/cultivars/${params.id}`} page="form" text="Voltar" type="voltar" />
            </form>
        </Layout>
    );
};

export default CriarCultivar;