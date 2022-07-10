import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss'
import CollectionPrev from '../collection-prev/CollectionPrev'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionOverview = ({collections}) => {
    return(
        <div className='collections-overview'>
            {
              collections.map(({id, ...otherCollectionProps}) =>(
                  <CollectionPrev key={id} {...otherCollectionProps}/>
              ))
            }
        </div>
    )    
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)

