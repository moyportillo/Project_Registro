let emptyregistros = {
  page: 0,
  pages: 0,
  itemsPages: 10,
  error: "",
  registros: [],
  filter: {},
  fetching: false,
  hasMore: true,
  setCurrentId: null,
  redirect:false,
  currentregistro: null,
  scrollto:0,
}

export const registro_FETCHING = "registro_FETCHING";
export const registro_LOAD = "registro_LOAD";
export const registro_RESET = "registro_FETCHING";
export const registro_ERROR = "registro_ERROR";
export const registro_SETCURRENT = "registro_SETCURRENT";
export const registro_CURRENT_LOAD = "registro_CURRENT_LOAD";


const registroReducer = (state = emptyregistros, action = {}) => {
  switch(action.type){
    case registro_FETCHING:
      return {
        ...state,
        fetching:true
      }
    case registro_LOAD:
      const {rownum, rows, page, size} = action.payload;
      const pages = Math.ceil(rownum / size);
      console.log({rownum, rows, size, pages, page});
      const hasMore = page <= pages;
      const newRows = [...state.registros, ...rows];
      return {
        ...state,
        fetching:false,
        page: page,
        pages: pages,
        itemsPages: size,
        error: "",
        registros: newRows,
        hasMore: hasMore,
      }
    case registro_RESET:
      return emptyregistros;
    case registro_ERROR:
      const {error} = action.payload;
      return {
        ...state,
        error : error
      }
    case registro_SETCURRENT:
      return {
        ...state,
        setCurrentId: action.payload._id,
        scrollto:action.payload.scrollToY,
        redirect: true,
      }
    case registro_CURRENT_LOAD:
      return {
        ...state,
        currentregistro: action.payload,
        redirect: false,
      }
    default:
      return state;
  }
}

export default registroReducer;
