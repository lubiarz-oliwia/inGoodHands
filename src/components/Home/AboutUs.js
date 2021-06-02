import React from 'react';
import Header from './Header';
import Signature from '../../assets/Signature.svg';
import People from '../../assets/People.jpg';

function AboutUs() {
    return (
        <div className="aboutUs" id="aboutUs">
            <div>
                <Header h1_text={"O nas"}/> 
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="signature_img" src={Signature} alt="podpis"/>  
            </div>
            <img className="people_img" src={People} alt="ludzie" /> 
        </div>
    )
}

export default AboutUs;
