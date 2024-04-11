import React from 'react'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'

export default function Post(props) {

const {_id, nome,cognome,email,data_di_nascita,avatar} = props.author;
const imagePlaceholder = 'https://placehold.co/600x400';

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={avatar ? avatar : imagePlaceholder} />
                <Card.Body >
                    <Card.Title>Autore: {nome} {cognome}</Card.Title>
                    <Card.Text className='text-dark'>{email}</Card.Text>
                    <Card.Text className='text-dark'>{data_di_nascita}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
