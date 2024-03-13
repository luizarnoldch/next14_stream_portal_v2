type Props = {
  params: {
    user_id: string;
  };
};

const AdminProfile = ({ params }: Props) => {
  return <div>AdminProfile {params.user_id}</div>;
};

export default AdminProfile;
