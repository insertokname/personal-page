import React from 'react';
import IconProps from './IconProps';

export default class ReturnIcon extends React.Component<IconProps> {
  render() {
    return <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 24 24"
      className={this.props.className}
      height={`${this.props.size ?? 20}px`}
      width={`${this.props.size ?? 20}px`}
    >
      <path
        fill="var(--color-gruvbox-blue)"
        d="M14.1,4c1.6,0,3,.5,4.2,1.6s1.7,2.4,1.7,3.9-.6,2.9-1.7,3.9-2.5,1.6-4.2,1.6h-6.3l2.6,2.6-1.4,1.4-5-5,5-5,1.4,1.4-2.6,2.6h6.3c1.1,0,2-.3,2.7-1,.8-.7,1.2-1.5,1.2-2.5s-.4-1.8-1.2-2.5-1.7-1-2.7-1h-7.1v-2h7.1Z" />
    </svg>
  }
}