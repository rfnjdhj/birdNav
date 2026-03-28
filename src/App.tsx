import "./App.css";
import { Search } from "@/component/Search";
import "@icon-park/react/styles/index.css";
import { Background } from "@/component/Background";
import Store from "@/store";
import TodoList from "@/component/TodoList";
import Dock from "@/component/Dock";

const App = () => {
  // 环境变量使用演示
  const appTitle = import.meta.env.VITE_APP_TITLE || 'Bird Nav';
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const cdnPrefix = import.meta.env.VITE_CDN_PREFIX || '';
  
  console.log('环境信息:', {
    appTitle,
    apiUrl,
    cdnPrefix,
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  });

  return (
    <Store>
      <div className="main noselect">
        <h1 style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000, color: 'white', padding: '10px' }}>
          {appTitle}
        </h1>
        <Search />
        <TodoList />
        <Dock />
      </div>
      <Background />
    </Store>
  );
};

export default App;
