type Props = {
  params: {
    stream_id: string;
  };
};

const AdminStreamDetail = ({ params }: Props) => {
  return <div>AdminStreamDetail {params.stream_id}</div>;
};

export default AdminStreamDetail;
