frappe.pages['bi-reports-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'BI Reports Page',
		single_column: true
	});
}