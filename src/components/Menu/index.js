import { Link } from "react-router-dom";


import './index.css';

export function Menu(props) {
  // console.log(props);
  // console.log(props.tarefas)
  return (
    <div className="back">
      <nav className="nav-menu">
        <Link to={{
          pathname: '/tabela',
          state: props,
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
        }}><h1 className="menu-link">Monstrar Tabela</h1></Link>
        <Link to={{
          pathname: '/relatorio',
          state: props,
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
        }}><h1 className="menu-link">Monstrar Relatorio</h1></Link>
      </nav>
    </div>
  )
}