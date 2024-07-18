import { useState } from "react";
import { cropsService } from "@/services/crops";
import { redirect } from "next/navigation";

const useHandleDeleteConstant = (dadosTemp: any[], setDados: any) => {
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async (id: string, type: 'constant' | 'cultivar') => {
        let session = sessionStorage.getItem('@token');

        if (session != null) {
            const service = new cropsService(session);

            try {
                if (type === 'constant') {
                    await service.deleteConstant(id);
                } else if (type === 'cultivar') {
                    await service.deleteCultivar(id);
                }
                setDados(dadosTemp.filter(dado => dado.id !== id));
                console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} removido`);
            } catch (error) {
                setError(`Falha ao deletar ${type}`);
                console.error(`Falha ao deletar ${type}:`, error);
            }
        } else {
            sessionStorage.setItem('mensagem', `{"mensagem":"Você não possui permissões para acessar essa pagina !","tipo":"danger"}`);
            redirect('/');
        }
    }

    return { handleDelete, error };
};

export default useHandleDeleteConstant;
