import styles from './Sidebar.module.css';
import SideItem from './SideItem/SideItem';
import { useState } from 'react';

const Sidebar = (props) => {
    const setCollapse = props.setCollapse;
    return (
        <div className={`${styles.container} ${props.isCollapsed && styles.container_small}`}>
            <div className={styles.head}>
                <button onClick={() => setCollapse(!props.isCollapsed)} className={styles.collapse}>col</button>
            </div>
            <div className={styles.sideitems}>
                <SideItem name='Home' isCollapsed={props.isCollapsed}/>
                <SideItem name='Characters' isCollapsed={props.isCollapsed}/>
                <SideItem name='Light Cones' isCollapsed={props.isCollapsed}/>
                <SideItem name='Relics' isCollapsed={props.isCollapsed}/>
                <SideItem name='Bosses' isCollapsed={props.isCollapsed}/>
            </div>
        </div>
    )
}

export default Sidebar;