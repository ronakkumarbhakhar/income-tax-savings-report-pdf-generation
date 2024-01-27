import Header from '../Header/Header'
import DetailedTable from '../DetailedTable/DetailedTable'
import SummaryTable from '../SummaryTable/SummaryTable'
import './TableTemplate.css'
function TableTemplate() {

    return ( 
        <section className="TableTemplate">
            <Header></Header>
            <DetailedTable></DetailedTable>
            <SummaryTable></SummaryTable>
        </section>
     );
}

export default TableTemplate;