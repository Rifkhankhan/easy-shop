import React from 'react'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import './ProcessingListPage.css'
import ProcessingListTable from '../../Components/ProcessingListTable/ProcessingListTable'

const ProcessingListPage = () => {
	return <div className="admin-processing-page-container">
			<AdminSideBar />
			<ProcessingListTable />
		</div>
	
}

export default ProcessingListPage
