import React from 'react';

const Apis = () => {

    const query = `{
       projectCollection {
          items {
             name
             href
             img {
                url
             }
             section
             lightboxCollection {
                items {
                   url
                }
             }
          }
       }
    }`

    window.fetch("https://graphql.contentful.com/content/v1/spaces/s80bj3lhgmoj?access_token=ABIoJPTjbVtx3lsnXu_0CG1_3d0MFRSHqh8UftRuWKw", {
       method: "POST",
       headers: {
          "Content-Type": "application/json", 
       },
       body: JSON.stringify({query}),
    })
    .then(response => response.json())

    // .then(json => {
    //       this.setState({
    //          projects: json.data.projectCollection.items
    //       });
    //    },
    //    (error) => {
    //       this.setState({
    //          projects: null,
    //       });
    //    }
    // )
      
   

   return (

      console.log(true)
     
   );
}

export default Apis;