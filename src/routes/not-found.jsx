import React, {useState} from 'react';
import TitleBlock from "../components/TitleBlock";
import {getColorByPageName} from "../helper/getColorByPageName";
import {NOT_FOUND} from "../config/constants";
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    let title, desc;

    const error = useRouteError();
    if(error) {
        title = error.message;
        desc = error.id;
    }

    return (
        <div className="page-wrap page-wrap-search-not-found">
            <TitleBlock
                title={title ? title : "Page not found"}
                color={getColorByPageName(NOT_FOUND)}
                desc={desc ? desc : ""}
            />
        </div>
    );
}

export default NotFound;