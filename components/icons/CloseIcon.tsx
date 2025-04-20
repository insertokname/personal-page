import React from 'react';
import IconProps from './IconProps';

export default class CloseIcon extends React.Component<IconProps> {
  render() {
    return <svg
      className={this.props.className}
      height={`${this.props.size ?? 20}px`}
      width={`${this.props.size ?? 20}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="var(--color-gruvbox-fg)">
      <path
        d="M0 0h24v24H0z"
        fill="none"
      />
      <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>

  }
}