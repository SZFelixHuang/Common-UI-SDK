import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CommonUiModule } from '../../projects/common-ui/src/public-api';
import { AppComponent } from './app.component';
import { CuiDropdownDemoComponent } from './cui-dropdown-demo/cui-dropdown-demo.component';
import { CuiTableDemoComponent } from './cui-table-demo/cui-table-demo.component';
import { CuiSwitchDemoComponent } from './cui-switch-demo/cui-switch-demo.component';
import { CuiDatetimepickerDemoComponent } from './cui-datetimepicker-demo/cui-datetimepicker-demo.component';
import { CuiDatepickerDemoComponent } from './cui-datepicker-demo/cui-datepicker-demo.component';
import { CuiDatepickerRangeDemoComponent } from './cui-datepicker-range-demo/cui-datepicker-range-demo.component';
import { CuiDatetimepickerRangeDemoComponent } from './cui-datetimepicker-range-demo/cui-datetimepicker-range-demo.component';
import { CuiSelectDemoComponent } from './cui-select-demo/cui-select-demo.component';
import { CuiCheckboxDemoComponent } from './cui-checkbox-demo/cui-checkbox-demo.component';
import { CuiRadioDemoComponent } from './cui-radio-demo/cui-radio-demo.component';
import { CuiPasswordDemoComponent } from './cui-password-demo/cui-password-demo.component';
import { CuiEmailDemoComponent } from './cui-email-demo/cui-email-demo.component';
import { CuiPhoneDemoComponent } from './cui-phone-demo/cui-phone-demo.component';
import { CuiFileUploadDemoComponent } from './cui-file-upload-demo/cui-file-upload-demo.component';
import { CuiTabsDemoComponent } from './cui-tabs-demo/cui-tabs-demo.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CuiHtmlEditorDemoComponent } from './cui-html-editor-demo/cui-html-editor-demo.component';
import { CuiOperationsDemoComponent } from './cui-operations-demo/cui-operations-demo.component';
import { CuiCalendarDemoComponent } from './cui-calendar-demo/cui-calendar-demo.component';

@NgModule({
   declarations: [
      AppComponent,
      CuiDropdownDemoComponent,
      CuiTableDemoComponent,
      CuiSwitchDemoComponent,
      CuiDatetimepickerDemoComponent,
      CuiDatepickerDemoComponent,
      CuiDatepickerRangeDemoComponent,
      CuiDatetimepickerRangeDemoComponent,
      CuiSelectDemoComponent,
      CuiCheckboxDemoComponent,
      CuiRadioDemoComponent,
      CuiPasswordDemoComponent,
      CuiEmailDemoComponent,
      CuiPhoneDemoComponent,
      CuiFileUploadDemoComponent,
      CuiTabsDemoComponent,
      CuiHtmlEditorDemoComponent,
      CuiOperationsDemoComponent,
      CuiCalendarDemoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CommonUiModule,
      FroalaEditorModule.forRoot(),
      FroalaViewModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
