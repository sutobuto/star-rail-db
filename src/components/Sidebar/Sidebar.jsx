import styles from './Sidebar.module.css';
import SideItem from './SideItem/SideItem';
import { useState } from 'react';
import { useMediaQuery } from '/src/hooks/useMediaQuery';

const Sidebar = (props) => {
    const setCollapse = props.setCollapse;
    const breakpoint = useMediaQuery('(max-width: 920px)');

    return (
        <div 
            className={`${styles.container} ${props.isCollapsed && styles.container_small}`}
            style={{display: breakpoint && 'none',}}
        >
            <div className={styles.head}>
                <button onClick={() => setCollapse(!props.isCollapsed)} className={styles.collapse}>
                    <img src=
                    {
                        !props.isCollapsed ? `/src/assets/imgs/ui/icons/nav_close.svg`: `/src/assets/imgs/ui/icons/nav_open.svg`
                    }
                    ></img>
                </button>
            </div>
            <div className={styles.sideitems}>
                <SideItem name='Home' icon='home.svg' isCollapsed={props.isCollapsed}/>
                <SideItem name='Characters' icon='characters.svg' isCollapsed={props.isCollapsed}/>
                <SideItem name='Light Cones' icon='lightcones.webp' isCollapsed={props.isCollapsed}/>
                <SideItem name='Relics' icon='relics.webp' isCollapsed={props.isCollapsed}/>
                <SideItem name='Bosses' icon='bosses.svg' isCollapsed={props.isCollapsed}/>
            </div>
        </div>
    )
}

export default Sidebar;