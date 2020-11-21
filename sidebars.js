module.exports = {
  someSidebar: [
    'introduction',
    { Installation: ['installation/gui', 'installation/cui'] },
    'entrypoint',
    {
      Controller: ['controller/create-controller', 'controller/get-tasks', 'controller/get-task-by-id', 'controller/post-tasks', 'controller/posting-formdata'],
      Hooks: ['hooks/lifecycle', 'hooks/directory-level-hooks', 'hooks/controller-level-hooks', 'hooks/additional-request'],
      Validation: ['validation/path-parameter', 'validation/url-query', 'validation/json-body', 'validation/custom-validation'],
      'O/R mapping tool': ['orm/prisma', 'orm/typeorm'],
    },
    'deployment',
    'dependency-injection',
    {
      Advanced: ['advanced/error-handling', 'advanced/cors-helmet', 'advanced/performance']
    }
  ],
};
