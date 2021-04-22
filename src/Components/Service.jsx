import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

const Service = () => {
    return(
        <>
        <div className="mb-5">
            <h1 className="text-center">Service</h1>
        </div>
         <div className="container-fluid">
            <div className="row row-card">
                <div className="col-10 mx-auto">
        {
            Sdata.map((val, ind) => {
                return <Card 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                />
            })
        }
        </div>
        </div>
        </div>
         
        </>
    );

}

export default Service;