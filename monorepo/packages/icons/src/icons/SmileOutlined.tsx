// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SmileOutlinedSvg from '@organize/asn/lib/asn/SmileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmileOutlinedSvg} />;

SmileOutlined.displayName = 'SmileOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SmileOutlined);