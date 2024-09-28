import './ReportLayout.css';

const data = [
    { sno :'1', doctorname:"Dr.John Doe", doctorspecility:"Cardiology",viewreport:"",downloadreport:""},
	{ sno :'2', doctorname:"Dr.John Smith", doctorspecility:"Dermatology",viewreport:"",downloadreport:""},
]
function ReviewLayout() {
	return (
		<div className="review">
			<table>
				<tr>
					<th>Serial Number</th>
					<th>Doctor Name</th>
					<th>Doctor Specility</th>
                    <th>View Report</th>
					<th>Download Report</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.sno}</td>
							<td>{val.doctorname}</td>
							<td>{val.doctorspecility}</td>
                            <td><button>View Report</button></td>
                            <td><button>Download Report</button></td>
                           
						</tr>
					)
				})}
			</table>
		</div>
	);
}

export default ReviewLayout;
