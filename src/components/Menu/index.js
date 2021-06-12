import { Link } from "react-router-dom";


import './styles.css';

export function Menu(props) {
  // console.log(props);
  // console.log(props.tarefas)

  return (
    <div className="back">
      <nav className="nav-menu">
        <Link to={{
          pathname: '/tabela',
          state: props,

        }}><h1 className="menu-link">Monstrar Tabela</h1></Link>
        <Link to={{
          pathname: '/relatorio',
          state: props,

        }}><h1 className="menu-link">Monstrar Relatorio</h1></Link>
      </nav>
    </div>
  )
}