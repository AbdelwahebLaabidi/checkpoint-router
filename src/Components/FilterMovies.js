import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';


const FilterMovies=({title, rate, setTitle,setRate})=>{

    const deleteFilm=()=>{
        setTitle('')
        setRate(0)
    }

    return(
        <div className='pop'>

            <Form style={{marginTop : '10px'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="email" placeholder="Search" />
                </Form.Group>
            </Form>
            <Rating value={rate} onChange={(e)=>setRate(e.target.value)} />
            <Button onClick={deleteFilm} variant="secondary">Reset</Button>

        </div>
    )
}

export default FilterMovies