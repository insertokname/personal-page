import React from 'react';
import IconProps from './IconProps';

export default class PROIcon extends React.Component<IconProps> {
    render() {
        return <img
            className={this.props.className}
            src={"/pro-icon.webp"}
            alt="pro icon"
            style={{
                width: `${this.props.size ?? 20}px`,
                height: `${this.props.size ?? 20}px`
            }}
        />;
    }
}