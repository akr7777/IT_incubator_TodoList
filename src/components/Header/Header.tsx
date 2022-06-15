import React from "react";
import s from "./Header.module.css"

export const Header = (props: any) => {
    return(
        <div className={s.myheader}>
            <h3>This is my Header</h3>
        </div>
    );
}