import { Component, ReactNode } from "react";
import { withTranslation } from "react-i18next";
import { SkeletonProps, SkeletonState } from "./index.interfaces";

class Skeleton extends Component<SkeletonProps, SkeletonState> {
  render(): ReactNode {
    const { numberOfSkeletons, className } = this.props;

    const skeletons = Array.from(
      { length: numberOfSkeletons ?? 10 },
      (_, i) => (
        <div
          key={`skeleton-${i}`}
          className={`skeleton w-full h-10 bg-on-background opacity-5 ${className}`}
        />
      )
    );

    return skeletons;
  }
}

export default withTranslation()(Skeleton);
