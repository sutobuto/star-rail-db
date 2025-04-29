import styles from "./FilterBar.module.css"
import filter_items from "/src/jsons/filter_items.json"

const FilterBar = () => {
    return (
        <div className={styles.filters}>
                <div className={styles.rarity_filters}>
                    <div className={styles.five}>★</div>
                    <div className={styles.four}>★</div>
                </div>
                
                <div className={styles.type_filters}>
                    {filter_items.filter((item) => item.type=='types').map((type) =>
                        <picture>
                            <img height='31' width='31' src={new URL(`/src/assets/imgs/icons/types/${type.name.replace(/\s/g, "")}.webp`, import.meta.url).href}></img>
                        </picture>)}
                </div>
                
                <div className={styles.path_filters}>
                    {filter_items.filter((item) => item.type=='paths').map((path) =>
                        <picture>
                            <img height='31' width='31' src={new URL(`/src/assets/imgs/icons/paths/${path.name.replace(/\s/g, "")}-small.webp`, import.meta.url).href}></img>
                        </picture>)}
                </div>
        </div>
    )
}

export default FilterBar