import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/tiagomachado05.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Tiago Machado</strong>
                        <span>Web Developer</span>
                    </div>

                </div>

                <time title="23 de Junho às 14:20h" dateTime="2022-06-23">Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Testando aqui esse React</p>
                <p>Morrendo de fome mas seguimos em jogo. Fiz o projeto aqui da Rocketseat</p>
                <p><a href="https://www.instagram.com/tiago_machado05/" target="_blank">tiago_machado05</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                    <a href="">#react</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}