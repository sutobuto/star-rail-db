import styles from "./SideItem.module.css";

const SideItem = (props) => {
    return (
        <button className={styles.container}>
            <span className={styles.icon}>icon</span>
            <span className={styles.name} style={{}}>{props.name}</span>
        </button>
    )
}

export default SideItem;