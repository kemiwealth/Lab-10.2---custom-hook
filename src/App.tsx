// import useLocalStorage from './hooks/useLocalStorage'
// import useFetchData from './hooks/UseFetchData';
// import './App.css'

// function App() {
//   const [storeValue , setStoredValue] = useLocalStorage('username', 'Abe');
//   const [Theme, setTheme] = useLocalStorage('Theme', 'Dark')
//   const {data, loading, error} = useFetchData('https://jsonplaceholder.typicode.com/todos')

//   return (
//     <>
//     <h1>Custom Hooks</h1>

//     <button onClick={() => setStoredValue('kemi')}>Update Username: {storeValue}</button>
//     <button onClick={() => setTheme('Dark')}>Theme: {Theme}</button>

//     {loading && <div>loading...</div>}

//     {error && <div>{error.message}</div>}

//     {data && data.map(todo => <div key={todo.id}>{todo.title}</div>)}
//     </>
  
//   )
// }

// export default App


import DebounceSearch from './components/DebounceSearch'
import Pagination from './components/Pagination'
import './App.css'

function App() {


  return (
    <div>
      <Pagination />
      <br />
      <DebounceSearch />
    </div>
  )
}

export default App