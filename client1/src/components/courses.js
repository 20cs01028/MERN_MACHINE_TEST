import React from 'react';

const courses = ({course}) => {

    const c = [];

    for(var key in course){
        if(course[key] === true) {
            c.push(key);
        }
    }
    return (
        <>
            {
                c && c.length > 0 && c.map(e =>
                    <label key={e}>{e}<br /></label>
                )
            }
        </>
    );
}

export default courses;