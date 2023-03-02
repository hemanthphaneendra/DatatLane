import ReadMore from '../components/ReadMore';

const SupportWorkCards = ({supportWorkUsers}) =>{

    const rows = supportWorkUsers.reduce(function (rows, key, index) { 
        return (index % 2 === 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

    return (
        <>
            {
                rows && rows.map(row=>(
                    <div className='cards-row'>
                        <div className='card' key={row[0]._id}>
                            <div className='row'>
                                <div className='img-div'>
                                    <img className='img' 
                                    src='https://source.unsplash.com/w8YICpz1I10/358x458' 
                                    alt='' 
                                    />
                                    <p style={{paddingLeft:"20px",justifyContent:"left"}}>Charges:</p>
                                    <p style={{paddingLeft:"25px"}}>{ row[0].charges }/hr</p>
                                </div>
                                <div className='content'>
                                    <h2>{ row[0].name }</h2>
            
                                    <h1>{ row[0].expertise }</h1>
            
                                    <ReadMore>
                                        { row[0].description }
                                    </ReadMore>
                                </div>
                            </div>
                        </div>
                        {row[1] && <div className='card' key={row[1]._id}>
                            <div className='row'>
                                <div className='img-div'>
                                    <img className='img' 
                                    src='https://source.unsplash.com/w8YICpz1I10/358x458' 
                                    alt='' 
                                    />
                                    <label style={{paddingLeft:"20px"}}>Charges:</label>
                                    <p style={{paddingLeft:"25px"}}>{ row[1].charges }/hr</p>
                                </div>
                                <div className='content'>
                                    <h2>{ row[1].name }</h2>
            
                                    <h1>{ row[1].expertise }</h1>
            
                                    <ReadMore>
                                        { row[1].description }
                                    </ReadMore>
                                </div>
                            </div>
                        </div>}
                    </div>
                ))
            }
        </>
    );
}

export default SupportWorkCards;