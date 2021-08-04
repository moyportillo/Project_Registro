import Page from '../../shared/Page/Page';
import Field from '../../shared/DataField/DataField';

import {useState} from 'react';

import './AddRegistro.css';
const AddSnippet = ()=> {
  const [form, setForm] = useState({name: "", snippet: ""});
  const onChangeHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    console.log(name, value);
    const newState = {
      ...form,
      [name]:value
    }
    setForm(newState);
  }
  const {name, snippet} = form;
  return (
    <Page showHeader title="Nuevo Registro Persona">
      <section className="nuevoRegistro">
      <Field
          name="id"
          id="id"
          placeholder="Identidad"
          type="text"
          labelText="Identidad"
          value=""
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="name"
          id="name"
          placeholder="Nombre de la persona"
          type="text"
          labelText="Nombre"
          value={name}
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="apellido"
          id="apellido"
          placeholder="Apellido de la persona"
          type="text"
          labelText="Apellido"
          value=""
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="correo"
          id="correo"
          placeholder="correo electronico"
          type="text"
          labelText="Correo"
          value=""
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="telefono"
          id="telefono"
          placeholder="telefono"
          type="text"
          labelText="Telefono"
          value=""
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="direccion"
          id="direccion"
          placeholder="Domicilio"
          type="text"
          labelText="Direccion"
          value=""
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="genero"
          id="genero"
          placeholder="Genero"
          type="text"
          labelText="Genero"
          value=""
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="profesion"
          id="profesion"
          placeholder="Profesion"
          type="text"
          labelText="Profesion"
          value=""
          onChange={onChangeHandler}
        >
        </Field>
      </section>
    </Page>
    );
}

export default AddSnippet;

/*import Page from '../../shared/Page/Page';
import Field from '../../shared/DataField/DataField';

import {useState} from 'react';

import './AddSnippet.css';
const AddSnippet = ()=> {
  const [form, setForm] = useState({id="", name="", apellido="", email="", telefono="", direccion="", genero="", profesion=""});
  const onChangeHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    const { id, name, apellido, email, telefono, direccion, genero, profesion} = e.target;
    console.log(id, name, apellido, email, telefono, direccion, genero, profesion);
    const newState = {
      ...form,
      [name]:value
    }
    setForm(newState);
  }
  const {id, name, apellido, email, telefono, direccion, genero, profesion} = form;
  return (
    <Page showHeader title="Nuevo">
      <section>
        <Field
          name="id"
          id="id"
          placeholder="identificacion"
          type="text"
          labelText="Identidad"
          value={id}
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="name"
          id="name"
          placeholder="Nombre de la persona"
          type="text"
          labelText="Nombre"
          value={name}
          onChange={onChangeHandler}
        >
        </Field>
        <Field
          name="snippet"
          id="snippet"
          placeholder="Codigo del Snippet"
          type="textarea"
          labelText="Nombre"
          value={snippet}
          onChange={onChangeHandler}
          rows="10"
          style={{minHeight:"40vh"}}
        >
        </Field>
      </section>
    </Page>
    );
}

export default AddSnippet;*/
