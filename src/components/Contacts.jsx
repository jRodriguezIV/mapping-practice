import data from '../data/contact.json'

function Contacts() {


    return (
        <div className='contact-list'>
        {data.results.map((el) => {
        
            return <div className='contacts'>
             <img  src = {el.picture.large} alt="" className='img'></img>
             <div className='info'>
             <h2>{el.name.first.charAt(0).toUpperCase() + el.name.first.slice(1)} {el.name.last.charAt(0).toUpperCase() + el.name.last.slice(1)}</h2>
             <h3> Home: {el.phone}</h3>
             <h3> Mobile: {el.cell}</h3>
             </div>
             </div>
        })}
        </div>
    )
}

export default Contacts