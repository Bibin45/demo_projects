import React from "react"

export const GlobalFilter = ({filter,setFilter}) => {
    return(
        <div className='col-12 d-flex text-secondary' style={{color:'black',float:'right'}}>
           
            <input className="form-control" placeholder="Search Your Course Here !" style={{margin: "0px 10px 10px 0px"}}value={filter || ""} onChange={(e)=>setFilter(e.target.value)}/>
        </div>
    )
}