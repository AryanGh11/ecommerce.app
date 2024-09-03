import { Component, ReactNode } from "react";
import { IconComponentProps } from "../index.interfaces";

export class StarIcon extends Component<IconComponentProps> {
  render(): ReactNode {
    const { className } = this.props;

    return (
      <svg
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path d="M5.50002 1.41666L6.91627 4.28582L10.0834 4.74874L7.79169 6.98082L8.33252 10.1342L5.50002 8.64457L2.66752 10.1342L3.20835 6.98082L0.916687 4.74874L4.08377 4.28582L5.50002 1.41666Z" />
      </svg>
    );
  }
}
