import styles from './Sidebar.module.css';
import SideItem from './SideItem/SideItem';
import { useState } from 'react';
import { useMediaQuery } from '/src/hooks/useMediaQuery';
import { Link } from 'react-router-dom';

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
                <Link to='/'>
                    <SideItem name='Home' icon='home.svg' isCollapsed={props.isCollapsed}/>
                </Link>
                <Link to='/characters'>
                    <SideItem name='Characters' icon='characters.svg' isCollapsed={props.isCollapsed}/>
                </Link>
                <Link to='/lightcones'>
                    <SideItem name='Light Cones' icon='lightcones.webp' isCollapsed={props.isCollapsed}/>
                </Link>
                <Link to='/relics'>
                    <SideItem name='Relics' icon='relics.webp' isCollapsed={props.isCollapsed}/>
                </Link>
                <Link to='/bosses'>
                    <SideItem name='Bosses' icon='bosses.svg' isCollapsed={props.isCollapsed}/>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;