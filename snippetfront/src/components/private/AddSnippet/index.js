import Page from '../../shared/Page/Page';
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

export default AddSnippet;
