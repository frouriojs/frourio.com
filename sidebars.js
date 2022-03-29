module.exports = {
  docs: [
    'about',
    { Installation: ['installation/gui', 'installation/cui'] },
    'entrypoint',
    'authentication',
    {
      'O/R mapping tool': ['orm/prisma', 'orm/typeorm'],
    },
    {
      'CI/CD': ['deployments/ci', 'deployments/client', 'deployments/server']
    },
    'dependency-injection',
    {
      Advanced: ['advanced/error-handling', 'advanced/cors-helmet', 'advanced/performance'],
      'Typed pages path': ['pathpida/with-nextjs', 'pathpida/with-nuxtjs'],
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
  ]
}
