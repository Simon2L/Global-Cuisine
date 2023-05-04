import './TheTeam.css'
import prepFood from '../assets/logo-no-background.png'
import classified from '../assets/classified.png'

export default function About() {
    const theTeam = [
        {name: "Håkan Lagerström",
         position: "Product owner / Scrum master"
        },
        {name: "Christopher Raitis",
         position: "Product owner / Scrum master"
        },
        {name: "Alexander Bäcklin Salas",
         position: "Developer / Team Leader"
        },
        {name: "Ionut Luca",
         position: "Developer"
        },
        {name: "Erik Siljeström",
         position: "Developer"
        },
        {name: "Haaruun Mohamed",
         position: "Developer"
        },
        {name: "Jonas Saghi",
         position: "Developer"
        },
        {name: "Simon Lundmark",
         position: "Developer"
        }
    ]
 return (
    <div className='team-container'>
        <div className='image-container'>
            <img src={prepFood} alt="prep food" className='prepfood'></img>
        </div>
        <div className='the-team'>
            {theTeam.map((member,index) => { 
                return (                   
                <div key={index} className='team-member'>
                <img src={classified} alt="coming soon" className='member-img'></img>
                <hr></hr>
                <div className='member-info'>
                     <h4 className='member-name'>{member.name}</h4>
                     <h6>{member.position}</h6>
                </div>
                </div>
                
            )})}        
               
            
        </div>       
        
    </div>
 )
}