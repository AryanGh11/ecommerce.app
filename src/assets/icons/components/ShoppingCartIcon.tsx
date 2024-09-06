import { Component, ReactNode } from "react";
import { IconComponentProps } from "../index.interfaces";

export class ShoppingCartIcon extends Component<IconComponentProps> {
  render(): ReactNode {
    const { className } = this.props;

    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <g clipPath="url(#clip0_1063_363)">
          <path
            d="M9.5 22.5C10.0523 22.5 10.5 22.0523 10.5 21.5C10.5 20.9477 10.0523 20.5 9.5 20.5C8.94772 20.5 8.5 20.9477 8.5 21.5C8.5 22.0523 8.94772 22.5 9.5 22.5Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 22.5C21.0523 22.5 21.5 22.0523 21.5 21.5C21.5 20.9477 21.0523 20.5 20.5 20.5C19.9477 20.5 19.5 20.9477 19.5 21.5C19.5 22.0523 19.9477 22.5 20.5 22.5Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 1.5H5.5L8.18 14.89C8.27144 15.3504 8.52191 15.764 8.88755 16.0583C9.25318 16.3526 9.7107 16.509 10.18 16.5H19.9C20.3693 16.509 20.8268 16.3526 21.1925 16.0583C21.5581 15.764 21.8086 15.3504 21.9 14.89L23.5 6.5H6.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1063_363">
            <rect width="24" height="24" transform="translate(0.5 0.5)" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
