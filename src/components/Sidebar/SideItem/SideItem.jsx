import styles from "./SideItem.module.css";

const SideItem = (props) => {
    return (
        <button className={styles.container}>
            <div className={styles.icon}>
                <img 
                    width='24'
                    src={`./src/assets/imgs/ui/icons/${props.icon}`} 
                ></img>
            </div>
            <span className={styles.name} style={{}}>{props.name}</span>
        </button>
    )
}

export default SideItem;