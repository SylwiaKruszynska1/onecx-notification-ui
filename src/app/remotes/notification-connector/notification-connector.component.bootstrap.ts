import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { importProvidersFrom } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'

import { AngularAuthModule } from '@onecx/angular-auth'
import { bootstrapRemoteComponent } from '@onecx/angular-webcomponents'

import { environment } from 'src/environments/environment'
import { OneCXNotificationConnectorComponent } from './notification-connector.component'

bootstrapRemoteComponent(
  OneCXNotificationConnectorComponent,
  'ocx-notification-connector-component',
  environment.production,
  [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(AngularAuthModule),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter([
      {
        path: '**',
        children: []
      }
    ])
  ]
)
