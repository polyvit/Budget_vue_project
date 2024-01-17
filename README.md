# Budget project

Tasks:
[x] - list in app, key = number, value = {id, type, value, comment}.
[x] - BudgetList get list in props, default {}. In template div element, inside Card component, send into Card header props (header in data).
[x] - ElAlert if list is empty. Computed isEmpty if length is 0. Use v-if+template and v-else.
[x] - component TotalBalance. Get total in props. App has computed totalBalance, use array.reduce
[x] - delete from list. Method delete item, use $emit send id. In App has @method="onDelete", onDelete use $delete.
[x] - component form. ElCard -> ElForm. Data has formData (value = 0, comment = '', type = 'INCOME'), elform gets it as :model. Inside ElFormItem, has

Hometasks:
[x] - Внутри компоненты BudgetList взять шаблон который мы генерируем для одного элемента в списке и вынести его в отдельную компоненту например BudgetListItem.
[x] - Сейчас есть бага, если мы выберем в форме тип outcome но цифру введем без минуса то это значение приплюсуется с общему балансу, нужно это исправить.
[x] - TotalBalance должен менять цвет текста в зависимости от значения total, если значение больше нуля то цвет зеленый, если ноль то черный и если меньше нуля то красный.
[x] - При удаление одного item из списка запрашивать подтверждение хотя бы обычным confirm, но если хотите посложнее то используйте из фреймворка element-ui, элемент Dialog.
[x] - В каждом элементе списка расход/доход доблжна быть иконка el-icon-top или el-icon-bottom в зависимости от того какой тип у данного элемета расход или доход. Эти иконки вы можете найти в разделе Icon на сайте element-ui. Также должен менятся цвет цифры на красный или зеленый.
[x] - Добавить кнопки сортировки над BudgetList которые будут управлять сортировкой списка, показать только расходы, показать только доходы, показать все.
[x] - Сделать кастомный валидатор для поля value в форме, пользователь не должен иметь возможности отправить форму со значением ноль в этом поле. Про кастомные валидаторы можете почитать в документации element-ui в разделе с Form.
[x] - Создать store для хранения данных о расходах и доходах, добавить соответсвующие getters, actions и так далее.
