// import "@/assets/scss/index.scss"
var demo = new Vue({
	el: '#app',
	data: {
		employee: [],
		employee_name: '',
		employee_salary: 0,
		employee_department: '',
		employee_position: '',
		currentOption: 'all',
		submit_btn: ['新增員工資料', '確定修改'],
		btn_index: 0,
		person: []
	},
	watch:{
		currentOption: 'sort_option'
	},
	methods: {
		add_employee: function(){
			this.employee.push({
				name: this.employee_name,
				salary: this.employee_salary,
				department: this.employee_department,
				position: this.employee_position
			})
		},
		del_employee: function(person){
			this.employee.splice(this.employee.indexOf(person), 1)
		},
		edit_employee: function(person, mode){
			if (mode == 'edit'){
				this.employee_name = person.name
				this.employee_salary = person.salary
				this.employee_department = person.department
				this.employee_position = person.position
				this.employee_name_bk = person.name
				this.person = person
				this.btn_index = 1
			} else if (mode == 'save'){
				this.employee[this.employee.indexOf(this.person)].name = this.employee_name
				this.employee[this.employee.indexOf(this.person)].salary = this.employee_salary
				this.employee[this.employee.indexOf(this.person)].department = this.employee_department
				this.employee[this.employee.indexOf(this.person)].position = this.employee_position

				// this.employee[this.person.salary] = this.salary
				// this.employee[this.person.department] = this.department
				// this.employee[this.person.position] = this.position
				this.btn_index = 0
			}
		}
	}
})