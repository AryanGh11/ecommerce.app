import { Component, ReactNode } from "react";
import { IconComponentProps } from "../index.interfaces";

export class MenuCloseIcon extends Component<IconComponentProps> {
  render(): ReactNode {
    const { className } = this.props;

    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <g id="Menu / Close_MD">
          <path
            id="Vector"
            d="M18 18L6 6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M18 6L6 18"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }
}
