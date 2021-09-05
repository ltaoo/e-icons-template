// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SmileFilledSvg from '@organize/asn/lib/asn/SmileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmileFilledSvg} />;

SmileFilled.displayName = 'SmileFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SmileFilled);