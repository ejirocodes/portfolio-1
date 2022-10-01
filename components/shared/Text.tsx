import * as React from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

/**
* See default below. TS will treat the rendered element as a
span and provide typings accordingly
*/
export const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: TextProps<C>) => {
  const TextComponent = as || "span";

  return <TextComponent {...restProps}>{children}</TextComponent>;
};
