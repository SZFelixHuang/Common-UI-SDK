import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuiDropdownDemoComponent } from './cui-dropdown-demo/cui-dropdown-demo.component';
import { CuiTableDemoComponent } from './cui-table-demo/cui-table-demo.component';
import { CuiSwitchDemoComponent } from './cui-switch-demo/cui-switch-demo.component';
import { CuiDatepickerDemoComponent } from './cui-datepicker-demo/cui-datepicker-demo.component';
import { CuiDatepickerRangeDemoComponent } from './cui-datepicker-range-demo/cui-datepicker-range-demo.component';
import { CuiDatetimepickerDemoComponent } from './cui-datetimepicker-demo/cui-datetimepicker-demo.component';
import { CuiSelectDemoComponent } from './cui-select-demo/cui-select-demo.component';
import { CuiCheckboxDemoComponent } from './cui-checkbox-demo/cui-checkbox-demo.component';
import { CuiRadioDemoComponent } from './cui-radio-demo/cui-radio-demo.component';
import { CuiPhoneDemoComponent } from './cui-phone-demo/cui-phone-demo.component';
import { CuiPasswordDemoComponent } from './cui-password-demo/cui-password-demo.component';
import { CuiEmailDemoComponent } from './cui-email-demo/cui-email-demo.component';
import { CuiFileUploadDemoComponent } from './cui-file-upload-demo/cui-file-upload-demo.component';
import { CuiTabsDemoComponent } from './cui-tabs-demo/cui-tabs-demo.component';
import { CuiHtmlEditorDemoComponent } from './cui-html-editor-demo/cui-html-editor-demo.component';
import { CuiOperationsDemoComponent } from './cui-operations-demo/cui-operations-demo.component';
import { CuiCalendarDemoComponent } from './cui-calendar-demo/cui-calendar-demo.component';

const routes: Routes = [
  { path: 'cui-dropdown-demo', component: CuiDropdownDemoComponent },
  { path: 'cui-table-demo', component: CuiTableDemoComponent },
  { path: 'cui-switch-demo', component: CuiSwitchDemoComponent },
  { path: 'cui-datepicker-demo', component: CuiDatepickerDemoComponent },
  {
    path: 'cui-datepicker-range-demo',
    component: CuiDatepickerRangeDemoComponent
  },
  {
    path: 'cui-datetimepicker-demo',
    component: CuiDatetimepickerDemoComponent
  },
  { path: 'cui-select-demo', component: CuiSelectDemoComponent },
  { path: 'cui-checkbox-demo', component: CuiCheckboxDemoComponent },
  { path: 'cui-radio-demo', component: CuiRadioDemoComponent },
  { path: 'cui-phone-demo', component: CuiPhoneDemoComponent },
  { path: 'cui-password-demo', component: CuiPasswordDemoComponent },
  { path: 'cui-email-demo', component: CuiEmailDemoComponent },
  { path: 'cui-file-upload-demo', component: CuiFileUploadDemoComponent },
  { path: 'cui-tabs-demo', component: CuiTabsDemoComponent },
  { path: 'cui-html-editor-demo', component: CuiHtmlEditorDemoComponent },
  { path: 'cui-operations-demo', component: CuiOperationsDemoComponent },
  { path: 'cui-calendar-demo', component: CuiCalendarDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
