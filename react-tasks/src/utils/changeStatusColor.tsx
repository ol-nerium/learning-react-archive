export default function changeStatusColor(props) {
  const onlineColor = "green";
  const offlineColor = "red";
  return props.status ? onlineColor : offlineColor;
}
