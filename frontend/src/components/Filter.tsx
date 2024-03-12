import Form from 'react-bootstrap/Form';

export default function AppFilter() {
    return (
        <div>
            <Form className="container w-50">
                <Form.Control type="text" placeholder="Pesquise aqui..." />
            </Form>
        </div>
    )
}