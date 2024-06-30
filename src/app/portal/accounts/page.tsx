import React from "react";
import AccountsTable from "./_components/AccountsTable";

type Props = {};

const AccountsPortal = (props: Props) => {
  return (
    <aside className="w-full p-6 min-h-dvh pt-16">
      <div className="max-w-3xl mx-auto pt-4 lg:container">
        <h1>Accounts</h1>
        <div className="w-full h-full">
          <AccountsTable />
        </div>
      </div>
    </aside>
  );
};

export default AccountsPortal;
