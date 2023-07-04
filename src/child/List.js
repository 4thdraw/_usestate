function List(props) {
   const array = [];
   for(let i = 0; i < props.num; i++) {
    array.push(<li>{i}</li>);
   }
    return (
      <>  
      {  array  }
      </>       
    )
}
export default List
