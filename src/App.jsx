import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
      
        <main>
          <Post 
            author="Felipe Arantes"
            img='https://github.com/ImFelipeArantes.png'
          />
          <Post 
            author="Julia Amaral"
            img='https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.6435-9/55831553_2017107135079360_8037895938569666560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_ohc=lL_1SoECnXEAX84GRL0&_nc_oc=AQmlEnNgcNshyIZYy0LWzlIiY1HxisW2zHZdTrGEcNXhgz3JydnISUTx281Kw4GUqx4je_65VgIM6jP-XWZ68CKF&_nc_ht=scontent.fcpq14-1.fna&oh=00_AfDQevUJpqilfWZ2KAlrqo2cuGuUfOOaU9gUCH_FvL18Cw&oe=655FEAEE'
          />
        </main>
      </div>

    </div>
  )
}
