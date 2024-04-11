import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
// import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
// import { dollar } from '../../utils/Icons';
// import Chart from '../Chart/Chart';

function Income() {
    const {addIncome} = useGlobalContext()
    return (
        <IncomeStyled>
            <InnerLayout>
            <h1>Incomes</h1>
            <div className="income-content">
                <div className="form-container"></div>
                <div className="incomes">

                </div>
            </div>
                
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    
`;

export default Income


//const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()