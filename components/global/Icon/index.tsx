import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomIcon, {SvgName} from './CustomIcon';
import React, { useMemo } from 'react';

export type IconKind = 'solid' | 'regular' | 'light' | 'duo' | 'brand';

type Prop = {
  identity: ['fa', IconName] | ['custom', SvgName]; // [library, name]
  kind?: IconKind;
  className?: string;
};

export default function Icon({ identity, kind, className = '' }: Prop) {
  // import {IconPrefix} from '@fortawesome/fontawesome-svg-core'
  const faStyle = useMemo(() => {
    if (kind === 'solid') {
      return 'fas';
    } else if (kind === 'regular') {
      return 'far';
    } else if (kind === 'light') {
      return 'fal';
    } else if (kind === 'duo') {
      return 'fad';
    } else {
      // (kind === 'brand')
      return 'fab';
    }
  }, [kind]);

  return (
    <div className={className || 'w-4 h-4'}>
      {identity[0] === 'fa' && (
        <div className={'w-full h-full'}>
          <FontAwesomeIcon icon={[faStyle, identity[1]]} className={'w-full h-full'}/>
        </div>
      )}
      {identity[0] === 'custom' && (
        <CustomIcon name={identity[1]} kind={kind} />
      )}
    </div>
  );
}
