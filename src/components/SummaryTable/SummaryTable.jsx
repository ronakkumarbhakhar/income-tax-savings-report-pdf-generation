import './SummaryTable.css'

function SummaryTable() {
    return (
        <div className="SummaryTable">
           <div className="SummaryTable-common SummaryTable-heading">
                <div>Total Tax payable (i+ii-iii-iv+v)</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
                <div>₹ 62,573</div>
                <div>₹ 50,000</div>
            </div>
            {/* allowance exemption sub div */}
            <div className="subDiv">
                <div className="SummaryTable-common">
                    <div>i. Tax on above</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                    <div>₹ 50,000</div>
                </div>
                <div className="SummaryTable-common">
                    <div>ii. Surcharge</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 12,573</div>
                    <div>₹ 0</div>
                </div>
                <div className="SummaryTable-common">
                    <div>iii. Marginal Relief</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
                <div className="SummaryTable-common">
                    <div>iv. Rebate</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 12,573</div>
                    <div>₹ 0</div>
                </div>
                <div className="SummaryTable-common">
                    <div>v. Cess</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                    <div>₹ 0</div>
                </div>
            </div>
        </div>
      );
}

export default SummaryTable;