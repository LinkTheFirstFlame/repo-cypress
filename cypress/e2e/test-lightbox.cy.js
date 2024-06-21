/// <reference types="cypress" />

context('Lightbox Tests', () => {
    // Avant chaque test, visitez la page de l'application
    beforeEach(() => {
      cy.visit('../../app/lightbox.html'); // Remplacez par l'URL de votre page
    });
  
    it('should open the lightbox on image click', () => {
      // Sélectionner l'image et cliquer dessus
      cy.get('div.relative.w-64.cursor-pointer.shadow-md').click();
  
      // Vérifiez que la lightbox est visible
      cy.get('div.fixed.top-0.left-0.flex.flex-col.bg-black.bg-opacity-60.w-full.min-h-screen.z-40')
        .should('be.visible');
  
      // Vérifiez que l'image de la lightbox est affichée
      cy.get('div#lightbox img')
        .should('be.visible')
        .and('have.attr', 'src', 'https://picsum.photos/id/301/1024/1024');
    });


    // QUESTION 2 

    it('should open the lightbox on image click', () => {
        // Sélectionner l'image et cliquer dessus
        cy.get('div.relative.w-64.cursor-pointer.shadow-md').click();
    
        // Vérifiez que la lightbox est visible
        cy.get('div.fixed.top-0.left-0.flex.flex-col.bg-black.bg-opacity-60.w-full.min-h-screen.z-40')
          .should('be.visible');
    
        // Vérifiez que l'image de la lightbox est affichée
        cy.get('div#lightbox img')
          .should('be.visible')
          .and('have.attr', 'src', 'https://picsum.photos/id/301/1024/1024');
      });

    // it('should close the lightbox on clicking outside the lightbox', () => {
    //     // Sélectionner l'image et cliquer dessus pour ouvrir la lightbox
    //     cy.get('div.relative.w-64.cursor-pointer.shadow-md').click();
    
    //     // Vérifiez que la lightbox est visible
    //     cy.get('div.fixed.top-0.left-0.flex.flex-col.bg-black.bg-opacity-60.w-full.min-h-screen.z-40')
    //       .should('be.visible');
    
    //     // Cliquez en dehors de la lightbox pour la fermer
    //     cy.get('div.fixed.top-0.left-0.flex.flex-col.bg-black.bg-opacity-60.w-full.min-h-screen.z-40').click('topLeft');
    
    //     // Vérifiez que la lightbox n'est plus visible
    //     cy.get('div.fixed.top-0.left-0.flex.flex-col.bg-black.bg-opacity-60.w-full.min-h-screen.z-40')
    //       .should('not.exist');
    //   });

    //Question 2 
    it('Question 2 ', () => {
        //Open popover
        cy.get('[data-cy=media-overlay]').click()
        cy.get('[data-cy=lightbox-popover]').should('be.visible')  

        //Close de popover
        cy.get('[data-cy=close-popover]').click()

        //Should close the popover
        cy.get('[data-cy=lightbox-popover]').should('not.be.visible')   
    })
    //3. Tester l’ajout de la mention “j’aime” et la mise à jour des compteurs sur l’overlay et la lightbox
    it('should', () => {
        cy.get('[data-cy=media-overlay]').click()
        //Click on like-button
        cy.get('[data-cy=like-button]').click()

        cy.get('[data-cy=like-count]').should('contain.text','1')
    })
    //4. Tester la supression de la mention “jaime” et la mise à jour des compteurs sur l’overlay et la lightbox
    it('should', () => {
        cy.get('[data-cy=media-overlay]').click()
    })
})