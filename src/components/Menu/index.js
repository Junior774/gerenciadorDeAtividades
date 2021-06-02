import { Link } from "react-router-dom";
import { Tabela } from '../Tabela';



export function Menu(props) {
  console.log(props);
  console.log(props.tarefas)
  return (
    <div className="back">
      <nav>
        <Link to={{
          pathname: '/tabela',
          state: props,
        }}> Monstrar Tabela </Link>
      </nav>
    </div>
  )
}