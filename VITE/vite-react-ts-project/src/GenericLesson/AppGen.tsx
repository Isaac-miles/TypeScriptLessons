import React,{useState} from 'react'
import Heading from "./Heading"
import { Section } from "./Section"
import Counter from "./Counter"
import List from './List'

function App() {
  const [count, setCount] = useState< number>(0)

  return (
    <>
     <Heading  title="React"/>
     <Section>
      hi
     </Section>
     <Counter setCount={setCount}>Count is {count}</Counter>
     <List items={['miles', 'dave', 'tear']} render={(item:string)=><span className='bold'>{item}</span>}></List>
    </>
  )
}

export default App
