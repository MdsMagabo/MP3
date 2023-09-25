import React, { useState } from 'react';

const Tire = () => {

    const [filter, setFilter] = useState('all');


    const tireData = [
        { name: 'ASSURANCE DURAPLUS 2 4PR', size: '185/70 R14', category: 'sedan' },
        { name: 'ASSURANCE MAXGUARD SUV 4PR', size: '265/65 R17', category: 'suv' },    { name: 'ASSURANCE TRIPLEMAX 2', size: '215/55 R17', type: 'suv' },
        { name: 'BLUEARTH ES ES32 4PR', size: '185/60 R15', type: 'suv' },
        { name: 'BLUEARTH ES ES32 4PR', size: '185/60 R15', type: 'sedan' },
        { name: 'CP661 4PR', size: '185/70 R14', type: 'suv' },
        { name: 'DUELER H/T 684 4PR', size: '265/65 R17', type: 'suv' },
        { name: 'ECOPIA EP150 4PR', size: '185/70 R14', type: 'suv' },
        { name: 'ENERGY XM2 + 4PR', size: '185/70 R14', type: 'suv' },
        { name: 'N BLUE HD PLUS 4PR', size: '195/60 R15', type: 'suv' },
        { name: 'N PRIZ SH9I 4PR', size: '195/55 R16', type: 'suv' },
        { name: 'ROADIAN AT PRO RA8 4PR', size: '265/65 R17', type: 'suv' },
        { name: 'ASSURANCE DURAPLUS 2', size: '165/65 R14', type: 'sedan' },
        { name: 'ECOPIA EP150 4PR', size: '165/65 R14', type: 'sedan' },
        { name: 'ENASAVE EC300 4PR', size: '165/65 R14', type: 'hatchback' },
        { name: 'ENERGY XM2 + 4PR', size: '185/55 R16', type: 'sedan' },
        { name: 'N FERA SU1 4PR', size: '185/55 R16', type: 'hatchback' },
        { name: 'PILOT SPORT 4 4PR', size: '205/45 ZR17', type: 'sedan' },
        { name: 'SP SPORT 2030 4PR', size: '175/55 R15', type: 'hatchback' },
        { name: 'SP SPORT LM705 4PR', size: '205/45 R17', type: 'sedan' },
        { name: 'SP TOURING R1 4PR', size: '175/65 R15', type: 'hatchback' },

    ];

    
    const handleFilterClick = (type) => {
        setFilter(type); 
    };


    const filteredTires = tireData.filter((tire) => filter === 'all' || tire.category === filter);

    return (
        <>
            <div className="tire-section">
                <div className="tire-container">
                    <div className="filter_buttons">
                        <button className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterClick('all')} data-name="all">
                            Show all
                        </button>
                        <button className={filter === 'suv' ? 'active' : ''} onClick={() => handleFilterClick('suv')} data-name="suv">
                            SUV
                        </button>
                        <button className={filter === 'sedan' ? 'active' : ''} onClick={() => handleFilterClick('sedan')} data-name="sedan">
                            Sedan
                        </button>
                        <button className={filter === 'hatchback' ? 'active' : ''} onClick={() => handleFilterClick('hatchback')} data-name="hatchback">
                            Hatchback
                        </button>
                    </div>
                </div>

                <div className="filterable_cards">
                    {filteredTires.map((tire, index) => (
                        <div className="tire-card" key={index} data-name={tire.category}>
                            <div className={`tire-img t-img${index + 1}`}></div>
                            <div className="tirecard_body">
                                <h6 className="tirecard_title">{tire.name}</h6>
                                <p className="tirecard_text">{tire.size}</p>
                                <button className="details-Btn">View Tire Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tire;
