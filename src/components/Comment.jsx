import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/ImFelipeArantes.png"
            />
        
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Arantes</strong>
                            <time title='19 de Outubro às 20:49' dateTime='2023-10-19 20:49:53' >Publicado há 2h</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Felipe, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}