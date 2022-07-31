import logo from './logo.svg';
import './App.css';
import ComA from './pages/ComA';
import ComB from './pages/ComB';

// 导入Provider 包裹结构 达到维护state的效果
import { Provider } from 'react-redux'
import store from './store';
function App() {
  return (
    // 不要忘记传递store
    <Provider store={store}>
      <div className="App">
        <ComA></ComA>
        <ComB></ComB>
      </div>
    </Provider>

  );
}

export default App;
