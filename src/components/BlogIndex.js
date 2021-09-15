import React from 'react';
import {Consumer} from './Context';
import BlogIndexThumbnail from './BlogIndexThumbnail';
// import Apis from './Apis';
// import * as contentful from 'contentful'

const BlogIndex = ({match}) => {

   // const title = match.path.replace("/", "");

   return (

      <Consumer>
         {({props}) => (
           
            <div className="blog-index">  

               <h1>Latest news</h1> 

               <BlogIndexThumbnail />
               <BlogIndexThumbnail />
               <BlogIndexThumbnail />
               <BlogIndexThumbnail />
               <BlogIndexThumbnail />
               <BlogIndexThumbnail />

            </div>

         )}
      </Consumer>
   );
}

export default BlogIndex;