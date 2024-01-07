import { label } from "./styles.css.ts";

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;
  return <label className={`${className} ${label}`} {...restProps} />;
}
