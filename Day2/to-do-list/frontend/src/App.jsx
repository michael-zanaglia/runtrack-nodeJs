import React, { useEffect, useState } from 'react';
import ListBoard from './components/listBoard/listBoard';
import Buttons from './components/Buttons/Buttons';
import Form from './components/Form/Form';
import { fetchGet } from './utiles/fetch';

export const Context = React.createContext();
export const ContextId = React.createContext();

function App() {
  const localHost = "http://localhost:8080";
  const [getData, setGetData] = useState(null);
  const [letGet, setLetGet] = useState(null)
  const controller = new AbortController();

  // ID de ListBoard 
  const [selected, setSelected] = useState(null);

  useEffect(()=> {
    const fetchingData = async() => {
      if (letGet){
        const d = await fetchGet("tasks")
        setGetData(d)
        setLetGet(prevData => !prevData)
      }
    }
    
    fetchingData()

    return () => {
      controller.abort();
    };
  }, [letGet])

  useEffect(()=> {
    async function firstFecth(){
      if(letGet === null) {
        const d = await fetchGet("tasks")
        setGetData(d)
      }
    }
    firstFecth()
  
  },[])

  return(
    <Context.Provider value={[letGet, setLetGet]}>
      <div className='box'>
          <h1>{letGet? "Get en marche" : "To do List"}</h1>
          <div className='container-flex'>
          <ContextId.Provider value={[selected, setSelected]}>
            <ListBoard data={getData}/>
            <Buttons data={getData}/>
          </ContextId.Provider>
          </div>
          <Form/>
      </div>
    </Context.Provider>
  )
}

export default App;
