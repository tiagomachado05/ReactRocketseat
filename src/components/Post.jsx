import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/tiagomachado05.png'/>
                    <div className={styles.avatarInfo}>
                        <strong>Tiago Machado</strong>
                        <span>Web Developer</span>
                    </div>

                </div>

                <time dateTime="">Publicado há 1hora</time>

            </header>
        </article>
    )
}