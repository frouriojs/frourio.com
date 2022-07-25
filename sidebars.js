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
      'CI/CD': ['deployments/ci', 'deployments/client', 'deployments/server'],
    },
    'dependency-injection',
    {
      Advanced: ['advanced/error-handling', 'advanced/cors-helmet', 'advanced/performance'],
      'Typed pages path': ['pathpida/with-nextjs', 'pathpida/with-nuxtjs'],
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
