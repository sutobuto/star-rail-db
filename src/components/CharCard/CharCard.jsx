import styles from './CharCard.module.css';

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
    <a href={`characters/${props.codename}`}>
        <div className={`${styles.container} ${star}`}>
            <span>{props.name}</span>
            <div className={styles.icons}>
                <img style={{aspectRatio: '1/1'}}height='34' width='34' src={`/src/assets/imgs/icons/types/${props.type}.webp`}></img>
            
                <img height='28' width='28' src={`/src/assets/imgs/icons/paths/${props.path.replace(/\s/g, "")}-small.webp`}></img>

            </div>
            <div className={styles.gradient}>
            </div>
            <div className={styles.splash_container}>
                <picture>
                    <img className='splash' src={`/src/assets/imgs/chars/portraits/${props.codename}.webp`}></img>
                </picture>
            </div>
        </div>
    </a>
    </>
    )
}

export default CharCard;