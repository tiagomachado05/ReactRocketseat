import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
           author="Tiago Machado"
            content="Vontade de dormir"
          />

         <Post 
            author="Rafael Soares"
            content="Vontade de ir pra praia!"
          />
        </main>

      </div>

    </div>
  )
}


