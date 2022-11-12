import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Icon from "../Icon";

import "./index.scss";

interface tagProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  closable?: boolean;
  color?: string;
  visible?: boolean;
  onClose?: Function;
}

const Tag = (props: tagProps) => {
  const {
    className,
    children,
    closable,
    color,
    onClose,
    ...others
  } = props;
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if ("visible" in props && typeof props.visible !== 'undefined') {
      setVisible(props.visible);
    }
  }, [props.visible])

  const customColor = color && color.match(/^#/);

  const cls = classNames({
    "uikit-tag": true,
    [`uikit-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  });

  const style: React.CSSProperties = { ...props.style };
  if (customColor) {
    style.backgroundColor = color;
    style.color = "#fff";
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e);
    if (e.defaultPrevented) {
      return;
    }
    if (!("visible" in props)) {
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }
  return (
    <span {...others} className={cls} style={style}>
      {children}
      {closable ? (
        <Icon
          type="close"
          size={16}
          style={{ verticalAlign: "text-top" }}
          onClick={handleClick}
        />
      ) : null}
    </span>
  );
};

export default Tag;
