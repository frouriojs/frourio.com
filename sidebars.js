module.exports = {
  docs: [
    'about',
    {
      type: 'category',
      label: 'リファレンス',
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
        'reference/validation',
        'reference/cli',
      ],
    },
    {
      type: 'category',
      label: 'ガイド',
      collapsed: false,
      link: { type: 'doc', id: 'guide/index' },
      items: [
        'guide/entrypoint',
        'guide/authentication',
        'guide/cors-helmet',
        'guide/error-handling',
        'guide/dependency-injection',
        { 内部リンクへの型付与: ['guide/pathpida/with-nextjs', 'guide/pathpida/with-nuxtjs'] },
        {
          'デプロイ (CI/CD)': [
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
