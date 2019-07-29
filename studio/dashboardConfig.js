export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d3ea9ea21d3585efda9f3b5',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-yp8y3146',
                  apiId: 'bb5b8ae9-e5cc-422c-8c75-126a4c8d8615'
                },
                {
                  buildHookId: '5d3ea9ea6048e2dee3f9d1f2',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-knahhkws',
                  apiId: '3ac9e31d-5b7c-45f2-b5b8-54941e5d90b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simjes/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-knahhkws.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
