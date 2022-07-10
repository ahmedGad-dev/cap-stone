import React from "react";
import './collection-prev.styles.scss'
import CollectionItem from "../../components/collection-item/CollectionItem"

const CollectionPrev = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
               {items.filter((item, index) => index < 4).map(item => (
                   <CollectionItem imageUrl={item.imageUrl} key={item.id} name={item.name} price={item.price} item={item}/>
               ))}
            </div>
        </div>
    )
}

export default CollectionPrev