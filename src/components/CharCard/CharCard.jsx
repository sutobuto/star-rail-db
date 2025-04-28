import styles from './CharCard.module.css';
import { Link } from 'react-router-dom';

const CharCard = (props) => {
    let star;
    if(props.rarity == "5")
    {
        star = styles.five;
    } else if(props.rarity == "4")
    {
        star = styles.four;
    }

    return(
    <>
    <Link to={`/characters/${props.codename}`}>
        <div className={`${styles.container} ${star}`}>
            <span className={styles.name}>{props.name}</span>
            <div className={styles.icons}>
                <img style={{aspectRatio: '1/1'}}height='34' width='34' src={new URL(`/src/assets/imgs/icons/types/${props.type}.webp`, import.meta.url).href}></img>
    
                <img height='28' width='28' src={new URL(`/src/assets/imgs/icons/paths/${props.path.replace(/\s/g, "")}-small.webp`, import.meta.url).href}></img>
            </div>
            <div className={styles.gradient}>
            </div>
            <div className={styles.splash_container}>
                <picture>
                    <img className='splash' src={new URL(`/src/assets/imgs/chars/portraits/${props.codename}.webp`, import.meta.url).href}></img>
                </picture>
            </div>
        </div>
    </Link>
    </>
    )
}

export default CharCard;