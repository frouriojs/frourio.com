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
        'reference/validation'
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      collapsed: false,
      items: [
        'guide/entrypoint',
        'guide/authentication',
        {
          'Database (ORM)': ['guide/orm/prisma', 'guide/orm/typeorm'],
        },
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
    'tutorials/introduction',
    {
      Controller: [
        'tutorials/controller/create-controller',
        'tutorials/controller/get-tasks',
        'tutorials/controller/get-task-by-id',
        'tutorials/controller/post-tasks',
        'tutorials/controller/posting-formdata',
      ],
      Hooks: [
        'tutorials/hooks/lifecycle',
        'tutorials/hooks/minimum-hooks',
        'tutorials/hooks/directory-level-hooks',
        'tutorials/hooks/controller-level-hooks',
      ],
      Validation: [
        'tutorials/validation/path-parameter',
        'tutorials/validation/url-query',
        'tutorials/validation/json-body',
        'tutorials/validation/custom-validation',
      ],
    },
  ],
}
