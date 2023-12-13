import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesCard=({el})=>{

    const [showMore, setShowMore] = useState(false);

    return(
        <div>
        <Card style={{ width: '18rem' }}>
            <Link to={`/DescriptionMovie/ ${el.id}`}><Card.Img style={{width: '286px', height :'350px'}} variant="top" src={el.posterURL} /></Link>
            <Card.Body>
                <Card.Title style={{fontWeight : 'bold', fontSize:'20px', textDecoration:'unset'}} as={Link} to={`/DescriptionMovie/ ${el.id}`} >{el.titre}</Card.Title>
                <br/>
                {showMore ? el.description : `${el.description.substring(0, 200)}`}
                <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                <br/>
                <Rating name="read-only" value={el.rating} readOnly />
                <br/>
                <a style={{textDecoration:'unset'}} href={el.trailer}> Trailer</a>
            </Card.Body>
        </Card>
        </div>
    )
}

export default MoviesCard