export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e4a7e88f1e98474f92af15a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-7efk3gwa',
                  apiId: 'c831403f-e6f3-4cd1-8031-450e89097516'
                },
                {
                  buildHookId: '5e4a7e897e948d3eaaad8f6b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-it5ys8jr',
                  apiId: '541218c3-8ee2-4ea9-9832-c1913afb4a96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eirikro/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-it5ys8jr.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
