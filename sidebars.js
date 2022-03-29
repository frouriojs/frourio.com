module.exports = {
  docs: [
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
    'tutorial/introduction',
    {
      Controller: [
        'tutorial/controller/create-controller',
        'tutorial/controller/get-tasks',
        'tutorial/controller/get-task-by-id',
        'tutorial/controller/post-tasks',
        'tutorial/controller/posting-formdata',
      ],
      Hooks: [
        'tutorial/hooks/lifecycle',
        'tutorial/hooks/minimum-hooks',
        'tutorial/hooks/directory-level-hooks',
        'tutorial/hooks/controller-level-hooks',
      ],
      Validation: [
        'tutorial/validation/path-parameter',
        'tutorial/validation/url-query',
        'tutorial/validation/json-body',
        'tutorial/validation/custom-validation',
      ],
    },
  ]
}
