const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators



  return graphql(`
  {
  allWpSkate {
    nodes {
      Skate {
        fieldGroupName
        price
        title
        image {
          sourceUrl
        }
      }
      id
      content
      slug
    }
  }
}
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    const postTemplate = path.resolve('src/templates/product.js')
    res.data.allWpSkate.nodes.forEach(({ slug }) => {
      createPage({
        path: `/${slug}`,
        component: postTemplate,
        context:{
          slug: slug ,
        }
      })
    })
  })
}
