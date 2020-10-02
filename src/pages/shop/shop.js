import React from 'react'
import { Route } from 'react-router-dom';
import CollectionsOverview from "../../components/collection-overview/collections-overview";
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ({ match }) =>(

    <div className="shop-page"> 
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
);
 

export default ShopPage;