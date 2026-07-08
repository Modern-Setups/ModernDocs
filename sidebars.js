// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  modernDuelsSidebar: [
    {
      type: 'doc',
      id: 'modernduels/intro',
      label: '🚀 Introduction',
    },
    {
      type: 'category',
      label: '🏁 Getting Started',
      collapsed: false,
      items: [
        'modernduels/getting-started/installation',
        'modernduels/getting-started/arena-setup',
      ],
    },
    {
      type: 'category',
      label: '🕹️ Core Features',
      collapsed: false,
      items: [
        'modernduels/features/kit-editor',
        'modernduels/features/matchmaking',
        'modernduels/features/parties',
        'modernduels/features/leaderboards',
      ],
    },
    {
      type: 'category',
      label: '🔌 Integrations',
      collapsed: false,
      items: [
        'modernduels/integration/hooks',
      ],
    },
    {
      type: 'category',
      label: '📜 Reference Manual',
      collapsed: false,
      items: [
        'modernduels/reference/commands',
        'modernduels/reference/configurations',
      ],
    },
  ],
};

module.exports = sidebars;
