import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import api from "../api";
import { useEffect, useState } from 'react';


export default function AppHeader() {
    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [filterValue, setFilterValue] = useState<string>('');

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

    useEffect(() => {
        const filteredContacts = data.filter(contact =>
            contact.nome.toLowerCase().includes(filterValue.toLowerCase()) ||
            contact.email.toLowerCase().includes(filterValue.toLowerCase()) ||
            contact.telefone.toLowerCase().includes(filterValue.toLowerCase())
        );
        setFilteredData(filteredContacts);
    }, [data, filterValue]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
    };


    return (
        <div>
            <div className="container text-center">
                <Form className="container w-50 mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Filtro"
                        value={filterValue} 
                        onChange={handleFilterChange}
                    />
                </Form>

                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </thead>
                    <tbody>
                        {filteredData.map(contact => (
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