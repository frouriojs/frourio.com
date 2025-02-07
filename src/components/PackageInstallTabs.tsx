import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

export type Props = {
  deps?: string[];
  devDeps?: string[];
  before?: string[];
  after?: string[];
};

const PackageInstallTabs: React.VFC<Props> = ({ deps, devDeps, before, after }) => {
  const getCommands = (command: 'npm' | 'yarn'): string[] => [
    ...(before ?? []),
    ...(deps ? [`${command} ${getSubCommand(command)} ${deps.join(' ')}`] : []),
    ...(devDeps ? [`${command} ${getSubCommand(command)} -D ${devDeps.join(' ')}`] : []),
    ...(after ?? []),
  ];

  return (
    <Tabs
      groupId="node-package-manager"
      defaultValue="npm"
      values={[
        { label: 'npm', value: 'npm' },
        { label: 'yarn', value: 'yarn' },
      ]}
    >
      <TabItem value="npm">
        <CodeBlock language="sh">{getCommands('npm').join('\n')}</CodeBlock>
      </TabItem>
      <TabItem value="yarn">
        <CodeBlock language="sh">{getCommands('yarn').join('\n')}</CodeBlock>
      </TabItem>
    </Tabs>
  );
};

export default PackageInstallTabs;

const getSubCommand = (command: 'npm' | 'yarn'): string => {
  switch (command) {
    case 'npm':
      return 'install';
    case 'yarn':
      return 'add';
  }
};
