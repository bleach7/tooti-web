import classNames from "classnames";
import { IContainer } from "./Container.interface";

export const Container = ({ children, className, ...props }: IContainer) => {
  return (
    <div
      className={classNames("mx-auto max-w-[377px] px-[25px]", className)}
      {...props}
    >
      {children}
    </div>
  );
};
