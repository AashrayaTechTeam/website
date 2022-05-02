import React from 'react'

function AdminHandle() {
  return (
    <div style={{backgroundColor:"black",width:"100%",height:"auto",position:"absolute",top:"0%"}}>
        <div className='box-admin'>
        <div>
            <img src="https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
        </div>
        <h1 style={{color:"white",textAlign:"center",margin:"20px 0px"}}>Add Items </h1>
        <div className='card-to-add'>
            <div className='card'><h1>Project</h1></div>
            <div className='card'><h1>Project</h1></div>
            <div className='card'><h1>Project</h1></div>
            <div className='card'><h1>Project</h1></div>
            <div className='card'><h1>Project</h1></div>
        </div>
        </div>
    </div>
  )
}

export default AdminHandle