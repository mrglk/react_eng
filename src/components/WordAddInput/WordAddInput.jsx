import styles from "./WordAddInput.module.scss";
import * as cx from "classnames";

export default function WordAddInput({
  name,
  value,
  onChange,
  placeholder = "",
}) {
  const classTableInput = cx(styles.Input, {
    [styles.Input_error]: value === "" && !placeholder,
  });

  return (
    <input
      className={classTableInput}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
