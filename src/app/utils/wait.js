import React from 'react';

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout((reject('Rejected')), '5000');
    });
};

export default wait;