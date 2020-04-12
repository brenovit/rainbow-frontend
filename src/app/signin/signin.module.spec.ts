import { SigninModule } from './signin.module';

describe('LoginModule', () => {
    let loginModule: SigninModule;

    beforeEach(() => {
        loginModule = new SigninModule();
    });

    it('should create an instance', () => {
        expect(loginModule).toBeTruthy();
    });
});
