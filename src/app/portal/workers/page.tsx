import React from "react";
import WorkersTable from "./_componentes/WorkersTable";

type Props = {};

const WorkersPortal = (props: Props) => {
  return (
    <aside className="w-full p-6 min-h-dvh pt-16">
      <div className="max-w-3xl mx-auto pt-4 lg:container">
        <h1>Workers</h1>
        <div className="w-full h-full">
          <WorkersTable />
        </div>
      </div>
    </aside>
  );
};

export default WorkersPortal;
