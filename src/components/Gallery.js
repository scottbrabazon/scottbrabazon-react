import React from 'react';
import {Consumer} from './Context';
import Thumbnail from './Thumbnail';

const Gallery = ({match}) => {

   const title = match.path.replace("/", "");

   return (

      <Consumer>
         {({projects, actions}) => (

            <React.Fragment>
               <header>
                  <h1>{title}</h1>
               </header>
               {<div className="gallery">


                  {projects.map( (project, index) =>
                     <Thumbnail 
                        name={project.name}
                        href={project.href}
                        img={project.img.url}  
                        section={project.section}  
                        lightbox={project.lightboxCollection} 
                        key={index + 1}
                        index={index}
                        openLightbox={actions.openLightbox}
                        closeLightbox={actions.closeLightbox}
                        prevLightbox={actions.prevLightbox}
                        nextLightbox={actions.nextLightbox}
                     />
                  )}
               </div>}
            </React.Fragment>

         )}
      </Consumer>
   );
}

export default Gallery;