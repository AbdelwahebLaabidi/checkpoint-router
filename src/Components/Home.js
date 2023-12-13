import Carousel from 'react-bootstrap/Carousel';

const Home=({liste})=>{


    return(

        <Carousel data-bs-theme="dark">
            {
                liste.map((el,i,t)=>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 sol"
                        src={el.posterURL}
                        alt="First slide"
                        />
                    </Carousel.Item>)
            }
        </Carousel>
    )
}

export default Home