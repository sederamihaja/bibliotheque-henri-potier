export default function Input(props) {
  return (
    <input
      type={props.type}
      onClick={props.onClick}
      onChange={props.onChange}
      className={props.className}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}