import React from "react";
import './collection-item.styles.scss'
import CustomButton from "../custom-button/CustomButton";
import {connect} from 'react-redux'
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = (props) => {
    const { name, price, imageUrl } = props.item;
    return(
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}> </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
                <CustomButton onClick = {() => props.addItem(props.item)} className='custom-button' inverted >Add To Cart</CustomButton>
            </div>           
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)