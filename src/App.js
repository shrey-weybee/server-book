import { useEffect, useState } from 'react';
import CategoryCard from './components/CategoryCard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import jsonData from './data';
import './App.css';
import DataModal from './components/DataModal';
import {searchInObj} from "./services/utils";
function App() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState('')
  const [params, setParams] = useState({});
  useEffect(() => {
      (async function(){
          const fResponse = await fetch('https://raw.githubusercontent.com/shrey-weybee/server-book/master/data.json')
          const data = await fResponse.json()
          setData(data)
      })()
  }, []);
    useEffect(() => {
        if(search) {
            const filtered = jsonData.categories?.map((c)=>{
                return {...c,commands: c.commands.filter(x=>searchInObj(search,x))}
            })
            setData({...data, categories:filtered})
        }else {
            setData(jsonData);
        }
    }, [search]);

  const onChangeFun = (modal) => {
    setParams(modal);
  };
  return (
    <>
      <Header />
      <main className="container">
        <SearchBar search={search} onChange={e=>setSearch(e.target.value)} />
        {data &&
          data.categories &&
          data.categories.length &&
          data.categories.map((category) => <CategoryCard key={category.name} category={category} params={params} />)}
      </main>
      <DataModal params={data.params} onChangeFun={onChangeFun} />
    </>
  );
}

export default App;
