import './App.css';
import { AuthProvider } from './context/Context';

import { Router } from './router';
function App() {

  return (
    <div>
      <AuthProvider>
   <Router/>
   </AuthProvider>
    </div>
  );
}

export default App;
