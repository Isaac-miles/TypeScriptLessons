import React,{useState} from 'react'
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState< number>(0)

  return (
    <>
     <Heading  title="React"/>
     <Section>
      hi
     </Section>
     <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  )
}

export default App
