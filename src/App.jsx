import {useRef} from 'react'
import './App.css'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import First from './components/First/First'
import Last from './components/Last/Last'
import TableTemplate from './components/TableTemplate/TableTemplate';
import Template from './components/Template/Template';

// import { useSelector } from 'react-redux';

function App(props) {

  // const mainStore=useSelector(state=>state.mainStore.data)

    const targetRef = useRef(null);
    const loaderRef = useRef(null);
    const downloadBtnRef = useRef(null);

    const generatePdf = async () => {
      if (targetRef.current) {
        const pdf = new jsPDF("portrait", "pt", "a4"); 
        let i=0;
        for(let child of targetRef.current.children){
          const data = await html2canvas(child);
          const img = data.toDataURL({
            format: 'jpeg',
          });  
          const imgProperties = pdf.getImageProperties(img);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
          if(i!=0){
            pdf.addPage()
          }
          pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight,"",'FAST');
          const links = Array.from(child.querySelectorAll('a'));

          const A4Width = pdfWidth; // A4 width in pixels
          const A4Height = pdfHeight; // A4 height in pixels
        
          const widthScaleFactor = A4Width / child.getBoundingClientRect().width;
          const heightScaleFactor = A4Height / child.getBoundingClientRect().height;
        
          const scale_factor = Math.min(widthScaleFactor, heightScaleFactor);
          links.forEach(link => {
            const rect = link.getBoundingClientRect();
            console.log("rect",rect)
            const x = (rect.left-child.getBoundingClientRect().left)*scale_factor;
            const y = (rect.top-child.getBoundingClientRect().top)*scale_factor;
            const width = rect.width*scale_factor;
            const height = rect.height*scale_factor;
            console.log("child top,child left, x, y",child.getBoundingClientRect().top,child.getBoundingClientRect().left,rect.top,rect.left)
            // pdf.rect(x,y, width,height, 'F');
            pdf.link(x,y, width,height, {url: link.href});      
          });
          i++;
        }
        pdf.save(`Income Tax Report.pdf`);
        loaderRef.current.style.display="none"
      }
    };


    function toPDF(){
      downloadBtnRef.current.classList.add("downloadBtnClicked");
      loaderRef.current.style.display="block"
      generatePdf();
      setTimeout(()=>{
        downloadBtnRef.current.classList.remove("downloadBtnClicked");
      },500)
    }
    console.log("App")
  return (
    <div className='App'>
      <button className='DownloadBtn' ref={downloadBtnRef} onClick={toPDF}>Download</button>
        <div ref={targetRef}>
          <First></First>
          <TableTemplate></TableTemplate>
          <Template header="Exemptions & Deductions details">
            <div className="point">
                <div className="point-heading">Investments</div>
                <ul className="point-content">
                    <li>
                        Under section 80C, the investments in various products are allowed as deduction up to Rs 1,50,000. These products are life insurance, provident fund, superannuation funds, ULIP, Annuity Plan, Tuition Fee, 5 year FD, 5 year post office deposits, Senior Citizen Schemes, ELSS Mutual Funds, NPS, repayment of home loan (principal component), stamp duty paid on home purchase and Tuition Fee. 
                        <span>This deduction is allowed only under old regime.</span>
                    </li>
                    <li>
                        Under section 80CCD(1b), the investment in NPS is allowed as deduction up to Rs 50,000. This is over and above the limit of section 80C. However, please note, if you have claim the deduction of NPS under 80C, then the same investment can't be claimed under this section as well, you will have to invest different amount in that case. 
                        <span>This deduction is allowed only under old regime.</span>
                    </li>
                    <li>
                        Under section 80CCD(2), the contribution by employer in NPS is allowed as deduction. The deduction is allowed upto 12% of salary (Basic + DA) for government employees and 10% of salary (Basic + DA) for non government employees. This is over and above the limits of section 80C and 80CCD(1b).                             
                        <span>This deduction is allowed under both old regime and new regime.</span>
                    </li>
                </ul>
            </div>
            <div className="point">
                <div className="point-heading">HRA & Rent</div>
                <ul className="point-content">
                    <li>
                        Exemption for House Rent Allowance (HRA) is received under section 10(13A). Under this section, lowest amount in following 3 is exempted from being taxed.<br/>1. HRA Received <br/>2. Rent paid - 10% of salary (Basic + DA)<br/>3. 40%* of salary (Basic + DA)                            
                    <span>*50% in case you are paying rent in Delhi/Mumbai/Bengaluru/Kolkata. </span>
                    <span>This deduction is allowed only under old regime.</span>
                    </li>
                    <li>
                        If you are not receiving HRA, but paying rent, then you may get deduction under section 80GG. The amount of deduction is lowest of the following,<br/>1. Rs 5,000 per month<br/>2. Rent Paid - 10% of Total Taxable Income (before deduction under section 80GG)<br/>3. 25% of Total Taxable Income (before deduction under section 80GG)                            
                    <span>This deduction is available only if exemption under HRA is not claimed.</span>
                    <span>This deduction is allowed only under old regime.</span>
                    </li>
                    <li>
                        Did you know? If you are living with your parents and you pay rent to them, then it can be used to claim tax related benefits. 
                    </li>
                </ul>
            </div>
          </Template>
          {/* page no. 2 */}
          <Template>
            <div className="point">
                <div className="point-heading">Home Loan</div>
                <ul className="point-content">
                    <li>
                    If you are paying interest on the home loan, then you can get the tax benefits for the same under section 24.<br/> If you are staying in the home (self - occupied property) for which you have taken the loan, then you can get benefit for interest paid up to Rs 2,00,000 only.<br/> If you have put the home on rent (let out property) for which you are paying interest, then no such limit is applicable.                        
                    <span>The benefit for interest payment in case of self - occupied property is available only under old regime. There is no such condition for let out property.</span>
                    </li>
                </ul>
            </div>
            <div className="point">
                <div className="point-heading">Education Loan</div>
                <ul className="point-content">
                    <li>
                    If you have taken an education loan, then you can get the benefits for the interest you are paying on such loan. The tax benefits are available to you without any limits if you satisfy all of the following conditions:<br/>1. You have taken loan for the education of yourself/spouse/children<br/>2. Loan is taken for educational degree after 12th standard.<br/>3. The educational institute is approved by central/state/local Government in India<br/>4. Loan is taken from Bank/NBFC<br/>5. 8 years have not been passed from the 1st time you have paid the interest.                    
                    <span>This deduction is allowed only under old regime.</span>
                    </li>
                </ul>
            </div>
            <div className="point">
                <div className="point-heading">Electric Vehicle Loan</div>
                <ul className="point-content">
                    <li>
                    If you have taken a loan to buy an electric vehicle, then you can get the benefits for the interest you are paying on such loan. The tax benefits are available to you for interest paid up to Rs 1,50,000 per year if you satisfy all of the following conditions<br/>1. You have taken the loan between April 2019 and March 2023. <br/>2. Loan is taken from Bank/NBFC                    
                    <span>This deduction is allowed only under old regime.</span>
                    </li>
                </ul>
            </div>
            <div className="point">
                <div className="point-heading">Donations</div>
                <ul className="point-content">
                    <li>
                    If you have made the donations to Government Funds, registered Charitable Institutions, Scientific Research Funds, Rural Funds then you can claim the tax benefits for the same. The amount of benefit is either 50% or 100% of the donations made. 
                    <span>This deduction is allowed only under old regime.</span>
                    </li>
                    <li>
                    If you have made the donations to registered Political Parties, then you can claim the tax benefits for the same. The amount of benefit is 100% of the donations made. 
                    <span>This deduction is allowed only under old regime.</span>
                    </li>
                </ul>
            </div>
          </Template>
          {/* page 3 */}
          <Template>
          <div className="point">
                <div className="point-heading">Health Expenditure</div>
                <ul className="point-content">
                    <li>
                    Deduction under section 80D is available for Health Insurance Premium paid, Medical Expenditure Incurred and expenses paid for preventive health check up. The amount of deduction available actual amount paid or following limits whichever is lower.                   
                    <div className="KeypointsTable">
                      <div className='pointTable'>

                        <div className='KeypointRow'>
                          <div className='pointDataCommon'></div>
                          <div className='pointDataCommon pointCenter'>For Self, Spouse, Child</div>
                          <div className='pointDataCommon pointCenter'>For Parents</div>
                        </div>
                        <div className='pointRow pointTableHeading'>
                          <div className='pointDataCommon'></div>
                          <div className='pointDataCommon pointCenter'>If nobody is above the age of 60</div>
                          <div className='pointDataCommon pointCenter'>If at least 1 person is above the age of 60</div>
                          <div className='pointDataCommon pointCenter'>If nobody is above the age of 60</div>
                          <div className='pointDataCommon pointCenter'>If at least 1 person is above the age of 60</div>
                        </div>
                        <div className='pointRow'>
                          <div className='pointDataCommon'>Medical Insurance Premium</div>
                          <div className='pointDataCommon pointCenter'>₹ 25,000</div>
                          <div className='pointDataCommon pointCenter'>-</div>
                          <div className='pointDataCommon pointCenter'>₹ 25,000</div>
                          <div className='pointDataCommon pointCenter'>-</div>
                        </div>
                        <div className='pointRow'>
                          <div className='pointDataCommon'>Expenditure for Treatment*</div>
                          <div className='pointDataCommon pointCenter'>-</div>
                          <div className='pointDataCommon pointCenter pointRecommendedTableData'>₹ 25,000</div>
                          <div className='pointDataCommon pointCenter'>-</div>
                          <div className='pointDataCommon pointCenter'>₹ 25,000</div>
                        </div>
                      </div>
                    </div>
                    <span>*Benefits for medical expenditure are allowed only for those for whom Medical Insurance Premium is not paid. Expenses for health check up paid in cash up to Rs 5,000 is allowed within above mentioned limits only.</span>
                    <span>This deduction is allowed only under old regime.</span>
                    </li>
                </ul>
            </div>
          </Template>
          <Last>What's Next</Last>
        </div>
        <div ref={loaderRef} className="loader-container">
        <div className='loader'></div>
      </div>
    </div>

  )
}

export default App
