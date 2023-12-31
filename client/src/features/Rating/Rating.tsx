import React from 'react';

import styles from './styles/Rating.module.scss';

type RatingType = {
    choosedRating: undefined | string,
    setRating: any
}

const Rating = ({choosedRating, setRating}: RatingType) => {

    function mouseMove(event: React.MouseEvent<HTMLButtonElement>) {
        const stars = document.querySelectorAll('.star');
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i] as HTMLButtonElement;

            if (i < Array.from(stars).indexOf(event.currentTarget)) {
                star.firstElementChild?.firstElementChild?.setAttribute('fill', '#FCFF50');
            } else if (i > Array.from(stars).indexOf(event.currentTarget)) {
                star.firstElementChild?.firstElementChild?.setAttribute('fill', 'white');
            } else {
                star.firstElementChild?.firstElementChild?.setAttribute('fill', '#FCFF50');
            };
        };
    }

    const arr = [];

    for (let index = 0; index < 5; index++) {
        if (choosedRating !== undefined && index <= +choosedRating) {
            arr.push('#FCFF50')
        } else if (choosedRating !== undefined && index > +choosedRating) {
            arr.push('white')
        }
    }

    function addRating(event: React.MouseEvent<HTMLButtonElement>) {
        const stars = document.querySelectorAll('.star');
        const index = Array.from(stars).indexOf(event.currentTarget);

        setRating(index + 1);
    }
    return (
        <div className="">
            {!choosedRating ? 
                <div className={styles.stars}>
                    <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                        </svg>
                    </span>
                    <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                        </svg>
                    </span>
                    <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                        </svg>
                    </span>
                    <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                        </svg>
                    </span>
                    <span className='star' onMouseMove={mouseMove} onClick={addRating}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill="white"/>
                        </svg>
                    </span>
                </div> : 
                <div className={styles.stars}>
                    {arr.map((elem) => {
                        return (
                            <span className='star'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.86 10.442L11 6.06L9.13796 10.447L4.39496 10.862L7.99096 13.989L6.92096 18.629L11.006 16.174L15.086 18.626L14.015 13.982L17.608 10.859L12.86 10.443V10.442ZM16.591 20.695L11.006 17.339L5.41596 20.698L6.88196 14.348L1.95996 10.07L8.45096 9.503L11 3.5L13.546 9.498L20.042 10.067L15.124 14.342L16.591 20.695Z" fill={`${elem}`}/>
                                </svg>
                            </span>
                        )
                    })}
                </div>
                }
        </div>
    );
};

export default Rating;