import React from 'react'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import './CancelListPage.css'
import CancelListTable from '../../Components/CancelListTable/CancelListTable'

const CancelListPage = () => {
	return <div className="admin-cancel-page-container">
			<AdminSideBar />
			<CancelListTable />
		</div>
	
}

export default CancelListPage
