import { button } from "./styles.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return (
    <button
      className={`${className ? className : ""} ${button}`}
      {...restProps}
    />
  );
}
