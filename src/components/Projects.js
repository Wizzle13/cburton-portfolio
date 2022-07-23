import React, { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: 'Horiseon',
            description: 'Search Engine Optimization',
            url: 'https://wizzle13.github.io/horiseon/',
            github:'https://wizzle13.github.io/horiseon/',
            image:'horiseon.jpg'
        },
        {
            name: 'Run Buddy',
            description: 'Find your Run Buddy here',
            url: 'https://wizzle13.github.io/run-buddy/',
            github:'https://wizzle13.github.io/run-buddy/',
            image:'run-buddy.jpg'
        },
        {
            name: 'Password Generator',
            description: 'Generates Ramdon Passwords',
            url: 'https://wizzle13.github.io/password-generator/',
            github:'https://wizzle13.github.io/password-generator/',
            image:'password-generator.png'
        },
        {
            name: 'The Coders Blog',
            description: 'A simple blog site',
            url: 'https://the-coders-blog.herokuapp.com',
            github:'https://the-coders-blog.herokuapp.com',
            image:'codersblog.jpg'
        },
        {
            name: 'PokeBook',
            description: 'Pokemon Social Media site',
            url: 'https://the-poke-book.herokuapp.com',
            github:'https://the-poke-book.herokuapp.com',
            image:'pokebook.jpg'
        }
    ]);

    // const currentPhotos = projects.filter() 
    return (
        <section>
            <div>
                <div className='flex-row'>
                    {projects.map((image, i) => (
                    <img
                        src={require(`../assets/images/${image}`).default}
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        key={image.name}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;