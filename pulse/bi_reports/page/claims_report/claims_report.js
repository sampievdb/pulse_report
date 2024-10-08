frappe.pages['claims-report'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Claims Report',
		single_column: true
	});
}