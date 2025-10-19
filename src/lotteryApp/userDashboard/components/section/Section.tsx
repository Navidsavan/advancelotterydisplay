import React from "react";
import Card from "../card/Card";


export const Section: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
return (
<Card>
{title && <div className="title">{title}</div>}
{children}
</Card>
);
};


export default Section;