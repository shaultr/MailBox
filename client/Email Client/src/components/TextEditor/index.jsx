import React, { useState } from 'react';
import styles from './style.module.css';
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoColorFill } from "react-icons/io5";
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from "react-icons/fa";

export default function TextEditor() {
  const [chooseColor, setChooseColor] = useState(false);
  const [classNameTextColor, setClassNameTextColor] = useState('k');
  
  console.log(classNameTextColor);
  
  const colors = ["black", "red", "blue", "green", "yellow", "purple", "orange", "pink", "gray"];
  return (
    <div className={styles.container} >
      <textarea className={classNameTextColor} />
      <div className={styles.textTools}>
        <div className={styles.textEditorToolbar}>
          <div className={styles.tool}>
            <FaBold />
          </div>
          <div className={styles.tool}>
            <FaItalic />
          </div>
          <div className={styles.tool}>
            <FaUnderline />
          </div>
          {chooseColor && (
            <div className={styles.chooseColor} >
              {colors.map((color, index) => (
                <div
                key={index}
                onClick={() => setClassNameTextColor(color)}
                className={styles.color}
                style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          )}
          <div className={styles.tool} onClick={() => setChooseColor(!chooseColor)}>
            <IoColorFill />
          </div>
        </div>
        <div className={styles.textAlignmentToolbar}>
          <div className={styles.tool}>
            <FaAlignLeft />
          </div>
          <div className={styles.tool}>
            <FaAlignCenter />
          </div>
          <div className={styles.tool}>
            <FaAlignRight />
          </div>
          <div className={styles.tool}>
            <FaAlignJustify />
          </div>
        </div>
      </div>
    </div>
  );
}
