const StatusCellRenderer = (props) => {
  const { data } = props;
  if (data.status == 1) return <>Active</>;
  else if (data.status == 2) return <>Deactive</>;
  else return <>Pending To Select Status</>;
};

export default StatusCellRenderer;
