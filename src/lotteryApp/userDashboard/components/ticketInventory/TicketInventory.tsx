import React from "react";
import Section from "../section/Section";


interface InventoryAction { id:string; label:string }
const actions: InventoryAction[] = [
{ id:'activate', label: 'Activate Packs' },
{ id:'confirm', label: 'Confirm Packs' },
{ id:'return', label: 'Return To State' },
{ id:'refresh', label: 'Refresh Display' }
];


export const TicketInventory: React.FC = () => {
return (
<Section title="Ticket Inventory">
<div className="actions">
{actions.map(a => (
<div key={a.id} className="action-btn">{a.label}</div>
))}
</div>
</Section>
);
};


export default TicketInventory;