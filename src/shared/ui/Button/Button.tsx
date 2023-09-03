import React from 'react'
import'./button.css'

type Props = {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
};

export function Button({ onClick, text, disabled }: Props) {
  return <button className="btn" onClick={onClick} disabled={disabled}>{text}</button>;
}
