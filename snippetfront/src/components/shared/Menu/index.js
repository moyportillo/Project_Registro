// A todo componente de react se agrega un objeto props
// login
import './menu.css';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {useSession} from '../../../hooks/Session';
const Menu = ()=>{
  let [ {sec}, ] = useSession();
  let {path, ...match} = useRouteMatch();
  console.log(path, match);
  if (!sec.isLogged){
    return (
      <ul className="Menu">
        <li><NavLink activeClassName="active" to='/login'>Login</NavLink></li>
        <li><NavLink activeClassName="active" to='/signin'>Signin</NavLink></li>
      </ul>
    );
  }else {
    return (
      <ul className="Menu">
        <li><NavLink activeClassName="active" to="/addregistro">Nuevo Registro</NavLink></li>
        <li><a >Listado</a></li>
      </ul>
    );
  }
  
}

export default Menu;
