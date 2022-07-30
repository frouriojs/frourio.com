module.exports = {
  docs: [
    'about',
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        {
          'create-frourio-app': ['reference/cfa/gui', 'reference/cfa/cui'],
        },
        'reference/aspida',
        'reference/controller',
        'reference/hooks',
        'reference/additionalRequest',
        'reference/validation',
        'reference/cli'
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      collapsed: false,
      items: [
        'guide/entrypoint',
        'guide/authentication',
        'guide/cors-helmet',
        'guide/error-handling',
        'guide/dependency-injection',
        { 'Typed Pages Path': ['guide/pathpida/with-nextjs', 'guide/pathpida/with-nuxtjs'] },
        {
          'Deployments (CI/CD)': ['guide/deployments/ci', 'guide/deployments/client', 'guide/deployments/server'],
        },
        'guide/performance',
      ],
    },
  ],
  tutorial: [
    'tutorials/welcome',
    'tutorials/why-frourio',
    'tutorials/preparation',
    'tutorials/aspida',
    'tutorials/frourio',
    'tutorials/all-done',
  ],
};
