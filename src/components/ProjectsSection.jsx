import { useState } from 'react';
import React from 'react'

import { sections } from '../projects.js';

import styles from './ProjectsSection.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Filtro2 = () => {

    // Estado para controlar el filtro activo
    const [activeFilter, setActiveFilter] = useState('all');


   

    // Función para filtrar las secciones
    const filteredSections = sections.filter((section) => {
        if (activeFilter === 'all') {
            return true; // Mostrar todas las secciones
        }
        return section.categories.includes(activeFilter); // Filtrar por categoría
    });

    console.log("Secciones filtradas:", filteredSections);

    return (
        <>
            <section className={styles.projects} id='projects'>

                <div className={styles.projectsButtons}>
                    <button onClick={() => setActiveFilter('all')}>All</button>
                    <button onClick={() => setActiveFilter('vanilla javascript')}>Vanilla JavaScript</button>
                    <button onClick={() => setActiveFilter('react')}>React</button>
                    <button onClick={() => setActiveFilter('astro')}>Astro</button>
                    <button onClick={() => setActiveFilter('nextjs')}>Next.js</button>
                </div>

                <div className={styles.projectWrapper}>


                    {/* Mostrar las secciones filtradas */}
                    <div className={styles.projectsContainer}>
                        {filteredSections.length > 0 ? (
                            filteredSections.map((section) => (

                                <>

                                    <div key={section.id} className={styles.projectCard}>

                                        <img className={styles.cardImg} src={section.img} alt="" />

                                        <h2 className={styles.cardTitle}>{section.title}</h2>

                                        <div className={styles.projectCardSkills}>
                                            {section.categories.map((category) => (
                                                <p>{category}</p>
                                            ))}
                                        </div>

                                        <div className={styles.projectCardButtons}>
                                            <a href={section.preview} target='_blank'>
                                                <FontAwesomeIcon icon={faEye} />
                                            </a>
                                            <a href={section.github} target='_blank'>
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>


                                    </div>

                                </>


                            ))
                        ) : (
                            <p>No hay secciones para mostrar.</p>
                        )}
                    </div>

                    <a className={styles.seeMoreButton} href="https://github.com/carlosmorenodev?tab=repositories" target='_blank'>Ver más en Github</a>
                </div>

            </section >


        </>
    )
}

export default Filtro2