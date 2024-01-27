import './DetailedTable.css'

function DetailedTable() {
    return (  
        <div className="DetailedTable">
            <div className="DetailedTable-main-heading DetailedTable-heading">
                <div></div>
                <div> Old Regime</div>
                <div>New Regime</div>
            </div>
            <div className="DetailedTable-common DetailedTable-heading">
                <div></div>
                <div> Old Regime</div>
                <div>New Regime</div>
                <div>Old Regime</div>
                <div>New Regime</div>
            </div>
            <div className="DetailedTable-common DetailedTable-sub-heading">
                <div>Total Annual Income (A)</div>
                <div>₹ 23,18,550</div>
                <div>₹ 23,18,550</div>
                <div>₹ 23,18,550</div>
                <div>₹ 23,18,550</div>
            </div>
            {/* annual income sub div */}
            <div className="subDiv">
                <div className="DetailedTable-common">
                    <div>Capital Gain</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>Rent</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>Salary (sub-total)</div>
                    <div>₹ 23,18,550</div>
                    <div>₹ 23,18,550</div>
                    <div>₹ 23,18,550</div>
                    <div>₹ 23,18,550</div>
                </div>
                {/* salary sub div */}
                <div className="subDiv">
                    <div className="DetailedTable-common">
                        <div>Basic</div>
                        <div>₹ 0</div>
                        <div>₹ 0</div>
                        <div>₹ 0</div>
                        <div>₹ 0</div>
                    </div>
                    <div className="DetailedTable-common">
                        <div>DA</div>
                        <div>₹ 0</div>
                        <div>₹ 0</div>
                        <div>₹ 0</div>
                        <div>₹ 0</div>
                    </div>
                    <div className="DetailedTable-common">
                        <div>HRA</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                    </div>
                    <div className="DetailedTable-common">
                        <div>LTA</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                    </div>
                    <div className="DetailedTable-common">
                        <div>Other Allowance</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                        <div>₹ 23,18,550</div>
                    </div>
                </div>
            </div>
            
            <div className="DetailedTable-common DetailedTable-sub-heading">
                <div>Allowance Exemption (B)</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
            </div>
            {/* allowance exemption sub div */}
            <div className="subDiv">
                <div className="DetailedTable-common">
                    <div>Standard deduction</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                </div>
                <div className="DetailedTable-common">
                    <div>HRA</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 12,573</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>LTA</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
            </div>
            
            <div className="DetailedTable-common DetailedTable-sub-heading">
                <div>Deduction under Chapter VI-A (C)</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
            </div>
            {/* Deduction under Chapter VI-A (C) sub div */}
            <div className="subDiv">
                <div className="DetailedTable-common">
                    <div>80C (Investments)</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80CCD(1b) (NPS 50k)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 12,573</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80CCD (2) (NPS employer contribution)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80D (Insurance + Medical Expenditure)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80DD (Disability)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80CCD (2) (NPS employer contribution)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80DDB (Special Medical Expenditure)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80E (Education Loan)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80EEB (EV Loan)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>80GG (Rent)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="DetailedTable-common">
                    <div>Donation (Charitable, Political Party)</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
            </div>

            <div className="DetailedTable-common DetailedTable-sub-heading">
                <div>Interest on self-occupied property (D)</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
            </div>
            
            <div className="DetailedTable-common DetailedTable-sub-heading">
                <div>Taxable Income (A-B-C-D)</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
            </div>
        </div>
    );
}

export default DetailedTable;