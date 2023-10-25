import React, { FC } from "react";

interface IconProps {
  icon: React.ReactElement;
}

const Icon: FC<IconProps> = ({ icon }) => {
  return <span>{icon}</span>;
};

export { Icon };
