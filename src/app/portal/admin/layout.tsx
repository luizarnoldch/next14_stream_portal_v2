type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      AdminLayout
      {children}
    </div>
  );
};

export default AdminLayout;
