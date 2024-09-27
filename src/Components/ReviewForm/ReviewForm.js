import './ReviewForm.css';
import {useNavigate } from 'react-router-dom';

const data = [
    { sno :'1', doctorname:"Dr.John Doe", doctorspecility:"Cardiology",providefback:"",reivewgiven:""},
	{ sno :'2', doctorname:"Dr.John Smith", doctorspecility:"Dermatology",providefback:"",reivewgiven:""},
]
function Reviews() {

    const navigate = useNavigate();
   const handleButtonClick=()=>{
        navigate("/feedback");
    };

    
	return (
		<div className="review">
			<table>
				<tr>
					<th>Serial Number</th>
					<th>Doctor Name</th>
					<th>Doctor Specility</th>
                    <th>Provide Feedback</th>
					<th>Review Given</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.sno}</td>
							<td>{val.doctorname}</td>
							<td>{val.doctorspecility}</td>
                            <td><button onClick={handleButtonClick}>Click Here</button></td>
                            
						</tr>
					)
				})}
			</table>
		</div>
	);
}

export default Reviews;
