describe( 'page layout', () => {
    it( 'displays powered by text in footer', () => {
        cy.visit('/')
            .get('.site-footer').contains('Powered by Drupal');
    } );
})
