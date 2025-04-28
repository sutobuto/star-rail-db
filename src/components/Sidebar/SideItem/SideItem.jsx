import styles from "./SideItem.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SideItem = (props) => {
    return (
        <NavLink 
            className={styles.container} 
            style={({isActive, isPending}) => (
                {background: (isActive || isPending) && '#513740FF'}
            )}
            to={props.route}>
            <div className={styles.icon}>
                <img 
                    width='24'
                    src={new URL(`/src/assets/imgs/ui/icons/${props.icon}`, import.meta.url).href} 
                ></img>
            </div>
            <span className={styles.name} style={{}}>{props.name}</span>
        </NavLink>
    )
}

export default SideItem;