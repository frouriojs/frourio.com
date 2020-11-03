module.exports = {
  someSidebar: [
    'introduction',
    {
      Installation: ['Installation/gui', 'Installation/cui'],
      Entrypoint: ['Entrypoint/server'],
      Controller: ['Controller/get-tasks', 'Controller/get-task-by-id', 'Controller/post-tasks', 'Controller/posting-formdata'],
      Hooks: ['Hooks/lifecycle', 'Hooks/directory-level-hooks', 'Hooks/controller-level-hooks', 'Hooks/additional-request'],
      Validation: ['Validation/path-parameter', 'Validation/url-query', 'Validation/json-body', 'Validation/custom-validation'],
      'O/R mapping tool': ['ORM/prisma', 'ORM/typeorm'],
      Advanced: ['Advanced/error-handling', 'Advanced/cors-helmet', 'Advanced/performance']
    }
  ],
};
