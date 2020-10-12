import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component';
import { TableComponent } from './table/table.component';
import { TableHeaderComponent } from './table/table-header/table-header.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { TableColumnComponent } from './table/table-column/table-column.component';
import { SwitchComponent } from './switch/switch.component';
import { DatetimepickerComponent } from './datetimepicker/datetimepicker.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerRangeComponent } from './datepicker-range/datepicker-range.component';
import { DatetimepickerRangeComponent } from './datetimepicker-range/datetimepicker-range.component';
import { SelectComponent } from './select/select.component';
import { OptionComponent } from './select/option/option.component';
import { PasswordComponent } from './password/password.component';
import { PhoneComponent } from './phone/phone.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { EmailComponent } from './email/email.component';
import { FileComponent } from './file/file.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormComponent } from './form/form.component';
import { ElementComponent } from './element/element.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationComponent } from './operations/operation/operation.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  imports: [FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()],
  declarations: [
    DropdownComponent,
    DropdownItemComponent,
    TableComponent,
    TableHeaderComponent,
    TableRowComponent,
    TableColumnComponent,
    SwitchComponent,
    DatetimepickerComponent,
    DatepickerComponent,
    DatepickerRangeComponent,
    DatetimepickerRangeComponent,
    SelectComponent,
    OptionComponent,
    PasswordComponent,
    PhoneComponent,
    CheckboxComponent,
    EmailComponent,
    FileComponent,
    InputComponent,
    RadioComponent,
    TabsComponent,
    TabComponent,
    HtmlEditorComponent,
    FormComponent,
    ElementComponent,
    OperationsComponent,
    OperationComponent,
    CalendarComponent
  ],
  exports: [
    DropdownComponent,
    DropdownItemComponent,
    TableComponent,
    TableHeaderComponent,
    TableRowComponent,
    TableColumnComponent,
    SwitchComponent,
    DatetimepickerComponent,
    DatepickerComponent,
    DatepickerRangeComponent,
    DatetimepickerRangeComponent,
    SelectComponent,
    OptionComponent,
    PasswordComponent,
    PhoneComponent,
    CheckboxComponent,
    EmailComponent,
    FileComponent,
    InputComponent,
    RadioComponent,
    TabsComponent,
    TabComponent,
    HtmlEditorComponent,
    FormComponent,
    ElementComponent,
    OperationsComponent,
    OperationComponent,
    CalendarComponent
  ]
})
export class CommonUiModule {}
