import React from 'react'
export default function Columnport (){
    return [
        {
          Header : "SI No",
          accessor: "id",
          id:'id',      
          maxWidth:150,   
          width:180,       
          Cell : cell =>{return <div >{cell.row.index+1}</div>}
        },
        {
          Header : "Course Name",
          accessor: "name", 
          id: "name",
          maxWidth:150,
          width:200,  
          Cell :cell => {return <div> {cell.row.original.course_name}   </div>} ,
        },
        {
          Header : "Course Duration",
          accessor: "duration",
          id: "duration",
          maxWidth:150,
          width:200, 
          Cell : cell => {return <div> {cell.row.original.duration}   </div>}  ,
        },
        {
          Header : "Course Fees",
          accessor: "fees", 
          id: "fees",
          maxWidth:150,
          width:200,
          Cell : cell => {return <div> {cell.row.original.fees}   </div>}  ,
        },

    
  ]

}
