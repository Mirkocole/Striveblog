import React, { useEffect, useState } from 'react'
import '../Homepage/Homepage.css'
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap/';
import Post from '../../component/Post/Post';

export default function Homepage() {

    // const {authors} = useContext(PostContext);
    const apiUrl = process.env.REACT_APP_URL_AUTHORS;
    const [search, setSearch] = useState('');
    const [refresh,setRefresh] = useState(false);

    const [valueForm,setValueForm] = useState({
        nome : '',
        cognome : '',
        email : '',
        data_di_nascita:'',
        avatar : ''
    });

    const handleForm = (e)=> setValueForm((prev) => prev = { ...prev, [e.target.id]: e.target.value });

    const [authors, setAuthors] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getAuthors() {
        try {
            let res = await fetch(apiUrl);
            if (res.ok) {

                let json = await res.json();
                setAuthors(json);
                // console.log(json);
            }
        } catch (error) {

        }
    }
    
    
    async function createAuthors() {
        try {
            let res = await fetch(apiUrl,{
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify(valueForm)
            });
            console.log(JSON.stringify(valueForm));
            setRefresh(!refresh);
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteAuthors(id) {
        try {
            let res = await fetch(apiUrl+'/'+id,{
                method:'DELETE',
                headers:{'Content-Type' : 'application,json'}
            });
            if (res.ok) {
                setRefresh(!refresh);
                // console.log(json);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getAuthors();

    }, [refresh])

    return (
        <>
            <Container className='border bg-light text-dark my-5 p-5 rounded'>
                <h1>Homepage</h1>
                <Row className='align-items-center'>

                    <Col>
                        <Form className='my-3'>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search Author" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={3}>
                        <Button variant={'light'} className='btn btn-outline-dark w-auto' onClick={handleShow}>Aggiungi Autore</Button>
                    </Col>
                </Row>


                {/* Modale Aggiungi Autore */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-dark'>Aggiungi Autore</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-dark'>
                        <Form>
                            <Form.Group>
                                <Form.Label className='text-dark'>Nome</Form.Label>
                                <Form.Control type="text" placeholder="inserisci il nome" id='nome' onChange={(e) => handleForm(e)}/>
                                <Form.Label className='text-dark'>Cognome</Form.Label>
                                <Form.Control type="text" placeholder="inserisci il cognome" id='cognome' onChange={(e) => handleForm(e)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='text-dark'>Email</Form.Label>
                                <Form.Control type="email" placeholder="inserisci l'email" id='email' onChange={(e) => handleForm(e)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='text-dark'>Data di Nascita</Form.Label>
                                <Form.Control type="date"  id='data_di_nascita' onChange={(e) => handleForm(e)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='text-dark'>Avatar</Form.Label>
                                <Form.Control type="file"  id='avatar' onChange={(e) => handleForm(e)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Annulla
                        </Button>
                        <Button variant="primary" onClick={createAuthors}>
                            Aggiungi
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Row>
                    {
                        authors && authors.map((el, index) => {
                            return <Col key={index} className='position-relative'>
                                <Button className='btn btn-danger position-absolute top-0  z-3' onClick={()=>{deleteAuthors(el._id)}}>X</Button>
                                <Post author={el} />
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
