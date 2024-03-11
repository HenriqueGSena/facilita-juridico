import Table from 'react-bootstrap/Table';
import api from "../api";
import { useEffect, useState } from 'react';


export default function AppHeader() {
    const [data, setData] = useState<any[]>([]);

    const getAllContatos = async () => {
        try {
            const response = await api.get("/listAllContact");
            setData(response.data);
        } catch (error) {
            console.error("Erro ao buscar os contatos:", error);
        }
    };

    useEffect(() => {
        getAllContatos();
    }, []);


    return (
        <div>
            <div className="container text-center">
                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </thead>
                    <tbody>
                        {data.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.nome}</td>
                                <td>{contact.email}</td>
                                <td>{contact.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}