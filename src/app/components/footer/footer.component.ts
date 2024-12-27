import { Component } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

    constructor(
        private _translocoService: TranslocoService
    ) { }

    /**
     * Change Language:
     * Function to change the language of the application
     *
     * @param lang
     */
    changeLanguage(lang: string) {
        this._translocoService.setActiveLang(lang);
    }

}
