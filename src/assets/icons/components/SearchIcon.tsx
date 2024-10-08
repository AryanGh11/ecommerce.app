import { Component, ReactNode } from "react";
import { IconComponentProps } from "../index.interfaces";

export class SearchIcon extends Component<IconComponentProps> {
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
          d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48478 3 2.50001 5.98477 2.50001 9.66667C2.50001 13.3486 5.48478 16.3333 9.16667 16.3333Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 18L13.875 14.375"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
