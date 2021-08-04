import appReducer from './reducers/app';
import secReducer from './reducers/sec';
import registroReducer from './reducers/registros';

 const mainReducer = (state= {}, action={})=>{
   const { app, sec, registro } = state;
  return {
    //list all reducers of app
    sec: secReducer(sec, action),
    app: appReducer(app, action),
    registro: registroReducer(registro, action),
  }
}

export default mainReducer;
