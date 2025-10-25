import React from 'react';
import IconProps from './IconProps';

export default class PbinfoIcon extends React.Component<IconProps> {
    render() {
        return <img
            className={this.props.className}
            src={"/pbinfo-icon.png"}
            alt="pbinfo icon"
            style={{
                width: `${this.props.size ?? 20}px`,
                height: `${this.props.size ?? 20}px`
            }}
        />;
    }
}