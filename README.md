# Budget project

Tasks:
[x] - list in app, key = number, value = {id, type, value, comment}.
[x] - BudgetList get list in props, default {}. In template div element, inside Card component, send into Card header props (header in data).
[x] - ElAlert if list is empty. Computed isEmpty if length is 0. Use v-if+template and v-else.
[x] - component TotalBalance. Get total in props. App has computed totalBalance, use array.reduce
[x] - delete from list. Method delete item, use $emit send id. In App has @method="onDelete", onDelete use $delete.
[] - component form. ElCard -> ElForm. Data has formData (value = 0, comment = '', type = 'INCOME'), elform gets it as :model.
