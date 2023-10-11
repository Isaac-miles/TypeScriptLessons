import Counter from "./CounterHooks"
import { CounterProvider ,initState} from "./contex/counterContext"

function App() {

  return (
    <CounterProvider  count={initState.count} userName={initState.userName}>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </CounterProvider>
  )
}

export default App