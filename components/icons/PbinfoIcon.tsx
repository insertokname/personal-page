import React from 'react';
import IconProps from './IconProps';

export default class PbinfoIcon extends React.Component<IconProps> {
    render() {
        return <img
            className={this.props.className}
            height={`${this.props.size ?? 20}px`}
            width={`${this.props.size ?? 20}px`}
            src={"/pbinfo-icon.png"}
        />;
    }
}