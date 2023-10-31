import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props){
    return(
        
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.img} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>Full Stack developer</span>
                    </div>
                </div>
                <time title='19 de Outubro às 20:49' dateTime='2023-10-19 20:49:53' >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no curso Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀</p>
                <p>👉 <a href="https://github.com/ImFelipeArantes">github.com/ImFelipeArantes</a></p>
                <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                    placeholder='Deixe seu comentário!'
                />
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}