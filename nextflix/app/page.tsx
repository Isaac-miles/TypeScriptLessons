import {Provider} from 'react-redux'
import store from '@/store/store'
import App from './app'


export default async function Home() {

  return (
    <Provider store={store}>
     <App />
    </Provider>
  )
}
