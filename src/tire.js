// import React, { useState } from 'react';

// const Tire = () => {
//     return (
//     <>
//         <div className="tire-section">
//             <div className="tire-container">
//                 <div className="filter_buttons">
//                 <button className="active" data-name="all">Show all</button>
//                 <button className="SUV-btn">SUV</button>
//                 <button className="sedan-btn">Sedan</button>
//                 <button className="hatch-btn">Hatchback</button>
//                 </div>
//             </div>
            
//             {/* SUV */}

//             <div className="filterable_cards">
//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img1">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ASSURANCE DURAPLUS 2 4PR</h6>
//                         <p className="tirecard_text">185/70 R14</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img2">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ASSURANCE MAXGUARD SUV 4PR</h6>
//                         <p className="tirecard_text">265/65 R17</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img3">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ASSURANCE TRIPLEMAX 2 4PR</h6>
//                         <p className="tirecard_text">215/55 R17</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img4">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">BLUEARTH ES ES32 4PR</h6>
//                         <p className="tirecard_text">185/60 R15</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img5">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">CP661 4PR</h6>
//                         <p className="tirecard_text">185/70 R14</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card">
//                     <div className="tire-img t-img6">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">DUELER H/T 684 4PR</h6>
//                         <p className="tirecard_text">265/65 R17</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card">
//                     <div className="tire-img t-img7">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ECOPIA EP150 4PR</h6>
//                         <p className="tirecard_text">185/70 R14</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img8">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ENERGY XM2 + 4PR</h6>
//                         <p className="tirecard_text">185/70 R14</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img9">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">N BLUE HD PLUS 4PR</h6>
//                         <p className="tirecard_text">195/60 R15</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img10">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">N PRIZ SH9I 4PR</h6>
//                         <p className="tirecard_text">195/55 R16</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card SUV">
//                     <div className="tire-img t-img11">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ROADIAN AT PRO RA8 4PR</h6>
//                         <p className="tirecard_text">265/65 R17</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>  
//         </div>
            
//         const [filter, setFilter] = useState('all');


//         const tireData= [
//         { 
//             name : 'ASSURANCE DURAPLUS 2 4PR', 
//             size: '185/70 R14', 
//             type: 'sedan'
//         },
//         { 
//         name : 'ASSURANCE MAXGUARD SUV 4PR', 
//         size: '265/65 R17', 
//         type: 'suv' 
//         },
//         { name : 'ASSURANCE TRIPLEMAX 2', size: '215/55 R17', type: 'suv' },
//         { name : 'BLUEARTH ES ES32 4PR', size: '185/60 R15', type: 'suv' },
//         { name : 'BLUEARTH ES ES32 4PR', size: '185/60 R15', type: 'sedan' },
//         { name : 'CP661 4PR', size: '185/70 R14', type: 'suv' },
//         { name : 'DUELER H/T 684 4PR', size: '265/65 R17', type: 'suv' },
//         { name : 'ECOPIA EP150 4PR', size: '185/70 R14', type: 'suv' },
//         { name : 'ENERGY XM2 + 4PR', size: '185/70 R14', type: 'suv' },
//         { name : 'N BLUE HD PLUS 4PR', size: '195/60 R15', type: 'suv' },
//         { name : 'N PRIZ SH9I 4PR', size: '195/55 R16', type: 'suv' },
//         { name : 'ROADIAN AT PRO RA8 4PR', size: '265/65 R17', type: 'suv' },
//         { name : 'ASSURANCE DURAPLUS 2', size: '165/65 R14', type: 'sedan' },
//         { name : 'ECOPIA EP150 4PR', size: '165/65 R14', type: 'sedan' },
//         { name : 'ENASAVE EC300 4PR', size: '165/65 R14', type: 'hatchback' },
//         { name : 'ENERGY XM2 + 4PR', size: '185/55 R16', type: 'sedan' },
//         { name : 'N FERA SU1 4PR', size: '185/55 R16', type: 'hatchback' },
//         { name : 'PILOT SPORT 4 4PR', size: '205/45 ZR17', type: 'sedan' },
//         { name : 'SP SPORT 2030 4PR', size: '175/55 R15', type: 'hatchback' },
//         { name : 'SP SPORT LM705 4PR', size: '205/45 R17', type: 'sedan' },
//         { name : 'SP TOURING R1 4PR', size: '175/65 R15', type: 'hatchback' }]

//                     {/* Sedan */}


//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img12">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ASSURANCE DURAPLUS 2 4PR</h6>
//                         <p className="tirecard_text">165/65 R14</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img13">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ECOPIA EP150 4PR</h6>
//                         <p className="tirecard_text">165/65 R14</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img14">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ENASAVE EC300 4PR</h6>
//                         <p className="tirecard_text">165/65 R14</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img15">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">ENERGY XM2 + 4PR</h6>
//                         <p className="tirecard_text">185/55 R16</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img16">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">N FERA SU1 4PR</h6>
//                         <p className="tirecard_text">185/55 R16</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img17">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">PILOT SPORT 4 4PR</h6>
//                         <p className="tirecard_text">205/45 ZR17</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img18">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">SP SPORT 2030 4PR</h6>
//                         <p className="tirecard_text">175/55 R15</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img19">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">SP SPORT LM705 4PR</h6>
//                         <p className="tirecard_text">205/45 R17</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//                 <div className="tire-card Sedan">
//                     <div className="tire-img t-img20">
//                     </div>
//                     <div className="tirecard_body">
//                         <h6 className="tirecard_title">SP TOURING R1 4PR</h6>
//                         <p className="tirecard_text">175/65 R15</p>
//                         <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>

//             </div>

//         // Function to handle filter button clicks
//         const handleFilterClick = (type) => {

//             setFilter(type); // Update the filter state when a button is clicked
//         };

//         // Filter the tire data based on the selected filter
//         const filteredTires = tireData.filter((tire) => filter === 'all' || tire.type === filter);

//             <div className="tire-section">
//             <div className="tire-container">
//                 <div className="filter_buttons">
//                 <button className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterClick('all')} data-name="all">Show all</button>
//                 <button className={filter === 'suv' ? 'active' : ''} onClick={() => handleFilterClick('suv')} data-name="suv">SUV</button>
//                 <button className={filter === 'sedan' ? 'active' : ''} onClick={() => handleFilterClick('sedan')} data-name="sedan">Sedan</button>
//                 <button className={filter === 'hatchback' ? 'active' : ''} onClick={() => handleFilterClick('hatchback')} data-name="hatchback">Hatchback</button>
//                 </div>
//             </div>

//             <div className="filterable_cards">
//                 {filteredTires.map((tire, index) => (
//                 <div className="tire-card" key={index} data-name={tire.name}>
//                     <div className="tire-img t-img1"></div>
//                     <div className="tirecard_body">
//                     <h6 className="tirecard_title">{tire.name}</h6>
//                     <p className="tirecard_text">{tire.size}</p>
//                     <button className="details-Btn">View Tire Details</button>
//                     </div>
//                 </div>
//                 ))}
//             </div>
//             </div>
//     </>
// );
// };

// export default Tire;
