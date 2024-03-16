import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import api from "../api";

export default function AppRegister({ getAllContatos }: { getAllContatos: () => void }) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Botão "Cadastrar" clicado.');
        try {
            const response = await api.post("/createContact", formData);
            console.log('Contato registrado com sucesso:', response.data);
            getAllContatos();
            handleClose();
        } catch (error) {
            console.error('Erro ao registrar o contato:', error);
        }
    };


    return (
        <div>
            <Button variant="primary" onClick={handleShow} >Novo Contato</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Novo Contato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Nome"
                                    name='nome'
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required />
                            </Form.Group>
                        </div>
                        <div className='mb-4'>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </Form.Group>
                        </div>
                        <div className='mb-4'>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Telefone"
                                    name='telefone'
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    required />
                            </Form.Group>
                        </div>
                        <div style={{textAlign: "end"}}>
                            <Button variant="primary" type="submit" onClick={handleClose}>
                                Cadastrar
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}