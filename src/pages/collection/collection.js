import React from "react";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/collection-item";


const CollectionPage = ({ match }) =>{
    console.log(match);
    return(
    <div className="collection-page">
        <h2>COLLECTION PAGE</h2>
    </div>
    )};

export default CollectionPage;