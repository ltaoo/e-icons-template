// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SmileTwotoneSvg from '@organize/asn/lib/asn/SmileTwotone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileTwotone = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmileTwotoneSvg} />;

SmileTwotone.displayName = 'SmileTwotone';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SmileTwotone);