import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const burgerControls = (props) => (
    <div className={classes.BurgerControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BurgerControl removed={() => props.ingredientRemoved(ctrl.type)}
                           added={() => props.ingredientAdded(ctrl.type)}
                           key={ctrl.label} label={ctrl.label}
                           disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW
        </button>
    </div>
);

export default burgerControls;