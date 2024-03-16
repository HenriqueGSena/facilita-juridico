import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import AppRegister from './AppRegister';
import api from "../api";
import { useEffect, useState } from 'react';


export default function AppTable() {
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
                <div className='row mb-4'>
                    <div className='col'>
                        <Form className="w-50 mx-auto">
                            <Form.Control
                                type="text"
                                placeholder="Pesquise contato aqui"
                                value={filterValue}
                                onChange={handleFilterChange}
                            />
                        </Form>
                    </div>
                    <div className='col-2'>
                        <AppRegister getAllContatos={getAllContatos} />
                    </div>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <th />
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </thead>
                    <tbody>
                        {filteredData.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
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