import React from "react";
import Section from "../section/Section";


const tickets = ["$1","$2","$3","$5","$7","$10","$20","$30","$50","$100"];


export const ShowTickets: React.FC = () => {
return (
<Section title="Show Tickets On Screen">
<div className="ticket-row">
{tickets.map(t => (
<div key={t} className="ticket-pill">{t}</div>
))}
</div>
</Section>
);
};


export default ShowTickets;