import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import Detailss from '../Details/Detailss';

const Detail = () => {
    const details=useLoaderData();
    // console.log(details);
    const {id,body}=details;
    return (
        <div>
             <p>detail folder{id}</p>
             <p>{body}</p>
             <Link to = {`/detail/${id}`}><button > show more</button></Link>
             
             
             {/* {
                details.map(detail=><Detailss 
                key={detail.id}
                detail={detail}
                
                ></Detailss>)
                } */}
        </div>
    );
};

export default Detail;