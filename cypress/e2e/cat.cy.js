
describe('Тестирование cайта ', function () {
   it('Позитивный кейс на покупку нового фото для своего тренера', function () {
      cy.visit('https://pokemonbattle.me/login');
      cy.get(':nth-child(1) > .auth__input').type('davidxx1@mail.ru');
      cy.get('#password').type('Vasaner12');
      cy.get('.auth__button').click();
      cy.get('.header__btns > [href="/shop"]').click();
      cy.get(':nth-child(3) > .shop__button').click();
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
      cy.get(':nth-child(1) > .pay_base-input-v2').type('03/33');
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('WWWWW');
      cy.wait(5000);
      cy.get('.pay-btn').click();
      cy.get('#cardnumber').type('56456');
      cy.get('.payment__submit-button').click();
      cy.get('.payment__font-for-success').should('be.visible');
      cy.get('.success__image').should('be.visible');
      cy.get('.payment__info-text-new').should('be.visible');
      cy.get('.payment__info-button-v2').should('be.visible');
      cy.get('.payment__adv').should('be.visible');
 
       })
   })