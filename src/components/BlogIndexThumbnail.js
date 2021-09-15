import React from 'react';
import {Consumer} from './Context';

const BlogIndexThumbnail = ({match}) => {

   // const title = match.path.replace("/", "");

   return (

      <Consumer>
         {({projects}) => (
           
            <div className="primary-content">
               <div className="hentry">
                  <h2>
                     <a href="#" className="entry-title">Five Important Wordpress Tips For Beginners</a>
                  </h2>
                  <img src="/perch/resources/wordpress-teaser.jpg" alt="Five Important Wordpress Tips For Beginners" />
                  <p className="entry-published date">05 August 2020</p>
                  <div className="description entry-summary">
                     <p>Wordpress is now powering nearly 35% of the web so its a good idea to keep up to date with best practises. There are many things to bear in mind when planning out your project but here are a few tips to making sure your site performs as best as possible.</p>
                  </div>
               </div>
            </div>
         )}
      </Consumer>
   );
}

export default BlogIndexThumbnail;