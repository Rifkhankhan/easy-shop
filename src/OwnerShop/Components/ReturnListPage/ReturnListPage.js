import React from 'react'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import './ReturnListPage.css'
import RetunsListTable from '../../Components/RetunsListTable/RetunsListTable'

const ReturnListPage = () => {
	return <div className="admin-return-page-container">
			<AdminSideBar />
			<RetunsListTable />
		</div>
	
}

export default ReturnListPage
