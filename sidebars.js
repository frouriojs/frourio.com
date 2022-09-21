module.exports = {
  docs: [
    'about',
    {
      type: 'category',
      label: 'リファレンス',
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
        'reference/cli',
      ],
    },
    {
      type: 'category',
      label: 'ガイド',
      collapsed: false,
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
    'tutorials/welcome',
    'tutorials/why-frourio',
    'tutorials/preparation',
    'tutorials/aspida',
    'tutorials/frourio',
    'tutorials/all-done',
  ],
};
