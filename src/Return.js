import List from './child/List'

function Return(props) {
    return (
     <section id="notice">
        <h2>{props.title}</h2>
        <ul>
          <List num={5} dbnm={props.dbnm}></List>
        </ul>
     </section>     
    )
}



export default Return
