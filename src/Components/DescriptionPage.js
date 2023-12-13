import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';


const DescriptionPage=({liste})=>{

    var {id}= useParams()
    var found = liste.find((el)=> el.id == id)

    const navigate=useNavigate()

    return(
        <div>
            <h1 style={{marginLeft: '60px', marginTop: '22px'}} >{found.titre}</h1>
            <div className="non">
                <img style={{width: '550px', height: '460px'}} src={found.posterURL} alt="Not found"/>
                <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h5 style={{marginLeft: '60px'}} >{found.description}</h5>
            <br/>
            <div style={{textAlign:'center', marginBottom:'20px'}}>
            <Button onClick={()=>navigate('/')} variant="dark">Home</Button>
            </div>

        </div>
    )
}

export default DescriptionPage