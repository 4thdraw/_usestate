function List(props) {
   
    return (
      <>  
      {  
      props.dbnm.map((v, idx)=>{
          return(
            <li><strong>{v.strong}</strong><span>{v.span}</span></li>
          )
      })
       }
      </>       
    )
}
export default List
