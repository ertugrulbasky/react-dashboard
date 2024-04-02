import React from "react";
import {TableOutlined,BarChartOutlined} from "@ant-design/icons";

const useMenuItems = () => {
  const menuItems = [
    {
      key: "reports",
      icon: React.createElement(BarChartOutlined),
      label: "Raporlar",
    },
    {
      key: "users",
      icon: React.createElement(TableOutlined),
      label: `Kullanıcılar`,
    },
  ];

  return { menuItems };
};

export default useMenuItems;
