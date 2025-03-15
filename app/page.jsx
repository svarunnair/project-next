'use client'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './componets/productCard'
import { useState, useRef } from "react";

export default function OTPInput() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) { // Allow only single-digit numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        // Move to the next input if typing a number and not on the last input
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // If backspace is pressed on an empty box, focus the previous box
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{
            color: "black",
            width: 50,
            height: 50,
            textAlign: "center",
            fontSize: "20px",
          }}
          type="text"
          placeholder="-"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="border p-2 rounded-md"
        />
      ))}
    </div>
  );
}
