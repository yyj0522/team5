import React from 'react';
import './Style.css';
import PageInfo from './PageInfo';
import PageTitle from './PageTitle';

function Page() {
    return (
        <div className="page-container">
            <PageTitle title="층별 시설 기억하기" />
            <PageInfo />
            <span className="page-number">63</span>
        </div>
    );
}

export default Page;
