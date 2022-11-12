import React from "react";
import classNames from "classnames";

interface iconProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "fixed" | "copy" | "close";
  size?: number;
}

const svgMap = {
  fixed: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1877"
    >
      <path
        d="M334.72 612.16L127.36 404.736l85.12-85.184L390.016 391.04l275.968-214.4-72.32-72.32L678.912 19.2l82.944 82.88 0.192-0.128L928 267.84l-0.192 0.256 82.944 82.944-85.12 85.184-72.32-72.256L638.848 640l71.488 177.408-85.12 85.184-207.488-207.36-255.36 255.296-82.944-82.944 255.36-255.36z"
        fill="#262626"
        p-id="1878"
      ></path>
    </svg>
  ),
  copy: (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="copy"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
    </svg>
  ),
  close: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2799"
    >
      <path
        d="M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z"
        p-id="2800"
      ></path>
    </svg>
  ),
};

const Icon = (props: iconProps) => {
  const { className, type = "fixed", size = 32, ...others } = props;
  const cls = classNames({
    "uikit-icon": true,
    [className as string]: !!className,
  });
  const style: React.CSSProperties = {...props.style};
  if (size) {
    style.width = size;
    style.height = size;
  }
  if (type in svgMap) {
    const svg = svgMap[type];
    return React.cloneElement(svg, {
      ...others,
      className: cls,
      style,
    });
  }
  return <i {...others} className={cls}></i>;
};

export default Icon;
