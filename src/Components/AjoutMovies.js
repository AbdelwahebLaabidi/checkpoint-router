import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';



const AjoutMovies=({setListe, liste})=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [titre,setTitre]=useState('');
    const [description, setDescription]=useState('');
    const [posterURL, setPosterURL]=useState('');
    const [trailer, setTrailer]=useState('');
    const [rating, setRating]=useState(0);

    var ajoutfilm =()=> {setListe([...liste, {titre,description,posterURL,rating,trailer, id: Math.random()}])}

    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Movie to the App</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={(e)=> setTitre(e.target.value)} type="text" placeholder="Enter the Title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e)=> setDescription(e.target.value)}  type="text" placeholder="Enter the Description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie Poster</Form.Label>
                            <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Enter Poster link" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie Trailer</Form.Label>
                            <Form.Control onChange={(e)=> setTrailer(e.target.value)} type="text" placeholder="Enter Trailer link" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rating</Form.Label>
                            <br/>
                            <Rating onChange={(e)=> setRating(e.target.value)}/>
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> {ajoutfilm(); handleClose()}}>
                    Add
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AjoutMovies