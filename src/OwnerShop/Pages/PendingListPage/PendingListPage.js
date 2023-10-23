import React from 'react'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import './PendingListPage.css'
import PendingListTable from '../../Components/PendingListTable/PendingListTable'

const PendingListPage = () => {
	return <div className="admin-pending-page-container">
			<AdminSideBar />
			<PendingListTable />
		</div>
	
}

export default PendingListPage
