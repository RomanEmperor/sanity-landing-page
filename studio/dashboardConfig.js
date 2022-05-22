export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '628a3d6d725d1e60c4ae5b28',
                  title: 'Sanity Studio',
                  name: 'sanity-landing-page-studio-ss539rms',
                  apiId: '665867ff-4a46-45e5-9f19-01915322cb4b'
                },
                {
                  buildHookId: '628a3d6e0c8e946408fda47b',
                  title: 'Landing pages Website',
                  name: 'sanity-landing-page-web-4iweohkh',
                  apiId: '260c1bf7-b35d-4194-acbb-074075864989'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RomanEmperor/sanity-landing-page',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-landing-page-web-4iweohkh.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
