import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
    // Sign in form
    signInForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router
    ) {}

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the login form
        this.signInForm = this._formBuilder.group({
            username: ['admin', [Validators.required]],
            password: ['12345', Validators.required]
        });
    }


    /**
     * Sign in
     */
    signIn(): void {
        // Return if the form is invalid
        if (this.signInForm.invalid) { return; }
        // Disable the form
        this.signInForm.disable();
        // Sign in
        this._router.navigateByUrl('/principal');

    }
}
