import styles from './Sidebar.module.css';
import SideItem from './SideItem/SideItem';
import { useEffect } from 'react';
import { useMediaQuery } from '/src/hooks/useMediaQuery';

const Sidebar = (props) => {
    const setCollapse = props.setCollapse;
    const breakpoint = useMediaQuery('(max-width: 820px)');
    useEffect(() => {
        if(breakpoint)
        {
            setCollapse(true);
        }
    }, [breakpoint])

    return (
        <>
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
                <SideItem name='Home' route='/' icon='home.svg' />
                <SideItem name='Characters' route='/characters' icon='characters.svg' />
                <SideItem name='Light Cones' route='/lightcones' icon='lightcones.webp' />
                <SideItem name='Relics' route='/relics' icon='relics.webp' />
                <SideItem name='Bosses' route='/bosses' icon='bosses.svg' />
            </div>
        </div>

        <div 
            className={styles.compact}
            style={{
                display: !breakpoint && 'none',
                background: !props.isCollapsed && '#2f111cFF',
            }}>
            <button onClick={() => setCollapse(!props.isCollapsed)} className={styles.collapse}>
                <img src=
                {
                    !props.isCollapsed ? `/src/assets/imgs/ui/icons/nav_close.svg`: `/src/assets/imgs/ui/icons/nav_open.svg`
                }
                ></img>
            </button>
          
            <div 
                className={styles.compact_nav}
                style={{
                    transform: !props.isCollapsed && 'translate(0,0)'
                }}
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
                    <SideItem name='Home' route='/' icon='home.svg' />
                    <SideItem name='Characters' route='/characters' icon='characters.svg' />
                    <SideItem name='Light Cones' route='/lightcones' icon='lightcones.webp' />
                    <SideItem name='Relics' route='/relics' icon='relics.webp' />
                    <SideItem name='Bosses' route='/bosses' icon='bosses.svg' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;