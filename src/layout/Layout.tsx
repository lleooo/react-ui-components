import {ReactElement} from "react";

type Props = {
  children: ReactElement[] | ReactElement;
};

const Layout = ({children}: Props) => {
  return <div className="w-full flex">{children}</div>;
};

export default Layout;
