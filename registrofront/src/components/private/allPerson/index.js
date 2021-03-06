import { MdRemoveRedEye, MdAddCircleOutline} from 'react-icons/md';

import Page from '../../shared/Page/Page';
import {useEffect, useRef} from 'react';
import {privateaxios} from '../../../store/axios';
import { useSession } from '../../../hooks/Session';
import { registro_FETCHING, registro_LOAD, registro_SETCURRENT } from '../../../store/reducers/registros';
import {Redirect, Link} from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroller';

import './Persons.css';

const Myregistros = ()=>{

  const [{ registro}, dispatch] = useSession();
  const { page, itemsPages, registros, fetching, hasMore, redirect, scrollto} = registro;

  const loadMoreregistros = async (pageToLoad)=>{
    if(!fetching && hasMore){
      try {
        console.log(page, pageToLoad);
        const indexPage = page + 1;
        dispatch({ type: registro_FETCHING });
        let { data } = await privateaxios.get(`/api/registro/facet/${indexPage}/${itemsPages}`);
        dispatch({ type: registro_LOAD, payload: data });
      } catch (ex) {
        console.log(ex);
      }
    }
  }

  const onClickHandler = (_id)=>{
    const scrollToY = scrollParentRef.current.scrollTop;
    dispatch({ type: registro_SETCURRENT, payload: { _id: _id, scrollToY: scrollToY}});
  }
  const scrollParentRef = useRef();

  useEffect(()=>{
    scrollParentRef.current.scrollTo(0, scrollto);
  }, []);
  if (redirect) {
    return (<Redirect to="/listadopersonas"></Redirect>);
  }

  const listOfregistros = registros.map((o,i)=>{
    return (
      <li key={o._id + i} className="listItem">
        <span className="listDetail">
          <span>{o.id}</span>
          <span>{o.name}</span>
          <span>{o.apellido}</span>
          <span>{o.email}</span>
        </span>
        <span onClick={()=>onClickHandler(o._id)}><MdRemoveRedEye/></span>
      </li>
    );
  });
 
  return(
    <Page showHeader title="Listado de Personas Registrados">
      <section className="scrollerParent" ref={scrollParentRef}>
        <InfiniteScroll
          hasMore={hasMore}
          getScrollParent={()=>scrollParentRef.current}
          loader={(<li className="listItem" key="loaderkeyid">Loading...</li>)}
          loadMore={loadMoreregistros}
          element="section"
          useWindow={false}
        >
          <ul className="listHolder">
            {listOfregistros}
          </ul>
        </InfiniteScroll>
      </section>
    </Page>
  )
}

export default Myregistros;
