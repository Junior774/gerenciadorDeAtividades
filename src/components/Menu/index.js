import { Link } from "react-router-dom";
import { Tabela } from '../Tabela';



export function Menu(props) {
  // console.log(props);
  // console.log(props.tarefas)
  return (
    <div className="back">
      <nav className="nav-menu">
        <Link to={{
          pathname: '/tabela',
          state: props,
        }}><h2>Monstrar Tabela</h2></Link>
      </nav>
    </div>
  )
}