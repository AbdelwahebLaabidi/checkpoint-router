import { Route, Routes } from 'react-router-dom';
import './App.css';

import MoviesList from './Components/MoviesList';
import NavMovies from './Components/NavMovies';
import { useState } from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import DescriptionPage from './Components/DescriptionPage';

function App() {

  const [liste, setListe]= useState([
    {titre : "Insaisissables", description : "Les Quatre Cavaliers », un groupe de brillants magiciens et illusionnistes, viennent de donner deux spectacles de magie époustouflants : le premier en braquant une banque sur un autre continent", posterURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOz488Ms_yU3-OyZRR4GG8awxwPkPy0zgvWVzba6GyXQ-Vied", rating : 4, trailer : "https://www.youtube.com/embed/LCrRcctYEf4?si=yy0HM8-AvpD4ftup", id : Math.random()},
    {titre : "Maman, j'ai raté l'avion !", description : "La famille McCallister a décidé de passer les fêtes de Noël à Paris. Seulement Kate et Peter McCallister s'aperçoivent dans l'avion qu'il leur manque le plus jeune de leurs enfants, Kevin, âgé de neuf ans.", posterURL :"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5kAcQgbXrp1r8do3eMGMwxr7xKI2ACOELTiCypnBfZasM07TT", rating : 5,trailer: "https://www.youtube.com/embed/GPtHAQARLdw?si=VmyGERxsXTICzfBR" , id : Math.random()},
    {titre : "John Wick : Chapitre 4", description : "John Wick affronte ses adversaires les plus mortels dans le quatrième volet de la série. Le prix de sa tête ne cessant d'augmenter, Wick mène son combat à l'échelle mondiale en recherchant les acteurs les plus puissants de la pègre", posterURL :"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNKuvVFzUBa90mu5o5oX9yRQOTQSMGyvW9AQy3YCv34r7pFhic", rating : 3, trailer: "https://www.youtube.com/embed/qEVUtrk8_B4?si=GhqpmeV2F3Y8V0K3", id : Math.random()},
    {titre : "Le Secret de la cité perdue", description : "L'auteure recluse Loretta Sage écrit sur des lieux exotiques dans ses romans d'aventures, qui présentent un beau modèle de couverture nommé Alan. Lors d'une tournée de promotion de son nouveau livre avec Alan", posterURL :"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKJV1ZcY6ZQelTfhB7BGZ_V6wdDkSKFiAl60tfkmMKNS0giU1C", rating : 2, trailer: "https://www.youtube.com/embed/UxTDeCs0wyQ?si=XfALBBcw-bDB5ORE", id : Math.random()}
  ])

  const [title, setTitle]=useState('')
  const [rate, setRate]=useState(0)

  return (
    <div>
        <NavMovies/>

        <Routes>
          <Route path='/' element={<Home liste={liste} /> } />
          <Route path='/MoviesList' element={<MoviesList liste={liste} title={title} rate={rate} setListe= {setListe} setTitle={setTitle} setRate={setRate} />}/>
          <Route path='/Login' element ={<Login/>}/>
          <Route path='/DescriptionMovie/:id' element={<DescriptionPage liste={liste}/>} />
        </Routes>
        
    </div>
  );
}

export default App;
