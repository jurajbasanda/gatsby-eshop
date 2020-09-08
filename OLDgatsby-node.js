const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators



  return graphql(`
  {allWp {
    nodes {
      children {
        ... on WpSkate {
          Skate{
            title
            content
            brand
            price
            image{
              sourceUrl
            }
          }
          id
          content
          slug
        }
        ...on WpSnow{
          snow{
            title
            content
            brand
            price
            image{
              sourceUrl
            }
          }
          id
          content
          slug
        }
        ... on WpSurf{
          surf{
            title
            content
            brand
            price
            image{
              sourceUrl
            }
          }
          id
          content
          slug
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
