import styles from "./TableInput.module.scss";
import * as cx from "classnames";

export default function TableInput({
  name,
  value,
  onChange,
  placeholder = "",
}) {
  const classTableInput = cx(styles.TableInput, {
    [styles.TableInput_error]: value === "" && !placeholder,
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
