import React, { useEffect } from 'react';
import HeaderCon from '../header/HeaderCon';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <HeaderCon />
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <h2><b>Terms & Conditions</b></h2>
                        <p className="bottom-border"></p>
                        <h5 className="mt-4"><b>Lorem, ipsum.</b></h5>
                        <p className="privacy-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga minus exercitationem aliquid magnam dignissimos similique voluptates, recusandae iste odit placeat ab. Aliquam iusto quas hic natus quo eaque fugit dolorem libero obcaecati minus ratione odio nisi recusandae fuga nemo ipsa temporibus soluta suscipit, similique quod dolorum quibusdam repudiandae! Nobis, pariatur.</p>

                        <ul>
                            <li className="privacy-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad minus repellendus quibusdam cumque omnis mollitia quae nam adipisci debitis.</li>
                            <li className="privacy-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam deserunt rerum voluptas. Adipisci ipsa culpa corporis sed illum, molestiae dignissimos.</li>
                            <li className="privacy-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta labore fugit obcaecati delectus tenetur atque dolor cupiditate doloribus perferendis eaque?</li>
                            <li className="privacy-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid soluta odio deserunt numquam, vel laudantium! Voluptatem molestiae animi rem.</li>
                            <li className="privacy-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae quos, repellat velit praesentium beatae commodi. Suscipit nobis commodi similique!</li>
                        </ul>

                        <h6><b>Lorem, ipsum.</b></h6>
                        <ol>
                            <li className="privacy-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quo dicta nisi doloribus labore consequatur nulla, quisquam autem magnam perspiciatis!</li>
                            <li className="privacy-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur dolores alias temporibus quos deserunt, tempore praesentium! Suscipit, ex maiores?</li>
                            <li className="privacy-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sapiente earum similique tenetur laborum voluptatibus optio. Exercitationem ducimus corporis reiciendis?
                            </li>
                            <li className="privacy-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius similique non molestias unde cum fugit dolor debitis, totam dolorum. Asperiores.
                            </li>
                            <li className="privacy-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est veritatis maxime laudantium, rem in incidunt ipsa quaerat repudiandae voluptatem.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
export default Terms;