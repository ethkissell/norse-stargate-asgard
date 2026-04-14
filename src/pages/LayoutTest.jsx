import React from 'react'

import testImage from '../images/test.webp'

export default function LayoutTest() {
    return (
        <div className="page-section">
            <h3 className='contentTitle'>Layout Test</h3>

            {/* image on left, text on right */}
            <div className="content-block split-layout">
                <figure className="figure-wrap">
                    <div className="figure-frame">
                    <img src={testImage} alt="test" />
                    </div>
                    <figcaption className="figure-caption">
                    Caption explaining the image.
                    </figcaption>
                </figure>

                <div className="page-text">
                    <p>
                    Put your text here. This layout is good when the image supports the paragraph.
                    </p>
                </div>
            </div>

            {/* image on right, text on left */}
            <div className="content-block split-layout reverse">
                <figure className="figure-wrap">
                    <div className="figure-frame">
                    <img src={testImage} alt="test" />
                    </div>
                    <figcaption className="figure-caption">
                    Caption explaining the image.
                    </figcaption>
                </figure>

                <div className="page-text">
                    <p>
                    Put your text here. This version flips the image to the right.
                    </p>
                </div>
            </div>

            {/* two images next to each other */}
            <div className="content-block">
                <div className="figure-grid">
                    <figure className="figure-wrap">
                    <div className="figure-frame">
                        <img src={testImage} alt="test one" />
                    </div>
                    <figcaption className="figure-caption">
                        Caption for the first image.
                    </figcaption>
                    </figure>

                    <figure className="figure-wrap">
                    <div className="figure-frame">
                        <img src={testImage} alt="test two" />
                    </div>
                    <figcaption className="figure-caption">
                        Caption for the second image.
                    </figcaption>
                    </figure>
                </div>
            </div>

            {/* one image centered */}
            <div className="content-block figure-centered">
                <figure className="figure-wrap">
                    <div className="figure-frame">
                    <img src={testImage} alt="test" />
                    </div>
                    <figcaption className="figure-caption">
                    Caption explaining the image.
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}