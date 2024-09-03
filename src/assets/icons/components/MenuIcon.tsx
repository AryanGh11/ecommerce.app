import { Component, ReactNode } from "react";
import { IconComponentProps } from "../index.interfaces";

export class MenuIcon extends Component<IconComponentProps> {
  render(): ReactNode {
    const { className } = this.props;

    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M2.50001 10.5H17.5"
          strokeWidth="1.4375"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.50001 5.5H13.3333"
          strokeWidth="1.4375"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.50001 15.5H10"
          strokeWidth="1.4375"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
