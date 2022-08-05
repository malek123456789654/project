import React from "react";
import { useSelector } from "react-redux";
import Clienthandler from "./Clienthandler";
import React from "react";

const Admin = () => {
  const { clients } = useSelector((state) => state.authreducers);
  return (
    <div className="admin">
    
      {users.map(
        (client) =>
          client.role !== "admin" && (
            <Clienthandler key={client._id} client={client} />
          )
      )}
    </div>
  );
};

export default Admin;
