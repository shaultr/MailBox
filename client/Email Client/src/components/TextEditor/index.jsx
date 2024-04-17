import React, { useState } from 'react';
import styles from './style.module.css';
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoColorFill } from "react-icons/io5";
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from "react-icons/fa";
import Btn from '../../components/Btn';
import { GoPaperclip } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function TextEditor({setContant}) {
  const [chooseColor, setChooseColor] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState('');

  const colors = ["black", "red", "blue", "green", "yellow", "purple", "orange", "pink", "gray"];
  return (
    <div className={styles.container} >
      <div className={styles.textAreaContainer}>
      <textarea onChange={(e)=>{setContant(e.target.value)}} className={
        `${bold && styles.bold}
      ${italic && styles.italic}
      ${underline && styles.underline}
      ${textAlign === 'textRight' && styles.textRight}
      ${textAlign === 'textLeft' && styles.textLeft}
      ${textAlign === 'textCenter' && styles.textCenter}
      ${textAlign === 'textJustify'  && styles.textJustify}
      ${styles.textArea}`
    }
        style={{fontSize: '20px', color: textColor }} placeholder='Enter your text...' />
      <div className={styles.textTools}>
        <div className={styles.textEditorToolbar}>
          <div className={styles.tool} onClick={() => setBold(!bold)}>
            <FaBold />
          </div>
          <div className={styles.tool} onClick={() => setItalic(!italic)}>
            <FaItalic />
          </div>
          <div className={styles.tool} onClick={() => setUnderline(!underline)}>
            <FaUnderline />
          </div>
          {chooseColor && (
            <div className={styles.chooseColor} >
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setTextColor(color)}
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
          <div className={styles.tool} onClick={() => setTextAlign("textLeft")}>
            <FaAlignLeft />
          </div>
          <div className={styles.tool} onClick={() => setTextAlign('textCenter')}>
            <FaAlignCenter />
          </div>
          <div className={styles.tool} onClick={() => setTextAlign("textRight")}>
            <FaAlignRight />
          </div>
          <div className={styles.tool} onClick={() => setTextAlign("textJustify")}>
            <FaAlignJustify />
          </div>
        </div>
      </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.icons}>
          <button>
            <GoPaperclip />
          </button>
          <button>
            <FaImage />
          </button>
        </div>
        <Btn text = {"Send"} icon={<IoIosSend />} />
      </div>
    </div>
  );
}
