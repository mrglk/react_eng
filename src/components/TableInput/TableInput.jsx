import styles from "./TableInput.module.scss";
import * as cx from "classnames";

export default function TableInput({ value, onChange }) {
  const classTableInput = cx(styles.TableInput, {
    [styles.TableInput_error]: value === "",
  });

  return (
    <input
      className={classTableInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
