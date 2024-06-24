import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';

// author: { avatar_url: " ", name: " ", role: " " }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tiagomachado05.png',
      name: 'Tiago Machado',
      role: 'Web Development'
    },
    content: [
      { type: 'paragraph', content: 'Testando aqui esse React' },
      { type: 'paragraph', content: 'Morrendo de fome mas seguimos em jogo. Fiz o projeto aqui da Rocketseat' },
      { type: 'link', content: "tiago_machado05" },
    ],
    publishedAt: new Date('2024-06-23 14:20:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1359132622673305600/CE_eTsUj_400x400.jpg',
      name: 'Rafael Soares',
      role: 'Mechanical Enginner'
    },
    content: [
      { type: 'paragraph', content: 'Testando aqui esse React' },
      { type: 'paragraph', content: 'Morrendo de fome mas seguimos em jogo. Fiz o projeto aqui da Rocketseat' },
      { type: 'link', content: "tiago_machado05" },
    ],
    publishedAt: new Date('2024-06-23 14:20:00'),
  },
];

//iteração = estrutura de repetição, cada posição do array faz algo

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>

    </div>
  )
}


