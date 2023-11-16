import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import {useState, useEffect, createContext} from "react";

export const Context = createContext();

function App() {
  
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/');
        const result = await response.json();
        setData(result.articles);
        const arr = result.articles.reduce((acc = [], curr) => {
          curr.taxonomy.tags.forEach(tag => {
            const index = acc.findIndex(item => item.text === tag.text);
            index > -1 ? acc[index].count++ : acc.push({...tag, count: 1});
          })
          return acc;
        }, [])
        /* result.articles.forEach(res => {
          res.taxonomy.tags.forEach(item => {
            if (arr.some(obj => obj.text === item.text)) {
              const index = arr.map(obj => obj.text).indexOf(item.text)
              arr[index].count++
            } else {
              const itemToAdd = {
                ...item,
                count: 1
              }
              arr.push(itemToAdd)
            }
          })
        }) */
        arr.sort((a, b) => a.count < b.count ? 1 : -1)
        setTags(arr)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Context.Provider value={[data, tags.slice(0, 10), loading]}>
      <div id="wrap">
        <main>
          <Container />
        </main>
        {/* <button onClick={() => console.log(data)}>log data</button> */}
        {/* <button onClick={() => console.log(tags)}>log tags</button> */}
      </div>
    </Context.Provider>
  );
}

export default App;
