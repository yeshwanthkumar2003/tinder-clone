import React ,{useState , useEffect} from 'react'
import './Tindercards.css'
import Tindercard from "react-tinder-card"
import axios from './axios';


function Tindercards() {

    const[people,setpeople] = useState([])
       
    //  {
    //   name:"Kamal Haasan",
    //   url:"https://igimages.gumlet.io/tamil/home/kamal30102020m1.jpg?w=376&dpr=2.6"
    // },
    // {
    //   name:"Dhanush",
    //   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WUlLdivfJoRRSU4k3G-NZW1xdJapRdyzPqzEIl3vU05Vb_zr"
    // },
    // {
    //   name:"Ajith",
    //   url:"https://www.pinkvilla.com/imageresize/ajith_main_6.jpg?width=752&t=pvorg"
    // },
    // {
    //   name:"Suriya",
    //   url:"https://imgnew.outlookindia.com/public/uploads/articles/2021/10/28/Suriya_2_adobespark.jpg"
    // },
    // {
    //   name:"Sivakarthikeyan",
    //   url:"https://wallpapercave.com/wp/wp4062917.jpg"
    // },
    // {
    //   name:"vikram",
    //   url:"https://static.toiimg.com/photo/msid-77062209/77062209.jpg"
    // }
    // ]);

    useEffect(() => {
      async function fetchData(){
        const req = await axios.get("/tinder/cards");
        setpeople(req.data);

      }
      fetchData();
  }, []);
  console.log(people);


  const swiped = (direction,namcardeToDelete) =>{
    console.log("removing: " );
  
  };
  const outofFrame = (name) =>{
    console.log(name + "left the screen!");
  }


  return (
    <div className='tindercards'>
      <div className="tindercards_container">

      {people.map((person) =>(                                        //render with people name
      <Tindercard
      className='swipe'
      key={person.name}
      preventSwipe = {["up","down"]}
      onswipe = {(dir) => swiped(dir,person.name)}
      onCardLeftScreen={() => outofFrame(person.name)}     
      >

        <div
        style = {{backgroundImage:`url(${person.imgUrl})`}}
        className = "card"
        >
          <h3>{person.name}</h3>

        </div>
      </Tindercard>
      
      
      
      
      ))}



      </div>
      
    </div>
  )
}

export default Tindercards
