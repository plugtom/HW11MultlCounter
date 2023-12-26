const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter(props) {
    const { item: { id, number }, hdlUpdate, delCounter } = props;


  return (
   <div className='counter'>
      <button onClick = {()=>hdlUpdate(id,-1)}> - </button>
      <h3>{number}</h3>
      <button onClick = {()=>hdlUpdate(id,1)}> + </button>
      <button onClick = {()=>hdlUpdate(id,-number)}> C </button>
      <button  onClick={() =>props.delCounter(id)}>X</button>
   </div>
//    <div className='counter'>
//       <button onClick = {()=>props.hdlUpdate(props.item.id,-1)}> - </button>
//       <h3>{props.item.number}</h3>
//       <button onClick = {()=>props.hdlUpdate(props.item.id,1)}> + </button>
//       <button onClick = {()=>props.hdlUpdate(props.item.id,-props.item.number)}> C </button>
//    </div>
  )
}

function SumInfo(props)  {
    const sumtoto = props.counters.reduce((sum, counter) => sum + counter.number, 0);
  return (
    <div className='suminfo'>
      <h1  >Sum = { sumtoto}</h1>
    </div>
  )
}

function App() {

  const [counters, setCounters] = React.useState([ {id: 1, number: 0} ])
  // let allCounter = Array(counters).fill(<Counter />)
  
  const hdlUpdate = (id, num) => {
    const  cloneCounters = [...counters]
    let idx = cloneCounters.findIndex( el => el.id === id)
    console.log(idx, num)
    if(cloneCounters[idx].number+num<0){
        return
    }
    cloneCounters[idx].number += num
    setCounters(cloneCounters)
  }

  const delCounter = (id) => {
    const updatedCounters = counters.filter((counter) => counter.id !== id);
    setCounters(updatedCounters);
  };


  const hdlAddCounter = ()=>{
    let newId = counters.length===0 ? 1 : counters.at(-1).id +1 
    // setCounter([...counters, {id: newId, number : 0}])
    
    const  cloneCounters = [...counters]
    cloneCounters.push( {id: newId, number: 0} )
    setCounters(cloneCounters)
    if(cloneCounters+n >0){
        return
    }
  }

  return (
  <>
    <h1 className='text-center'>Codecamp Academy 01</h1>
    <button className='text-center' onClick={hdlAddCounter}>Add Counter</button>
    <SumInfo counters={counters} />

    {counters.map( el => {
      return <Counter key={el.id} item={el} hdlUpdate={hdlUpdate} delCounter={delCounter}/> 
    } )}

  </>
  )
}