const path = require('path');


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    return graphql(`
    {
        allWpSkate {
            nodes {
              Skate {
                brand
                content
                price
                title
                image {
                  sourceUrl
                }
              }
              id
              slug
              title
            }
          }
          allWpSurf {
            nodes{
            surf {
              brand
              content
              price
              title
              image {
                sourceUrl
              }
            }
            id
            slug
            title
            }
          }
          allWpSnow {
            nodes{
            snow {
              brand
              content
              title
              price
              image {
                sourceUrl
              }
            }
            id
            slug
            title
          }
        }
    }
        
    }
    `).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
        }
    
    
    const surfTemplate = path.resolve(`./src/templates/productSurf.js`)
    const snowTemplate = path.resolve(`./src/templates/productSnow.js`)
    const skateTemplate = path.resolve('./src/templates/productSkate.js')
    result.data.allWpSkate.nodes.forEach(({slug}) => {
      
  
      createPage({
        path: `/product/${slug}/`,
          component: skateTemplate,
          context: {
              slug: slug,
          },
      })
    })

    result.data.allWpSurf.nodes.forEach(({id}) => {
      createPage({
        path: `/product/${id}/`,
          component: surfTemplate,
          context: {
              id: id,
          },
      })
    })
  
    result.data.allWpSnow.nodes.forEach(({title}) => {
      createPage ({
        component: snowTemplate,
        path: `/blog/${title}`,
        context: {
          title: title,
        }
      })
    })
  })
}
