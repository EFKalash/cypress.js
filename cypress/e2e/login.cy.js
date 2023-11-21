
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка Войти активна
        cy.get('#loginButton').click(); // клик кнопка Войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         }) 

	it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#forgotEmailButton').click(); // клик Забыли пароль?
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели email
        cy.get('#restoreEmailButton').click(); // клик Отправить код
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         }) 

	it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio123'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка Войти активна
        cy.get('#loginButton').click(); // клик кнопка Войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

	it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#mail').type('j250786@mail.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка Войти активна
        cy.get('#loginButton').click(); // клик кнопка Войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

	it('Логин без @, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка Войти активна
        cy.get('#loginButton').click(); // клик кнопка Войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

	it('Логин GerMan@Dolnikov.ru, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка Войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка Войти активна
        cy.get('#loginButton').click(); // клик кнопка Войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         }) 

})