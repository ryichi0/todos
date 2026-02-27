import React from 'react'
import { Link } from 'react-router'

const ButtonStyle = {
  sm: {
    primary: {
      backgroundColor: "var(--primary-color)",
      color: "#fff",
      padding: '6px 14px',
      fontSize: "14px",
    },
    secondary: {
      backgroundColor: "#fff",
      color: "var(--primary-color)",
      padding: '6px 14px',
      fontSize: "14px",
    }
  },
  lg: {
    primary: {
      backgroundColor: "var(--primary-color)",
      color: "#fff",
      padding: '16px',
      fontSize: "16px",
    },
    secondary: {
      backgroundColor: "#fff",
      color: "var(--primary-color)",
      padding: '16px',
      fontSize: "16px",
    }
  },
}

export function PrimaryButton({ children, url, onClick, style, size }) {
  return (
    <Link
      style={ButtonStyle[size][style]}
      to={url}
      className="capitalize font-bold shadow-[0_10px_20px_rgba(37,85,255,.20)] rounded-xl relative flex justify-center items-center"
      onClick={onClick}>
      {children}
    </Link>

  )
}
