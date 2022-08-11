import React, { useState } from 'react';
import Modal from './Modal.js';

function Project() {
    const [currentProject, setProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const projects = [
        {
            name: 'The Ultimate README Generator',
            description: 'This is a simple Node.js program designed to quickly create professional looking README.md documents.',
            url: 'https://wizzle13.github.io/ultimate-readme-generator/',
            github:'https://github.com/Wizzle13/ultimate-readme-generator/',
            image:'readme-generator.png'
        },
        {
            name: 'Password Generator',
            description: 'Generates Ramdon Passwords. A simple site for generating random passwords.',
            url: 'https://wizzle13.github.io/password-generator/',
            github:'https://github.com/Wizzle13/password-generator/',
            image:'password-generator.png'
        },
        {
            name: 'Gym Buddy',
            description: 'This page is designed as new site for a local Gym. It has features allowing members to select membership plans, and trainers directly on the site.',
            url: 'https://gym--buddy.herokuapp.com//',
            github:'https://github.com/Wizzle13/gym-ecommerce/',
            image:'gym-buddy.png'
        },
        {
            name: 'The Coders Blog',
            description: 'A simple blog site',
            url: 'https://the-coders-blog.herokuapp.com',
            github:' https://github.com/wizzle13/The-Coders-blog/',
            image:'codersblog.jpg'
        },
        {
            name: 'PokeBook',
            description: 'A new social media site for Pokemon lovers, where you can connect with other Pokemon lovers and share messages.',
            url: 'https://the-poke-book.herokuapp.com',
            github:'https://github.com/Wizzle13/pokebook',
            image:'pokebook.jpg'
        },
        {
            name: 'Horiseon',
            description: 'Horiseon wished for their site to follow accessibility standards and to be optimized for searh engines.',
            url: 'https://wizzle13.github.io/horiseon/',
            github:'https://github.com/wizzle13/horiseon',
            image:'horiseon.jpg'
        },
        {
            name: 'Run Buddy',
            description: 'Find your Run Buddy here. A mock website to offer running and training services. It was used as pratice for learning HTML and CSS.',
            url: 'https://wizzle13.github.io/run-buddy/',
            github:'https://github.com/wizzle13/run-buddy/',
            image:'run-buddy.jpg'
        }
        
    ];

    const toggleModal = (projects, i) => {
        setProject({...projects, index: i});
        setIsModalOpen(!isModalOpen);
      }
    
    return (
        <section>
            <div>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
                <div className='flex-row'>
                    {projects.map((projects, i) => (
                    <img
                        src={require(`../assets/images/${projects.image}`)}
                        alt={projects.name}
                        className='img-thumbnail mx-1'
                        onClick={() => toggleModal(projects, i)}
                        key={projects.name}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;