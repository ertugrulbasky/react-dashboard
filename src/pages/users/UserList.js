import React, { useState } from "react";
import { users } from "../../constants/users";
import CreateUser from "./CreateUser";
import { userTableColumns } from "../../constants/tableColumns";
import "./styles/userList.scss";
import { DataTable,CustomButton } from "../../components";


const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUsersList] = useState(users);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <CreateUser
        users={users}
        setUsersList={setUsersList}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <CustomButton onClick={openModal} className="addUserButton " type="primary" text="Kullanıcı Ekle"/>
   
      <DataTable columns={userTableColumns} dataSource={userList} />
    </>
  );
};
export default UserList;
