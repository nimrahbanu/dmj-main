import React from 'react';
import bannerImg from '../../assets/images/Rectangle 124.png';


export default class Banner extends React.Component {
    render() {
        const { title, fullTitle, children } = this.props;
        return (
            <>
                <div className="banner">
                    <img src={bannerImg} className="img-fluid banner-img" alt="Banner" />

                    <div className="banner-text text-center">
                        <h3><b>{title}</b></h3>

                        <p>{children}{fullTitle}</p>
                    </div>
                </div>
            </>
        )
    }
}