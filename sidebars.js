module.exports = {
  docs: [
    'about',
    {
      Reference: [
        {
          'create-frourio-app': ['reference/cfa/gui', 'reference/cfa/cui'],
        },
        'reference/aspida',
        'reference/controller',
        'reference/hooks',
      ],
      Guide: [
        'guide/entrypoint',
        'guide/authentication',
        {
          'O/R mapping tool': ['guide/orm/prisma', 'guide/orm/typeorm'],
        },
        {
          'CI/CD': ['guide/deployments/ci', 'guide/deployments/client', 'guide/deployments/server'],
        },
        'guide/dependency-injection',
        'guide/error-handling',
        'guide/cors-helmet',
        'guide/performance',
        { 'Typed pages path': ['guide/pathpida/with-nextjs', 'guide/pathpida/with-nuxtjs'] },
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
