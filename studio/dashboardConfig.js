export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61ef7c95b3854e825c006e76',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n84koq3t',
                  apiId: 'e1ca7aca-f3c6-4fd6-aa57-a7ac5ad9efde'
                },
                {
                  buildHookId: '61ef7c96f0521d79b4b3629f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c2kjx3zv',
                  apiId: '9f4b1f01-7eeb-41e4-9043-a79b51a71a3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aryanbagheri01/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c2kjx3zv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
