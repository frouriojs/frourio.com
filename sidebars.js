module.exports = {
  docs: [
    'about',
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      link: { type: 'doc', id: 'reference/index' },
      items: [
        {
          'create-frourio-app': ['reference/cfa/gui', 'reference/cfa/cui'],
        },
        'reference/aspida',
        'reference/controller',
        'reference/hooks',
        'reference/additionalRequest',
        {
          Validation: ['reference/validation/automatic', 'reference/validation/class-validator'],
        },
        'reference/cli',
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      collapsed: false,
      link: { type: 'doc', id: 'guide/index' },
      items: [
        'guide/entrypoint',
        'guide/authentication',
        'guide/cors-helmet',
        'guide/error-handling',
        'guide/dependency-injection',
        { 'Typed Pages Path': ['guide/pathpida/with-nextjs', 'guide/pathpida/with-nuxtjs'] },
        {
          'Deployments (CI/CD)': [
            'guide/deployments/ci',
            'guide/deployments/client',
            'guide/deployments/server',
          ],
        },
        'guide/performance',
      ],
    },
  ],
  tutorial: [
    'tutorial/welcome',
    'tutorial/why-frourio',
    'tutorial/preparation',
    'tutorial/aspida',
    'tutorial/frourio',
    'tutorial/all-done',
  ],
};
