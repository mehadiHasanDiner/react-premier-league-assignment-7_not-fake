import React from 'react';


const Haired = (props) => {
    const playerCart = props.playerCart;
    const totalSalary = playerCart.reduce(
        (sum, player) => sum +parseFloat(player.salary), 
        0
    ); 



    return (
        <div>
            
            <p>Total Amount of Salary : {totalSalary.toFixed(2)}</p>
            
            {
                playerCart.map(perSalary =><p>  {perSalary.name} Total Salary = $ {perSalary.salary} </p>)
            }

            
        </div>
    );
};

export default Haired;