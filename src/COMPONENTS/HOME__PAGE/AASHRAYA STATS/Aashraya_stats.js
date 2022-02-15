import React from 'react'
import books from '../../../ASSETS/statistics/books.png'
import library from '../../../ASSETS/statistics/library.png'
import volunteers from '../../../ASSETS/statistics/volunteers.png'
function Aashraya_stats() {
  return (
    <div style={{textAlign:"center", margin:"70px 0px"}}>
      <h1>Aashraya Stats</h1>
    <div style={{height:"500px"  , display:"flex" , justifyContent:"center" }}>
      <div style={{margin:"100px" , display:"flex" , flexDirection:"column", textAlign:"center",width:"130px"}}>
          <img src={volunteers} alt='icon'/>
          <div style={{margin:"30px 10px"}}>
            <h3><strong>Total Volunteers</strong></h3>
            <h3>3000+ </h3>
          </div>
      </div>

      <div style={{margin:"100px" , display:"flex" , flexDirection:"column", textAlign:"center",width:"130px"}}>
        <img src={library} alt='icon'/>
          <div style={{margin:"30px 10px"}}>
            <h3><strong>Total Libraries</strong></h3>
            <h3>10+</h3>
          </div>
      </div>

      <div style={{margin:"100px" , display:"flex" , flexDirection:"column", textAlign:"center",width:"130px"}}>
          <img src={books} alt='icon'/>
          <div style={{margin:"30px 10px"}}>
            <h3><strong>Total Books</strong></h3>
            <h3>100k+ </h3>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Aashraya_stats