import DataField from  '../../shared/DataField/DataField';
import Button from '../../shared/Buttons/Button';
import Page from '../../shared/Page/Page';
import {useSession} from '../../../hooks/Session';
import {useState} from 'react';
import {SEC_LOGIN, SEC_FETCHING} from '../../../store/reducers/sec';
import { publicaxios } from '../../../store/axios';
import { useHistory , useLocation} from 'react-router-dom';
import './AddRegistro.css';

const AddSnippet = ()=>{
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [genero, setGenero] = useState("");
  const [profesion, setProfesion] = useState("");
  const [{ sec }, dispatch] = useSession();
  //const location = useLocation();
  //const routeHistory = useHistory();
  //let { from } = location.state || { from : {pathname:"/"}};
  const onClickHandler = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: SEC_FETCHING });
    try{
      const { data } = await publicaxios.post(
        "/api/registro/new",
        {id:id,name:name,apellido:apellido,email:email,telefono:telefono,direccion:direccion,genero:genero,profesion:profesion}  
    );
    dispatch({ type: SEC_LOGIN, payload: data });
    //routeHistory.replace(from);
    } catch(ex){
      
    }
  };
  return (
    <div className = "nuevoRegistro">
    <Page showHeader={true} title="Inicio de Sesion">
        <div className="registroInput">
        <DataField
          labelText="Identidad"
          type="id"
          placeholder="Identificacion"
          value={id}
          name="id"
          id="id"
          title="identidad"
          error=""
          onChange={(e)=>{setId(e.target.value)}}>
        </DataField>
        <DataField
          labelText="Nombre"
          type="name"
          placeholder="Nombre Persona"
          value={name}
          name=""
          id="name"
          title="nombre"
          error=""
          onChange={(e)=>{setName(e.target.value)}}>
        </DataField>
        <DataField
          labelText="Apellido"
          type="apellido"
          placeholder="Apellido Persona"
          value={apellido}
          name=""
          id="apellido"
          title="Apellido"
          error=""
          onChange={(e)=>{setApellido(e.target.value)}}>
        </DataField>
        <DataField
          labelText="Correo"
          type="email"
          placeholder="Correo Electronico"
          value={email}
          name=""
          id="email"
          title="email"
          error=""
          onChange={(e)=>{setEmail(e.target.value)}}>
        </DataField>
        <DataField
          labelText="Telefono"
          type="telefono"
          placeholder="Telefono"
          value={telefono}
          name=""
          id="telefono"
          title="telefono"
          error=""
          onChange={(e)=>{setTelefono(e.target.value)}}>
        </DataField>
        <DataField
          labelText="Direccion"
          type="direccion"
          placeholder="Direccion"
          value={direccion}
          name=""
          id="direccion"
          title="direccion"
          error=""
          onChange={(e)=>{setDireccion(e.target.value)}}>
        </DataField>
        <DataField
          labelText="Genero"
          type="genero"
          placeholder="Genero"
          value={genero}
          name=""
          id="genero"
          title="genero"
          error=""
          onChange={(e)=>{setGenero(e.target.value)}}>
        </DataField>
        <DataField
          labelText="Profesion"
          type="profesion"
          placeholder="Profesion"
          value={profesion}
          name=""
          id="profesion"
          title="profesion"
          error=""
          onChange={(e)=>{setProfesion(e.target.value)}}>
        </DataField>
        <section style={{padding:"1rem"}}>
          <Button onClick={onClickHandler}>Agregar</Button>
        </section>
        </div>
    </Page>
    </div>
  )
}

export default AddSnippet;
