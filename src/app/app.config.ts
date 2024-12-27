import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideServiceWorker } from '@angular/service-worker';
import { ErrorResponseInterceptor } from './shared/interceptors/error.interceptor';
import { SuccessResponseInterceptor } from './shared/interceptors/success.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    // Proveedor para peticiones http
    provideHttpClient(withFetch(), withInterceptors([ErrorResponseInterceptor, SuccessResponseInterceptor])),
    provideClientHydration(), provideHttpClient(), provideTransloco({
        config: {
            availableLangs: ['en', 'es'],
            defaultLang: 'en',
            // Remove this option if your application doesn't support changing language in runtime.
            reRenderOnLangChange: true,
            prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
    }),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
]
};
