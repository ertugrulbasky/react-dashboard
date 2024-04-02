import React from "react";
import { LogoutOutlined } from "@ant-design/icons";

const userSettingsMenuItems = () => {
  const settingsMenuItems = [LogoutOutlined].map((icon, index) => ({
    key: "logout",
    icon: React.createElement(icon),
    label: `Çıkış Yap`,
  }));
  return { settingsMenuItems };
};

export default userSettingsMenuItems;
