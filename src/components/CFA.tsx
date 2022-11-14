import React from 'react';
// import CfaMain from 'create-frourio-app/lib/components/main'

const CFA: React.VFC = () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const CfaMain = require('create-frourio-app/lib/components/main').default;
    return (
      <div style={{ overflowX: 'auto', paddingBottom: '16px' }} id="cfa-wrapper">
        <CfaMain />
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
};

export default CFA;
